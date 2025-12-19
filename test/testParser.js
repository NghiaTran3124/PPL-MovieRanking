import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { parseQuery } from "../src/js/parseQuery.js";

// ===== Fix __dirname cho ES module =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Paths =====
const inputDir = path.join(__dirname, "input");
const outputDir = path.join(__dirname, "output");

// ===== Ensure output folder exists =====
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// ===== Run batch tests =====
console.log("Start parsing input...\n");

for (const file of fs.readdirSync(inputDir)) {
    if (!file.endsWith(".txt")) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(".txt", ".json"));

    try {
        // Read query
        const input = fs.readFileSync(inputPath, "utf-8").trim();

        // Parse → AST
        const ast = parseQuery(input);

        // Save AST
        fs.writeFileSync(outputPath, JSON.stringify(ast, null, 2), "utf-8");

        console.log(`Parsed: ${file}`);
    } catch (err) {
        console.error(`Error parsing: ${file}`);
        console.error(err.message);
    }
}

console.log("\nAll parsing tasks completed.");
