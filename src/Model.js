import {db} from './db';

export class Model {
    constructor() {
        this.db = this.load();
        this.save();
        this.girls = this.db.girls.slice();
        this.winners = [];
        this.currentStage = 1;
        this.currentRound = 0;
        this.roundsOfStage = Math.floor(this.girls.length / 2);
    }

    getGirls() {
        return this.db.girls;
    }

    getGroups() {
        return this.db.groups;
    }

    getGirlById(id) {
        return this.db.girls.find(girl => girl.id === id);// TODO:2 use find for getGirlByID!!!!!!!!!!!!!!!!!!!!!!!
    }

    getGroupById(id) {
        return this.db.groups.find(group => group.id === id);
    }

    getGirlsByGroupId(id) {
        return (this.getGirls()).filter(girl => girl.groupId === id);
    }

    getCard() {
        return this.girls;
    }

    getPair() {
        this.currentRound++;    
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

    isNextStageReady() {
        return this.winners.length > 1 || this.girls.length > 0;
    }

    startNextStage() {
        if (this.girls.length === 1) {
            this.winners.unshift(this.girls[0]);
        }
        this.girls = this.winners;
        this.winners = [];
        this.currentStage++;
        this.currentRound = 0;
        this.roundsOfStage = Math.floor(this.girls.length / 2);
    }

    getLeaders() {
        const girls = this.getGirls();
        return girls.sort((girl1, girl2) => {
            if (girl1.voices > girl2.voices) return -1;
            if (girl1.voices === girl2.voices) return 0;
            if (girl1.voices < girl2.voices) return 1;
        }).slice(0, 30);
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
