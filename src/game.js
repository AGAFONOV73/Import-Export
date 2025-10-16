import Character from "./domain";

export default class Game {
  start() {
    console.log("game started");
    const hero = new Character();
    console.log(hero);
  }
}

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
