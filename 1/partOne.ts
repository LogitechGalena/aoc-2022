import { readFileSync } from "fs";

const data = readFileSync("1/data.txt", "utf-8");

const getMostCalories = () => {
  return data
    .split(/\n\s*\n/)
    .map((group) => group.split(/\r?\n/).map((str) => parseInt(str)))
    .sort((a, b) => b.reduce((c, d) => c + d) - a.reduce((c, d) => c + d))[0]
    .reduce((a, b) => a + b);
};

console.log(getMostCalories());
