export class AppView {
    constructor (appEl) {
        this.appEl = appEl;
    }

    renderGroupGallery(group) {
        this.appEl.innerHTML = '';
        const gallery = document.createElement('div');
        gallery.className = 'gallery';
        document.querySelector('.main').className = 'main gradient';

        const name = document.createElement('p');
        name.innerText = group.name;
        gallery.appendChild(name);

        const photoGallery = document.createElement('div');
        photoGallery.className = 'photo-gallery';

        group.urls.forEach(url => {
            const wrapper = document.createElement('div');  

            const image = document.createElement('img');
            image.src = url;
            image.className = 'group-image';
            wrapper.appendChild(image);

            photoGallery.appendChild(wrapper);
        });
        
        gallery.appendChild(photoGallery);

        const photoGalleryNav = document.createElement('div');
        photoGalleryNav.className = 'photo-gallery-nav';

        group.urls.forEach(url => {
            const image = document.createElement('img');
            image.src = url;
            image.className = 'group-image';
            photoGalleryNav.appendChild(image);
        });
        
        gallery.appendChild(photoGalleryNav);

        const groupMembers = document.createElement('div');
        groupMembers.className = 'group-members';
        gallery.appendChild(groupMembers);
        
        group.members.forEach(girl => {
            const memberBlock = document.createElement('div');
            memberBlock.className = 'girl-info-block';

            const girlLinkBlock = document.createElement('a');
            girlLinkBlock.className = 'girl-link';
            girlLinkBlock.href = `#girl=${girl.id}`;

            const image = document.createElement('img');
            image.src = girl.url;
            image.className = 'girl-info-image animate__animated animate__flipInX';
            girlLinkBlock.appendChild(image); 

            const name = document.createElement('p');
            name.innerText = girl.name;
            girlLinkBlock.appendChild(name);

            const voices = document.createElement('p');
            voices.innerText = girl.voices;
            girlLinkBlock.appendChild(voices);

            memberBlock.appendChild(girlLinkBlock);

            groupMembers.appendChild(memberBlock);
        });

        this.appEl.appendChild(gallery);

        $(photoGallery).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: photoGalleryNav,
        });
        $(photoGalleryNav).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: photoGallery,
            arrows: false,
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }

    renderGirlGallery(girl) {
        this.appEl.innerHTML = '';
        const gallery = document.createElement('div');
        gallery.className = 'gallery';
        document.querySelector('.main').className = 'main gradient';

        console.log('girl', girl);

        const name = document.createElement('p');
        name.innerText = girl.name;
        gallery.appendChild(name);

        const photoGallery = document.createElement('div');
        photoGallery.className = 'photo-gallery';

        girl.urls.forEach(url => {
            const wrapper = document.createElement('div');

            const image = document.createElement('img');
            image.src = url;
            image.className = 'group-image';
            wrapper.appendChild(image);

            photoGallery.appendChild(wrapper);
        });

        gallery.appendChild(photoGallery);

        const photoGalleryNav = document.createElement('div');
        photoGalleryNav.className = 'photo-gallery-nav';

        girl.urls.forEach(url => {
            const image = document.createElement('img');
            image.src = url;
            image.className = 'group-image';
            photoGalleryNav.appendChild(image);
        });

        gallery.appendChild(photoGalleryNav);

        this.appEl.appendChild(gallery);

        $(photoGallery).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: photoGalleryNav,
        });
        $(photoGalleryNav).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: photoGallery,
            arrows: false,
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }

    renderGreetings() {
        const text = document.createElement('p');
        text.innerText = '?????????????? ???????? ??????????. ???????????????????? ???????????????? ?? ?????????????????? ??????????.';
        this.appEl.appendChild(text);

        const gameLink = document.createElement('a');
        gameLink.className = 'link';
        gameLink.innerText = '????????????';
        gameLink.href = '#game';
        this.appEl.appendChild(gameLink);

        // gameLink.addEventListener('click', () => {
        //     this.handleGameStart();
        // });
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

    renderGame(pair) {
        this.appEl.innerHTML = '';
        const [girl1, girl2] = pair; 
        document.querySelector('.main').className = 'main gradient';

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        const card1 = this.getCardBlock(girl1);
        console.log(card1);
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
        text.innerText = '?????????????? ???????? ??????????.';
        this.appEl.appendChild(text);

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
        text.innerText = '????????????????????!';
        this.appEl.appendChild(text);

        console.log(winner);

        const card1 = this.getCardBlock(winner);
        card1.classList.add('card', 'animate__animated', 'animate__backInUp', 'animate__delay-1s');
        this.appEl.appendChild(card1);

        const button = document.createElement('button');
        button.innerText = '???????????? ??????????????';
        this.appEl.appendChild(button);

        button.addEventListener('click', () => {
            this.handleShowLeaders();
        });
    }

    renderLeaders(leaders) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = '?????????????? ????????????';
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

    renderGirls(girls) {
        this.appEl.innerHTML = '';

        const text = document.createElement('p');
        text.innerText = '?????????????????? ????????????????';
        this.appEl.appendChild(text);

        const girlsBlock = document.createElement('div');
        girlsBlock.className = 'girls-block';

        girls.forEach(girl => {
            const girlBlock = document.createElement('div');
            girlBlock.className = 'girl-block';

            const link = document.createElement('a');
            link.className = 'girl-link';
            link.href = `#girl=${girl.id}`;
            girlBlock.appendChild(link);

            const name = document.createElement('p');
            name.innerText = girl.name;
            link.appendChild(name);

            girlsBlock.appendChild(girlBlock);
        });

        this.appEl.appendChild(girlsBlock);
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
