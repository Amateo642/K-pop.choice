const db = [
    {
        name: 'Chung Ha',
        url: 'assets/chung-ha-1.jpg',
        id: 0,
    },
    {
        name: 'Jessie',
        url: 'assets/jessi-5.jpg',
        id: 1
    },
    {
        name: 'IU',
        url: 'assets/IU-1.jpg',
        id: 2
    },
    {
        name: 'Hyuna',
        url: 'assets/Hyuna-1.jpg',
        id: 3
    },
    {
        name: 'Chaeyoung',
        url: 'assets/chaeyoung-1.jpg',
        id: 4
    },
    {
        name: 'Dahyun',
        url: 'assets/dahyun-1.jpg',
        id: 5
    },
    {
        name: 'Jeongyeon',
        url: 'assets/jeongyeon-2.jpg',
        id: 6
    },
    {
        name: 'Mina',
        url: 'assets/mina-1.jpg',
        id: 7
    },
    {
        name: 'Momo',
        url: 'assets/momo-1.jpg',
        id: 8
    },
    {
        name: 'Sana',
        url: 'assets/sana-1.jpg',
        id: 9
    },
]

const gameController = {
    girls: [],
    winners: [],

    init(db) {
        this.girls = [...db];
    },

    getPair() {
        return this.isNextPairExist() ? [this.girls[0], this.girls[1]] : undefined;
    },

    setWinner(w) {
        if(w) {
            this.winners.push(w);
            this.girls.splice(0,2);
        } 
    },

    getWinner() {
        return this.winners[0];
    },

    isNextPairExist() {
        return this.girls.length > 1;
    },

    isNextRoundReady() {
        console.log("isNextRoundReady", this.winners, this.girls);
        return this.winners.length > 1
        /*return (this.girls.length < 2 && this.winners.length > 1)*/
    },

    startNextRound() {
        if (this.girls.length === 1) {
            this.winners.unshift(this.girls[0]);
        }
        this.girls = this.winners;
        this.winners = [];
        console.log("startNextRound", this.winners, this.girls);
    }
}
gameController.init(db);

const appEl = document.getElementById('app');

function renderGreetings() {
    const text = document.createElement('p');
    text.innerText = 'Отдайте свой голос. Победители проходят в следующий раунд.';
    appEl.appendChild(text);

    const button = document.createElement('button');
    button.innerText = 'Начать';
    appEl.appendChild(button);

    button.addEventListener('click', () => {
        renderGame();
    });
}

function renderWinner() {
    appEl.innerHTML = '';

    const text = document.createElement('p');
    text.innerText = 'Победитель!';
    appEl.appendChild(text);

    const winner = gameController.getWinner();

    const image1 = document.createElement('img');
    image1.src = winner.url;
    image1.className = 'image-card';
    appEl.appendChild(image1); 
}

function renderGame() {
    if (gameController.isNextPairExist()) {
        renderFight();
    } else if (gameController.isNextRoundReady()) {
        gameController.startNextRound();
        renderGame();
    } else {
        renderWinner();
    }
}

function renderFight() {
    appEl.innerHTML = '';
    const [girl1, girl2] = gameController.getPair(); 

    const image1 = document.createElement('img');
    image1.src = girl1.url;
    image1.className = 'image-card';
    appEl.appendChild(image1);  

    const image2 = document.createElement('img');
    image2.src = girl2.url;
    image2.className = 'image-card';
    appEl.appendChild(image2);  

    const text = document.createElement('p');
    text.innerText = 'Отдайте свой голос.';
    appEl.appendChild(text);

    image1.addEventListener('click', () => {
        gameController.setWinner(girl1);
        renderGame();
    });
    image2.addEventListener('click', () => {
        gameController.setWinner(girl2);
        renderGame();
    });
}

renderGreetings();
