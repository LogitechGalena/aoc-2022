import { readFileSync } from "fs";

const data = readFileSync("1/data.txt", "utf-8");

const getTopThreeCalories = () => {
  return data
    .split(/\n\s*\n/)
    .map((group) => group.split(/\r?\n/).map((str) => parseInt(str)))
    .sort((a, b) => b.reduce((c, d) => c + d) - a.reduce((c, d) => c + d))
    .map((a) => a.reduce((b, c) => b + c))
    .slice(0, 3)
    .reduce((a, b) => a + b);
};

console.log(getTopThreeCalories());
