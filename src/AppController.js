export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onGameStart(this.startGame.bind(this));// TODO кик
        this.view.onGirlChoose(this.chooseGirl.bind(this));
        this.view.onShowLeaders(this.showLeaders.bind(this)); // TODO cоздать линк на лидеров в вью и удалить отсюда  
        this.initHashRouter();
        this.view.renderGreetings();
        //this.view.renderGallery(this.showGroup.bind(this)); 
        // TODO Добавить возможность получать из View название группы.
     //   this.view.onShowGroup(this.showGroup.bind(this));
      //  this.view.renderGallery(this.model.getGroup());
    }

    initHashRouter() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            if (hash === '#game') {
                this.startGame();
            } else if (hash === '#leaders') {
                this.showLeaders();
            } else if (hash.startsWith('#group=')) {
                // TODO:1 нужно будет разобрать строку (разбить по символу =, либо получить id по index  ), получить id.
                // Обратиться в модель и получить группу по id, вызвать метод у VIEW с полученной группой и девочек.
                // '#group=1' 
                const id = +hash.slice(7);
                const group = this.model.getGroupById(id);
                this.view.renderGallery(group);
            } else {
                this.renderGreetings();
            }
        });
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
