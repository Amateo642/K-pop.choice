export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onGameStart(this.startGame.bind(this));
        this.view.onGirlChoose(this.chooseGirl.bind(this));
        this.view.renderGreetings();
    }

    startGame() {
        if (this.model.isNextPairExist()) {
            this.view.renderGame(this.model.getPair());
        } else if (this.model.isNextRoundReady()) {
            this.model.startNextRound();
            this.view.renderGame(this.model.getPair());
        } else {
            this.view.renderWinner(this.model.getWinner());
        }
    }

    chooseGirl(winner) {
        this.model.setWinner(winner);
        this.startGame();
    }
}
