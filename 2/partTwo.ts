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

const loseKey: { [key: string]: string } = {
  A: "Z",
  B: "X",
  C: "Y",
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
    let key: { [key: string]: string } = {};

    switch (roundEnd) {
      case "X": // Lose
        key = loseKey;
        break;
      case "Y": // Draw
        key = drawKey;
        score += 3;
        break;
      case "Z": // Win
        key = winKey;
        score += 6;
        break;
    }

    const myMove = key[elfMove];

    score += scoreKey[myMove];
  }

  return score;
};

console.log(getResult());
