export default class Team {
  constructor(pers1, pers2) {
    this.team1 = pers1;
    this.team2 = pers2;
  }

  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    for (let i = 0; i < Object.keys(this).length; i++) {
      yield this[Object.keys(this)[i]];
    }

  }
}