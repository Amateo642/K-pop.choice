import {db} from './db';

export class Model {
    constructor() {
        this.db = this.load();
        this.girls = this.db.girls.slice();
        this.winners = [];
    }

    getCard() {
        return this.girls;
    }

    getPair() {
        return this.isNextPairExist() ? [this.girls[0], this.girls[1]] : undefined;
    }

    setWinner(winner) {
        if (winner) {
            winner.voices += 10;
            this.winners.push(winner);
            this.girls.splice(0,2);
            this.save();
        } 
    }

    getWinner() {
        return this.winners[0];
    }

    isNextPairExist() {
        return this.girls.length > 1;
    }

    isNextRoundReady() {
        return this.winners.length > 1 || this.girls.length > 0;
    }

    startNextRound() {
        if (this.girls.length === 1) {
            this.winners.unshift(this.girls[0]);
        }
        this.girls = this.winners;
        this.winners = [];
    }

    getLeaders() {
        return this.db.girls.sort((girl1, girl2) => {
            if (girl1.voices > girl2.voices) return -1;
            if (girl1.voices === girl2.voices) return 0;
            if (girl1.voices < girl2.voices) return 1;
        }).slice(0, 3);
    }

    getGroup(name) {
        return this.db.groups[0];
            
         // TODO вернуть конкретную группу по названию из массива.
    }

    load() {
        const localdb = localStorage.getItem('db');
        // Получили базу из ЛС если база есть, тогда вернуть ее, если ее нет (возвращает значение нулл)вернуть ДБ из файла.
        if (localdb) {
            return JSON.parse(localdb);
        } else {
            db.girls = db.girls.map(girl => {
                girl.voices = 0;
                return girl;
            });
            return db;
        }
    }

    save() {
        localStorage.setItem('db', JSON.stringify(this.db));
        console.log(JSON.parse(localStorage.getItem('db')));
    }
}
