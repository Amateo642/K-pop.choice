export class Model {
    constructor(db) {
        this.db = db.map(girl => {
            girl.voices = 0;
            return girl;
        });
        this.girls = [...db];
        this.winners = [];
    }

    getPair() {
        return this.isNextPairExist() ? [this.girls[0], this.girls[1]] : undefined;
    }

    setWinner(winner) {
        if(winner) {
            winner.voices += 10;
            this.winners.push(winner);
            this.girls.splice(0,2);
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
        return this.db.sort((girl1, girl2) => {
            if (girl1.voices > girl2.voices) return -1;
            if (girl1.voices === girl2.voices) return 0;
            if (girl1.voices < girl2.voices) return 1;
        }).slice(0, 3);
    }
}
