export class Model {
    constructor(db) {
        this.girls = [...db];
        this.winners = [];
    }

    getPair() {
        return this.isNextPairExist() ? [this.girls[0], this.girls[1]] : undefined;
    }

    setWinner(w) {
        if(w) {
            this.winners.push(w);
            this.girls.splice(0,2);
        } 
    }

    getWinner() {
        console.log(this.girls, this.winners);
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
}
