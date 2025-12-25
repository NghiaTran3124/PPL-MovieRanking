import { parseQuery } from "./parseQuery.js";
import { evaluate } from "./evaluator.js";

let moviesData = [];
fetch("./movies.json")
  .then((res) => res.json())
  .then((data) => {
    moviesData = data;
    botSay("System Online. Database loaded successfully. 🚀");
    setTimeout(() => {
      botSay(
        "Hi User! I'm your PPL Assistant. Click the chips below to try some queries:"
      );
    }, 800);
  });

const runBtn = document.getElementById("run-btn");
const codeInput = document.getElementById("code-input");
const outputDiv = document.getElementById("output-area");
const errorDiv = document.getElementById("error-log");
const astDiv = document.getElementById("ast-output");
const countSpan = document.getElementById("result-count");

const chatContent = document.getElementById("chat-content");
const suggestionArea = document.getElementById("suggestion-area");

const suggestions = [
  { label: "All Movies", code: "GET movies" },
  { label: "Top Rated", code: "GET movies WHERE rating > 8.5" },
  {
    label: "Action Movies",
    code: "GET movies WHERE genre = 'Action' ORDER BY year DESC",
  },
  {
    label: "Recent Hits",
    code: "GET movies WHERE year > 2010 ORDER BY rating DESC LIMIT 5",
  },
];

suggestions.forEach((s) => {
  const chip = document.createElement("div");
  chip.className = "chip";
  chip.innerText = s.label;
  chip.onclick = () => {
    typeCodeEffect(s.code);
    botSay(
      `I've pasted the query for <b>${s.label}</b>. Press RUN to execute!`
    );
  };
  suggestionArea.appendChild(chip);
});

function botSay(html) {
  const msg = document.createElement("div");
  msg.className = "msg bot";
  msg.innerHTML = html;
  chatContent.appendChild(msg);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function typeCodeEffect(text) {
  codeInput.value = "";
  let i = 0;
  const interval = setInterval(() => {
    codeInput.value += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

runBtn.addEventListener("click", async () => {
  const code = codeInput.value;
  if (!code.trim()) {
    botSay("⚠️ Please enter a query first!");
    return;
  }

  outputDiv.innerHTML = "";
  errorDiv.innerText = "";
  astDiv.innerText = "{}";
  runBtn.disabled = true;
  runBtn.innerText = "Running...";

  try {
    botSay(`Processing query: <code>${code}</code>...`);
    await sleep(500);

    const ast = parseQuery(code);
    astDiv.innerText = JSON.stringify(ast, null, 2);

    const result = evaluate(ast, moviesData);
    countSpan.innerText = `${result.length} movies`;

    if (result.length === 0) {
      botSay(
        "✅ Query executed, but <b>no movies found</b> matching criteria."
      );
      outputDiv.innerHTML = `<div style="text-align:center; margin-top:20px; opacity:0.5">No results</div>`;
    } else {
      botSay(`✅ Success! Found <b>${result.length} movies</b>.`);
      renderMovies(result);
    }
  } catch (err) {
    console.error(err);
    errorDiv.innerText = "⛔ " + err.message;
    botSay(`❌ <b>Error:</b> ${err.message}. Check your syntax!`);
  } finally {
    runBtn.disabled = false;
    runBtn.innerText = "▶ RUN";
  }
});

function renderMovies(list) {
  list.forEach((movie, index) => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;

    const posterUrl = movie.poster
      ? movie.poster
      : "https://via.placeholder.com/60x90?text=No+Img";

    div.innerHTML = `
        <img src="${posterUrl}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">
                 <span>${movie.year}</span> • <span>${movie.genre}</span>
            </div>
            <div class="movie-rating">⭐ ${movie.rating}</div>
        </div>
    `;
    outputDiv.appendChild(div);
  });
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(styleSheet);
