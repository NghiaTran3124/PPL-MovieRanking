import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";
import { evaluate } from "./evaluator.js";

// Load data movie
let moviesData = [];
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => {
    moviesData = data;
    console.log("Data loaded:", moviesData.length, "movies");
  });

document.getElementById("run-btn").addEventListener("click", () => {
  const code = document.getElementById("code-input").value;
  const outputDiv = document.getElementById("output-area");
  const errorDiv = document.getElementById("error-log");

  // Reset giao diện
  outputDiv.innerHTML = "";
  errorDiv.innerText = "";

  try {
    // --- QUY TRÌNH PPL ---
    const tokens = tokenize(code); // Bước 1: Lexer
    const ast = parse(tokens); // Bước 2: Parser
    const result = evaluate(ast, moviesData); // Bước 3: Evaluator
    // ---------------------

    // Hiển thị kết quả (UI)
    if (result.length === 0) {
      outputDiv.innerHTML = "<p>No movies found.</p>";
    } else {
      result.forEach((movie) => {
        const div = document.createElement("div");
        div.className = "movie-item";
        div.innerText = `🎬 ${movie.title} (${movie.year}) - ⭐ ${movie.rating}`;
        outputDiv.appendChild(div);
      });
    }
  } catch (err) {
    console.error(err);
    errorDiv.innerText = "Error: " + err.message;
  }
});
