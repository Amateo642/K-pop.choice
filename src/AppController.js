export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onGameStart(this.startGame.bind(this));// TODO кик
        this.view.onGirlChoose(this.chooseGirl.bind(this));
        this.view.onShowLeaders(this.showLeaders.bind(this)); // TODO cоздать линк на лидеров в вью и удалить отсюда  
        this.initHashRouter();
        this.initPage();
        //this.view.renderGallery(this.showGroup.bind(this)); 
        // TODO Добавить возможность получать из View название группы.
     //   this.view.onShowGroup(this.showGroup.bind(this));
      //  this.view.renderGallery(this.model.getGroup());
    }

    initHashRouter() {
        window.addEventListener('hashchange', () => {
            this.initPage();
        });
    }

    initPage() {
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
                const girls = this.model.getGirlsByGroupId(id)
                this.view.renderGroupGallery(group, girls);
            } else if (hash === '#girls') {
                this.showGirls();
            } else if (hash.startsWith('#girl=')) {
                const id = +hash.slice(6);
                const girl = this.model.getGirlById(id);
                this.view.renderGirlGallery(girl);
            } else {
                this.view.renderGreetings();
            } 
    }

    startGame() {
        if (this.model.isNextPairExist()) {
            this.renderGame();
        } else if (this.model.isNextStageReady()) {
            this.model.startNextStage();
            this.renderGame();
        } else {
            this.view.renderWinner(this.model.getWinner());
        }
    }

    renderGame() {
        this.view.renderGame(this.model.getPair(), this.model.currentStage, this.model.currentRound, this.model.roundsOfStage);
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
        this.view.renderGroupGallery(group);
    }

    showGirls() {
        const girls = this.model.getGirls();
        this.view.renderGirls(girls);
    }
}
