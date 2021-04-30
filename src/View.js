export class View {
    constructor (appEl) {
        this.appEl = appEl;
    }


    renderNavbar() {
        const navbar = document.createElement('div');
        navbar.className = 'navbar';

        const home = document.createElement('div');
        home.className = 'navbar-item';
        navbar.appendChild(home);

        const mainBtn = document.createElement('button');
        mainBtn.innerText = 'Game';
        home.appendChild(mainBtn);

        mainBtn.addEventListener('click', () => {
            renderGreetings();
        });

        const solo = document.createElement('div');
        solo.className = 'navbar-item';
        navbar.appendChild(solo);

        const soloContent = document.createElement('div');
        soloContent.className = 'item-content';
        solo.appendChild(soloContent);

        const solo1 = document.createElement('a');
        solo1.innerText = 'Chung Ha';
        solo1.href = '#Chung Ha'; 
        soloContent.appendChild(solo1);

        const solo2 = document.createElement('a');
        solo2.innerText = 'Jessi';
        solo2.href = '#Jessi'; 
        soloContent.appendChild(solo2);

        const soloBtn = document.createElement('button');
        soloBtn.className = 'navbtn';
        soloBtn.innerText = 'Solo';
        solo.appendChild(soloBtn);

        soloBtn.addEventListener('click', () => {
            document.querySelector('dropDown').classList.toggle('show');
        });

        const groups = document.createElement('div');
        groups.className = 'navbar-item';
        navbar.appendChild(groups);

        const groupsContent = document.createElement('div');
        groupsContent.className = 'item-content';
        groups.appendChild(groupsContent);

        const twice = document.createElement('a');
        twice.innerText = 'Twice';
        twice.href = '#twice'; 
        soloContent.appendChild(twice);

        const button = document.createElement('button');
        twice.appendChild(button);

        button.addEventListener('click', () => {
            this.handleShowGroup();
        });

        const blackPink = document.createElement('a');
        blackPink.innerText = 'BlackPink';
        blackPink.href = '#BlackPink'; 
        soloContent.appendChild(blackPink);

        const groupsBtn = document.createElement('button');
        groupsBtn.className = 'navbtn';
        groupsBtn.innerText = 'Groups';
        groups.appendChild(groupsBtn);

        groupsBtn.addEventListener('click', () => {
            document.querySelector('dropDown').classList.toggle('show');
        });

        

        document.querySelector('header').appendChild(navbar);
    }


    renderGallery(group) {
        this.appEl.innerHTML = '';
        const gallery = document.createElement('div');
        document.querySelector('.main').className = 'main gradient';

        const name = document.createElement('p');
        name.innerText = group.name;
        gallery.appendChild(name);

        const photoGallery = document.createElement('div');

        group.urls.forEach(url => {
            const image = document.createElement('img');
            image.src = url;
            image.className = 'group-image';
            photoGallery.appendChild(image);
        });
        
        gallery.appendChild(photoGallery);

        const groupMembers = document.createElement('div');
        groupMembers.className = 'group-members';
        gallery.appendChild(groupMembers);
        
        group.members.forEach(girl => {
            const memberBlock = document.createElement('div');
            memberBlock.className = 'member-block';

            const image = document.createElement('img');
            image.src = girl.url;
            image.className = 'members-image animate__animated animate__flipInX';
            memberBlock.appendChild(image); 

            const name = document.createElement('p');
            name.innerText = girl.name;
            memberBlock.appendChild(name);

            const voices = document.createElement('p');
            voices.innerText = girl.voices;
            memberBlock.appendChild(voices);

            groupMembers.appendChild(memberBlock);
        });

        this.appEl.appendChild(gallery);
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
    }

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

    onShowGroup(cb) {
        this.handleShowGroup = cb;
    }
}
