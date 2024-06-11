import Character from "./classCharacter";
import Team from "./classTeam";

const pers1 = new Character('Лучник', 'Bowman', 80, 1, 30, 10);
const pers2 = new Character('Маг', 'Magician', 60, 1, 50, 20);
const pers3 = new Character('Стрелок', 'Swordsman', 50, 1, 40, 15);

const team = new Team(pers1, pers2);
team.pers3 = pers3;

for(let key of team) {
  console.log(key);
}