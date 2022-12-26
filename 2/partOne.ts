import { readFileSync } from "fs";

const data = readFileSync("2/data.txt", "utf-8");

const drawKey: { [key: string]: string } = {
  A: "X",
  B: "Y",
  C: "Z",
};

const winKey: { [key: string]: string } = {
  A: "Y",
  B: "Z",
  C: "X",
};

const scoreKey: { [key: string]: number } = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getResult = () => {
  const actions = data.split(/\r?\n/).map((line) => line.split(" "));

  let score = 0;

  for (const [elfMove, roundEnd] of actions) {
    if (drawKey[elfMove] === roundEnd) {
      score += 3; // Draw
    } else if (winKey[elfMove] === roundEnd) {
      score += 6; // Win
    }

    score += scoreKey[roundEnd];
  }

  return score;
};

console.log(getResult());
