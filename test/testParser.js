import { parseQuery } from "../js/parseQuery.js";

const input = "GET movies WHERE rating > 8";
console.log(JSON.stringify(parseQuery(input), null, 2));
