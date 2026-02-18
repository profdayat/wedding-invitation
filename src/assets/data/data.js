export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Mukhammad Imam Nur Hidayat',
            child: 'Putra pertama',
            father: 'Eri Subianto',
            mother: 'Husnah',
            image: './src/assets/images/suami.png'
        },
        P: {
            id: 2,
            name: 'Lailatul Nur Hanifah',
            child: 'Putri pertama',
            father: 'Sumarto',
            mother: 'Nurul Qomariyah',
            image: './src/assets/images/istri.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Juni',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: `(Kediaman mempelai putri)\nJl. Sungkono No 27, RT. 003 RW. 002,\nPogar, Bangil, Kab. Pasuruan, Jatim 67153`
    },

    link: {
        calendar: 'https://calendar.app.google/GLGL6XWD6dEGD5Fu6',
        map: 'https://maps.google.com/maps?q=-7.602686,112.774840&z=17&output=embed',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz41OuRdPWe7xlBMAYJ_ATi2R1t1BXbucTNwiC7lCdZmb4h49DTD0fs5stBxOM4Xo4/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
