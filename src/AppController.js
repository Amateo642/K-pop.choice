export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onGameStart(this.startGame.bind(this));
        this.view.onGirlChoose(this.chooseGirl.bind(this));
        this.view.onShowLeaders(this.showLeaders.bind(this));
        //this.view.renderGreetings();
        //this.view.renderGallery(this.showGroup.bind(this)); 
        // TODO Добавить возможность получать из View название группы.
        this.view.onShowGroup(this.showGroup.bind(this));
        this.view.renderGallery(this.model.getGroup());
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

    showLeaders() {
        const leaders = this.model.getLeaders();
        this.view.renderLeaders(leaders);
    }

    showGroup(group) {
        this.model.getGroup();
        this.view.renderGallery(group);
    }
}
