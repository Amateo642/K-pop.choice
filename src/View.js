export class View {
    constructor (appEl) {
        this.appEl = appEl;
    }

    renderGreetings() {
        const text = document.createElement('p');
        text.innerText = 'Отдайте свой голос. Победители проходят в следующий раунд.';
        this.appEl.appendChild(text);

        const button = document.createElement('button');
        button.innerText = 'Начать';
        this.appEl.appendChild(button);

        button.addEventListener('click', () => {
            this.handleGameStart();
        });
    }

    renderGame(pair) {
        this.appEl.innerHTML = '';
        const [girl1, girl2] = pair; 
        document.querySelector('.main').className = 'main gradient';

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        const image1 = document.createElement('img');
        image1.src = girl1.url;
        image1.className = 'image-card animate__animated animate__fadeInLeft animate__delay-1s';
        imageWrapper.appendChild(image1);

        const vsImage = document.createElement('img')
        vsImage.src = 'assets/vs.png';
        vsImage.className = 'image-vs animate__animated animate__zoomIn';
        imageWrapper.appendChild(vsImage);

        const image2 = document.createElement('img');
        image2.src = girl2.url;
        image2.className = 'image-card animate__animated animate__fadeInRight animate__delay-1s';
        imageWrapper.appendChild(image2); 

        this.appEl.appendChild(imageWrapper);  

        const text = document.createElement('p');
        text.innerText = 'Отдайте свой голос.';
        this.appEl.appendChild(text);

        const handleClick = (winner, winnerImage, loserImage) => {
            setTimeout(() => {
                this.handleGirlChoose(winner);
            }, 1000);
            winnerImage.className = 'image-card animate__animated animate__fadeOutUp';
            loserImage.className = 'image-card animate__animated animate__fadeOutDown';
            vsImage.className = 'image-vs animate__animated animate__zoomOut';
        };

        image1.addEventListener('click', function cb() {
            handleClick(girl1, image1, image2);
            image1.removeEventListener('click', cb);
        });
        image2.addEventListener('click', function cb() {
            handleClick(girl2, image2, image1);
            image2.removeEventListener('click', cb);
        });
    }

    renderWinner(winner) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = 'Победитель!';
        this.appEl.appendChild(text);

        const image1 = document.createElement('img');
        image1.src = winner.url;
        image1.className = 'image-winner animate__animated animate__jackInTheBox';
        this.appEl.appendChild(image1); 

        const button = document.createElement('button');
        button.innerText = 'Список лидеров';
        this.appEl.appendChild(button);

        button.addEventListener('click', () => {
            this.handleShowLeaders();
        });
    }

    renderLeaders(leaders) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = 'Текущие лидеры';
        this.appEl.appendChild(text);

        const leadersBlock = document.createElement('div'); 
        leadersBlock.className = 'leaders-block';

        leaders.forEach(girl => {
            const leaderBlock = document.createElement('div');
            leaderBlock.className = 'leader-block';

            const image = document.createElement('img');
            image.src = girl.url;
            image.className = 'image-leader animate__animated animate__flipInX';
            leaderBlock.appendChild(image); 

            const name = document.createElement('p');
            name.innerText = girl.name;
            leaderBlock.appendChild(name);

            const voices = document.createElement('p');
            voices.innerText = girl.voices;
            leaderBlock.appendChild(voices);

            leadersBlock.appendChild(leaderBlock);
        });

         this.appEl.appendChild(leadersBlock);
    }

    onGameStart(cb) {
        this.handleGameStart = cb;
    }

    onGirlChoose(cb) {
        this.handleGirlChoose = cb;
    }

    onShowLeaders(cb) {
        this.handleShowLeaders = cb;
    }
}
