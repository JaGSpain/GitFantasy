import {player} from './player.js';

export function attack(enemy){
    enemy.hp -= player.attack;
}