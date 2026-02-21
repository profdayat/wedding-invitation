import { home } from "./js/home.js";
import { bride } from "./js/bride.js";
import { time } from "./js/time.js";
import { galeri } from "./js/galeri.js";
import { wishas } from "./js/wishas.js";
import { navbar } from "./js/navbar.js";
import { welcome } from "./js/welcome.js";
import { data } from "./assets/data/data.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        duration: 1000,
        offset: 100, // Trigger animations earlier
    });

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();

    // Update Meta & Title dynamically from data.js
    const { marriage } = data.time;
    const weddingDate = `${marriage.day}, ${marriage.date} ${marriage.month} ${marriage.year}`;
    const description = `Undangan Pernikahan Dayat & Hanifah - ${weddingDate}. Mengharap kehadiran Anda untuk berbagi kebahagiaan di hari istimewa kami.`;

    document.title = `Dayat & Hanifah - ${weddingDate}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
});