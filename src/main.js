import { home } from "./js/home.js";
import { bride } from "./js/bride.js";
import { time } from "./js/time.js";
import { galeri } from "./js/galeri.js";
import { wishas } from "./js/wishas.js";
import { navbar } from "./js/navbar.js";
import { welcome } from "./js/welcome.js";

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
});