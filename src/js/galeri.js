import { data } from "../assets/data/data.js";

export const galeri = () => {
    const galeriElement = document.querySelector('.galeri');
    const showAllContainer = galeriElement.querySelector('div:nth-of-type(2)');

    const [_, figureElement, paginationElement, prevButton, nextButton, showAllButton] = galeriElement.children[0].children;
    const [__, showAllBox, closeButton] = showAllContainer.children;

    let currentIndex = 1;
    let isTransitioning = false;

    const initializeGallery = () => {
        const firstImg = data.galeri[0];
        const lastImg = data.galeri[data.galeri.length - 1];

        figureElement.innerHTML = `
            <div class="gallery-wrapper" style="transform: translateX(-100%);">
                <img src="${lastImg.image}" alt="galeri image" class="clone">
                ${data.galeri.map((item) => `<img src="${item.image}" alt="galeri image" id="galeri-${item.id}">`).join('')}
                <img src="${firstImg.image}" alt="galeri image" class="clone">
            </div>
        `;

        data.galeri.forEach((item, index) => {
            paginationElement.innerHTML += `
                <li data-id="${item.id}">
                    <div class="progress-bar"></div>
                </li>`;
        });

        const wrapper = figureElement.querySelector('.gallery-wrapper');
        wrapper.addEventListener('transitionend', () => {
            isTransitioning = false;
            if (currentIndex === 0) {
                wrapper.style.transition = 'none';
                currentIndex = data.galeri.length;
                wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            } else if (currentIndex === data.galeri.length + 1) {
                wrapper.style.transition = 'none';
                currentIndex = 1;
                wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            updatePaginationClasses();
        });

        updateNavigationButtons(data.galeri[0].id);
        updatePaginationClasses();
    };

    let lastNormalizedIndex = -1;

    const updatePaginationClasses = (forceReset = false) => {
        const lis = paginationElement.querySelectorAll('li');
        let normalizedIndex = currentIndex;
        if (currentIndex > data.galeri.length) normalizedIndex = 1;
        if (currentIndex < 1) normalizedIndex = data.galeri.length;

        if (!forceReset && normalizedIndex === lastNormalizedIndex) return;
        lastNormalizedIndex = normalizedIndex;

        lis.forEach((li, idx) => {
            const currentItemIndex = idx + 1;
            li.classList.remove('active', 'passed');

            if (currentItemIndex < normalizedIndex) {
                li.classList.add('passed');
            } else if (currentItemIndex === normalizedIndex) {
                void li.offsetWidth;
                li.classList.add('active');
            }
        });
    };

    const updateGalleryImage = (id) => {
        if (isTransitioning) return;
        const index = data.galeri.findIndex(item => item.id === id);

        if (index !== -1) {
            currentIndex = index + 1;
            const wrapper = figureElement.querySelector('.gallery-wrapper');
            wrapper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            isTransitioning = true;

            const activeId = data.galeri[index].id;
            updateNavigationButtons(activeId);
            updatePaginationClasses(true);
        }
    };

    const updateNavigationButtons = (id) => {
        nextButton.dataset.id = `${id}`;
        prevButton.dataset.id = `${id}`;
    };

    const moveGallery = (direction) => {
        if (isTransitioning) return;

        const wrapper = figureElement.querySelector('.gallery-wrapper');
        wrapper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        isTransitioning = true;

        if (direction === 'next') {
            currentIndex++;
        } else {
            currentIndex--;
        }

        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update pagination and dataset ID
        let activeId;
        if (currentIndex > data.galeri.length) {
            activeId = data.galeri[0].id;
        } else if (currentIndex < 1) {
            activeId = data.galeri[data.galeri.length - 1].id;
        } else {
            activeId = data.galeri[currentIndex - 1].id;
        }

        updateNavigationButtons(activeId);
        updatePaginationClasses();
    };

    const autoPlayGallery = () => {
        moveGallery('next');
    };

    let intervalId;

    const startAutoPlay = () => {
        clearInterval(intervalId);
        intervalId = setInterval(autoPlayGallery, 4000);
    };

    nextButton.addEventListener('click', () => {
        moveGallery('next');
        startAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        moveGallery('prev');
        startAutoPlay();
    });

    showAllButton.addEventListener('click', () => {
        showAllBox.innerHTML = data.galeri.map(item => `<img src="${item.image}" alt="image galeri">`).join('');
        showAllContainer.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        showAllBox.innerHTML = '';
        showAllContainer.classList.remove('active');
    });

    initializeGallery();
    startAutoPlay();

    paginationElement.querySelectorAll('li').forEach((pagination) => {
        pagination.addEventListener('click', (e) => {
            const id = +e.target.closest('li').dataset.id;
            updateGalleryImage(id);
            startAutoPlay();
        })
    })
};
