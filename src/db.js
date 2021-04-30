const girls = [
    {
        id: 0,
        name: 'Chung Ha',
        group: 'Solo',
        born: '09.02.1996',
        url: 'assets/chung-ha-1.jpg',
        urls: [
            'assets/chung-ha-1.jpg',
            'assets/chung-ha-2.jpg',
            'assets/chung-ha-3.jpg',
            'assets/chung-ha-4.jpg',
        ],
    },
    {
        id: 1,
        name: 'Jessi',
        group: 'Solo',
        born: '17.12.1988',
        url: 'assets/jessi-5.jpg',
    },
    {
        id: 2,
        name: 'IU',
        group: 'Solo',
        born: '16.05.1993',
        url: 'assets/IU-1.jpg',
    },
    {
        id: 3,
        name: 'Hyuna',
        group: 'Solo',
        born: '06.06.1992',
        url: 'assets/Hyuna-1.jpg',
    },
    {
        id: 4,
        name: 'Chaeyoung',
        group: 'Twice',
        born: '23.04.1999',
        url: 'assets/chaeyoung-1.jpg',
    },
    {
        id: 5,
        name: 'Dahyun',
        group: 'Twice',
        born: '28.05.1998',
        url: 'assets/dahyun-1.jpg',
    },
    {
        id: 6,
        name: 'Jeongyeon',
        group: 'Twice',
        born: '01.11.1996',
        url: 'assets/jeongyeon-2.jpg',
    },
    {
        id: 7,
        name: 'Mina',
        group: 'Twice',
        born: '24.03.1997',
        url: 'assets/mina-1.jpg',
    },
    {
        id: 8,
        name: 'Momo',
        group: 'Twice',
        born: '09.11.1996',
        url: 'assets/momo-1.jpg',
    },
    {
        id: 9,
        name: 'Sana',
        group: 'Twice',
        born: '29.12.1996',
        url: 'assets/sana-1.jpg',
    },
    {
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
    },
];

const groups = [
    {
        name: 'Twice',
        urls: [
            'assets/twice-1.jpg',
            'assets/twice-2.jpg',
            'assets/twice-3.jpg',
            'assets/twice-4.jpg',
        ],
        members: girls.filter(girl => girl.group === 'Twice'),
    },
];

export const db = {
    girls,
    groups,
};
