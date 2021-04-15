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

        const image1 = document.createElement('img');
        image1.src = girl1.url;
        image1.className = 'image-card';
        this.appEl.appendChild(image1);  

        const image2 = document.createElement('img');
        image2.src = girl2.url;
        image2.className = 'image-card';
        this.appEl.appendChild(image2);  

        const text = document.createElement('p');
        text.innerText = 'Отдайте свой голос.';
        this.appEl.appendChild(text);

        image1.addEventListener('click', () => {
            this.handleGirlChoose(girl1);
        });
        image2.addEventListener('click', () => {
            this.handleGirlChoose(girl2);
        });
    }

    renderWinner(winner) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = 'Победитель!';
        this.appEl.appendChild(text);

        const image1 = document.createElement('img');
        image1.src = winner.url;
        image1.className = 'image-card';
        this.appEl.appendChild(image1); 
    }

    onGameStart(cb) {
        this.handleGameStart = cb;
    }

    onGirlChoose(cb) {
        this.handleGirlChoose = cb;
    }
}
