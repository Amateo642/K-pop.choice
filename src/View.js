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

    getCardBlock(girl) {
        const card = document.createElement('div');
        card.className = 'card';       
        
        const info = document.createElement('div');
        info.className = 'card-info';
        
        const name = document.createElement('p');
        name.innerText = girl.name;
        info.appendChild(name);

        const group = document.createElement('p');
        group.innerText = girl.group;
        info.appendChild(group);

        const born = document.createElement('p');
        born.innerText = girl.born;
        info.appendChild(born);

        const voices = document.createElement('p');
        voices.innerText = girl.voices;
        info.appendChild(voices);

        card.appendChild(info);

        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';

        const image = document.createElement('img');
        image.src = girl.url;
        image.className = 'image-card';
        cardImage.appendChild(image);

        card.appendChild(cardImage);

        return card;
    }

    $(document).ready(function() {
        $('.card-image').slick({
            dots:true, 
            swipe:true,
            fade:true,
        });
    });

    /*{
        id: 10,
        name: 'Tzuyu',
        group: 'Twice',
        born: '14.06.1999',
        url: 'assets/tzuyu-1.jpg',
        urls: [
            'assets/tzuyu-1.jpg',
            'assets/tzuyu-2.jpg',
            'assets/tzuyu-3.jpg',
            'assets/tzuyu-4.jpg',
        ],
    },*/

    renderGame(pair) {
        this.appEl.innerHTML = '';
        const [girl1, girl2] = pair; 
        document.querySelector('.main').className = 'main gradient';

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        const card1 = this.getCardBlock(girl1);
        card1.classList.add('card', 'animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        imageWrapper.appendChild(card1);

        const vsImage = document.createElement('img')
        vsImage.src = 'assets/vs.png';
        vsImage.className = 'image-vs animate__animated animate__zoomIn';
        imageWrapper.appendChild(vsImage);

        const card2 = this.getCardBlock(girl2);
        card2.classList.add('card', 'animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
        imageWrapper.appendChild(card2);

        this.appEl.appendChild(imageWrapper);  

        const text = document.createElement('p');
        text.innerText = 'Отдайте свой голос.';
        this.appEl.appendChild(text);

        /*
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
    }*/


         const handleClick =  (winner, winnerCard, loserCard) => {
            setTimeout(() => {
                this.handleGirlChoose(winner);
            }, 1000);
            winnerCard.className = 'card animate__animated animate__fadeOutUp';
            loserCard.className = 'card animate__animated animate__fadeOutDown';
            vsImage.className = 'image-vs animate__animated animate__zoomOut';
         };

         card1.addEventListener('click', function cb() {
            handleClick(girl1, card1, card2);
            card1.removeEventListener('click', cb);
         });
         card2.addEventListener('click', function cb() {
            handleClick(girl2, card2, card1);
            card2.removeEventListener('click', cb);
         });
    }
    renderWinner(winner) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = 'Победитель!';
        this.appEl.appendChild(text);

        console.log(winner);

        const card1 = this.getCardBlock(winner);
        card1.classList.add('card', 'animate__animated', 'animate__backInUp', 'animate__delay-1s');
        this.appEl.appendChild(card1);
/*
        const image1 = document.createElement('img');
        image1.src = winner.url;
        image1.className = 'image-winner animate__animated animate__jackInTheBox';
        this.appEl.appendChild(image1); 
*/
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
