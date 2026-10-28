const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealer = "IntersectionObserver" in window ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealer.unobserve(e.target); } }), { threshold: .12 }) : null;
let activeCategory = "Todos";
let searchTerm = "";
const formatDate = date => new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`)).replace(".", "").toUpperCase();

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
function getFilteredArticles() {
  return ARTICLES.filter(article => {
    const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
    const haystack = `${article.title} ${article.excerpt} ${article.category} ${article.content.map(block => block.text).join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(searchTerm.toLowerCase());
  }).sort((a,b) => b.date.localeCompare(a.date));
}
function articleCard(article, index) {
  return `<article class="article-card" tabindex="0" role="button" aria-label="Ler ${escapeHTML(article.title)}" data-open-article="${escapeHTML(article.id)}">
    <div class="card-image"><img src="${escapeHTML(article.image)}" alt="${escapeHTML(article.imageAlt)}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='#d6e1b7'"><span class="category-pill">${escapeHTML(article.category.toUpperCase())}</span></div>
    <div class="card-meta"><span>${formatDate(article.date)}</span><span>${escapeHTML(article.readTime)}</span></div>
    <h3 class="card-title">${escapeHTML(article.title)}</h3><p class="card-excerpt">${escapeHTML(article.excerpt)}</p>
    <div class="read-link">Ler artigo <span>↗</span></div></article>`;
}
function listCard(article) {
  return `<article class="list-card" tabindex="0" role="button" aria-label="Ler ${escapeHTML(article.title)}" data-open-article="${escapeHTML(article.id)}">
    <img class="list-thumb" src="${escapeHTML(article.image)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div><div class="list-category">${escapeHTML(article.category.toUpperCase())} · ${formatDate(article.date)}</div><div class="list-title">${escapeHTML(article.title)}</div></div>
    <div class="list-description">${escapeHTML(article.excerpt)}</div><span class="list-arrow">↗</span></article>`;
}
function renderFilters() {
  const categories = ["Todos", ...new Set(ARTICLES.map(article => article.category))];
  $("#filters").innerHTML = categories.map(category => `<button class="filter ${category === activeCategory ? "active" : ""}" data-category="${escapeHTML(category)}">${category === "Todos" ? "Todos os temas" : escapeHTML(category)}${category === "Todos" ? ' <span>↗</span>' : ""}</button>`).join("");
}
function renderArticles() {
  const articles = getFilteredArticles();
  const featured = articles.slice(0, 3);
  $("#featured-grid").innerHTML = featured.map(articleCard).join("");
  $("#article-list").innerHTML = articles.slice(3).map(listCard).join("");
  $("#results-label").textContent = `${String(articles.length).padStart(2, "0")} ${articles.length === 1 ? "PUBLICAÇÃO" : "PUBLICAÇÕES"}`;
  $("#empty-state").hidden = articles.length > 0;
  observeReveals();
  $("#featured-grid").hidden = articles.length === 0;
  $("#article-list").hidden = articles.length <= 3;
}
function renderContent(article) {
  return article.content.map(block => {
    if (block.type === "h3") return `<h3>${escapeHTML(block.text)}</h3>`;
    if (block.type === "ul") return `<ul>${block.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
    return `<p>${escapeHTML(block.text)}</p>`;
  }).join("");
}
let lastFocus = null;
function openArticle(id, fromHistory = false) {
  const article = ARTICLES.find(item => item.id === id);
  if (!article) return;
  const modal = $("#article-modal");
  if (!fromHistory) history.pushState({ article: id }, "", `#artigo-${id}`);
  lastFocus = document.activeElement;
  $("#modal-content").innerHTML = `
    <div class="modal-hero"><img src="${escapeHTML(article.image)}" alt="${escapeHTML(article.imageAlt)}" onerror="this.style.display='none';this.parentElement.style.background='#d6e1b7'"></div>
    <div class="modal-inner">
      <div class="modal-meta"><span>${escapeHTML(article.category.toUpperCase())}</span><span>✳</span><span>${formatDate(article.date)}</span><span>✳</span><span>${escapeHTML(article.readTime)}</span></div>
      <h1 class="modal-title" id="modal-title">${escapeHTML(article.title)}</h1>
      <p class="modal-excerpt">${escapeHTML(article.excerpt)}</p>
      <div class="article-body">${renderContent(article)}</div>
      <section class="quiz-section" id="quiz-section"><div class="quiz-kicker">HORA DE TESTAR O QUE VOCÊ APRENDEU</div><h3>Vamos ver o que ficou?</h3>
        <p style="font-size:15px;color:#737469;margin-top:-14px;margin-bottom:20px">Responda às três perguntas. Depois, confira o gabarito explicado.</p>
        ${article.quiz.map((q, i) => `<div class="quiz-question" data-question="${i}"><h4>${i + 1}. ${escapeHTML(q.question)}</h4><div class="quiz-options">${q.options.map((option, j) => `<label class="quiz-option"><input type="radio" name="q-${i}" value="${j}"><span>${escapeHTML(option)}</span></label>`).join("")}</div><div class="answer-feedback" hidden></div></div>`).join("")}
        <div class="quiz-footer"><span class="quiz-score" id="quiz-score">3 perguntas · sem pressão, é para aprender</span><div><button class="quiz-reset" id="quiz-reset" type="button">Refazer</button> <button class="quiz-check" id="quiz-check" type="button">Conferir respostas ↗</button></div></div>
      </section><div class="modal-endnote">Continue curioso. Até a próxima ideia. ✳</div>
    </div>`;
  modal.scrollTop = 0;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#modal-close").focus({ preventScroll: true }), 50);
  $("#quiz-check").addEventListener("click", () => checkQuiz(article));
  $("#quiz-reset").addEventListener("click", () => resetQuiz(article));
}
function checkQuiz(article) {
  let score = 0, answered = 0;
  article.quiz.forEach((q, i) => {
    const container = $(`[data-question="${i}"]`);
    const chosen = $('input:checked', container);
    const feedback = $(".answer-feedback", container);
    const options = $$(".quiz-option", container);
    options.forEach((option, j) => {
      option.classList.remove("correct", "incorrect");
      if (j === q.answer) option.classList.add("correct");
      if (chosen && Number(chosen.value) === j && Number(chosen.value) !== q.answer) option.classList.add("incorrect");
    });
    if (chosen) { answered++; if (Number(chosen.value) === q.answer) score++; }
    feedback.hidden = false;
    feedback.innerHTML = `<strong>${chosen && Number(chosen.value) === q.answer ? "✓ Isso mesmo!" : `Resposta correta: ${escapeHTML(q.options[q.answer])}`}</strong>${escapeHTML(q.explanation)}`;
  });
  $("#quiz-score").textContent = `${score} de 3 acertos · ${answered < 3 ? `Você respondeu ${answered} de 3. ` : ""}Leia as explicações para fixar o conteúdo.`;
}
function resetQuiz(article) {
  article.quiz.forEach((q, i) => {
    const container = $(`[data-question="${i}"]`);
    $$('input', container).forEach(input => input.checked = false);
    $$(".quiz-option", container).forEach(option => option.classList.remove("correct", "incorrect"));
    const feedback = $(".answer-feedback", container); feedback.hidden = true; feedback.innerHTML = "";
  });
  $("#quiz-score").textContent = "3 perguntas · sem pressão, é para aprender";
}
function closeArticle(fromHistory = false) {
  const modal = $("#article-modal");
  if (!modal.classList.contains("open")) return;
  if (!fromHistory) {
    if (history.state && history.state.article) { history.back(); return; }
    history.replaceState(null, "", location.pathname + location.search);
  }
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}
window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#artigo-(.+)$/);
  match ? openArticle(decodeURIComponent(match[1]), true) : closeArticle(true);
});
document.addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    renderFilters(); renderArticles();
    $(".filter.active")?.scrollIntoView({ inline: "center", block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    return;
  }
  const card = event.target.closest("[data-open-article]");
  if (card) openArticle(card.dataset.openArticle);
});
document.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-article]")) {
    event.preventDefault(); openArticle(event.target.dataset.openArticle);
  }
  if (event.key === "Escape") closeArticle();
  trapFocus(event);
});
let searchTimer;
$("#search-input").addEventListener("input", event => { clearTimeout(searchTimer); const v = event.target.value.trim(); searchTimer = setTimeout(() => { searchTerm = v; renderArticles(); }, 140); });
$("#modal-close").addEventListener("click", () => closeArticle());
$("#article-modal").addEventListener("click", event => { if (event.target.id === "article-modal") closeArticle(); });
function trapFocus(event) {
  if (event.key !== "Tab" || !$("#article-modal").classList.contains("open")) return;
  const f = $$("button, input, a[href]", $(".article-modal")).filter(el => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}
$("#year").textContent = new Date().getFullYear();
renderFilters();
renderArticles();
const header = $("#site-header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

// ===== movimento =====
function observeReveals() {
  $$(".article-card, .list-card, .section-heading, .filter-row, .about > *, .closing-band > *, .list-heading").forEach((el, i) => {
    if (el.dataset.rv) return;
    el.dataset.rv = "1"; el.classList.add("reveal");
    el.style.setProperty("--d", `${(i % 3) * .1}s`);
    revealer ? revealer.observe(el) : el.classList.add("in");
  });
}
observeReveals();
const heroBg = $("#hero-bg"), bar = $("#progress");
const navLinks = $$(".main-nav a"), navSections = navLinks.map(a => $(a.getAttribute("href")));
let mx = 0, my = 0, cx = 0, cy = 0, cs = 0, running = false, activeId = "";
function frame() {
  const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  // seção ativa no menu
  let current = "";
  navSections.forEach(sec => { if (sec && sec.getBoundingClientRect().top <= innerHeight * .4) current = "#" + sec.id; });
  if (max > 0 && y >= max - 4) current = "#contato";
  if (current !== activeId) { activeId = current; navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === current)); }
  // parallax do hero com interpolação (movimento contínuo, sem trancos)
  let moving = false;
  if (!reduceMotion && y < innerHeight * 1.2) {
    const ts = y * .28;
    cx += (mx - cx) * .08; cy += (my - cy) * .08; cs += (ts - cs) * .14;
    heroBg.style.transform = `translate3d(${cx.toFixed(2)}px, ${(cs + cy).toFixed(2)}px, 0)`;
    moving = Math.abs(mx - cx) > .1 || Math.abs(my - cy) > .1 || Math.abs(ts - cs) > .1;
  }
  running = moving;
  if (moving) requestAnimationFrame(frame);
}
const tick = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
window.addEventListener("scroll", tick, { passive: true });
window.addEventListener("resize", tick);
if (!reduceMotion) $("#inicio").addEventListener("mousemove", e => {
  mx = (e.clientX / innerWidth - .5) * -26; my = (e.clientY / innerHeight - .5) * -16; tick();
});
tick();
// abrir artigo direto pelo link (#artigo-id)
{ const m = location.hash.match(/^#artigo-(.+)$/); if (m) openArticle(decodeURIComponent(m[1]), true); }
