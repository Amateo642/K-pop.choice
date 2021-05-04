export class NavView {
    constructor (navEl) {
        this.navEl = navEl;
    }

    renderNavbar(groups, girls) {
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

        this.navEl.appendChild(navbar);
    }
}
