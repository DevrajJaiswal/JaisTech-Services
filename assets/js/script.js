
console.clear()

// Portfolio Gallery Script Start
let categoryTabs = document.querySelectorAll('.category-tab-container .category-tab');

let portfolioItems = document.querySelectorAll('.portfolio-item');

categoryTabs.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
        let tabCategory = this.dataset.category;
        categoryTabs.forEach(function (el) {
            el.classList.remove('active-category')
        })
        e.target.classList.add('active-category')
        showPortfolio(tabCategory);
    })
})

function showPortfolio(tabCategory) {
    console.clear
    portfolioItems.forEach(function (item, i) {

        let itemCategory = item.dataset.category;

        if (tabCategory === "All") {
            item.classList.add('active-portfolio');
        } else {
            if (tabCategory == itemCategory) {
                item.classList.add('active-portfolio');
            } else {
                item.classList.remove('active-portfolio');
            }
        }
    })
}

document.getElementById('select-category').addEventListener('change', function () {
    showPortfolio(this.value)
});

showPortfolio("All")
// Portfolio Gallery Script End


// Team Slider Script Start

let cardIndex = 0;

let cards = document.querySelectorAll('.team-card');
let cardWidth = cards[0].offsetWidth;

const visibleCards = 4;
const totalCards = cards.length;
const maxIndex = totalCards - visibleCards;
const totalDots = totalCards - visibleCards;

let dotContainer = document.querySelector('.card-dot-container');
dotContainer.innerHTML = '';

for (let i = 0; i <= totalDots; i++) {

    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('data-i', i)
    if (i == cardIndex) {
        dot.classList.add('active-dot')
    }
    dotContainer.appendChild(dot);

    dot.addEventListener('click', function () {
        let cardIndex = this.dataset.i;
        slideCard(cardIndex);
    })
}

let cardSlider = document.getElementById('team-card-slider');

let dots = document.querySelectorAll('.card-dot-container .dot');

let prevButton = document.getElementById('prevButton');

prevButton.addEventListener('click', function () {
    cardIndex = (cardIndex == 0) ? maxIndex : (cardIndex - 1);
    prevCard(cardIndex)
});

let nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', function () {
    cardIndex = (cardIndex == maxIndex) ? 0 : cardIndex + 1;
    nextCard(cardIndex);
});

function activateDot(cardIndex) {
    dots.forEach(function (val, i) {
        if (i == cardIndex) {
            dots[i].classList.add('active-dot')
        } else {
            dots[i].classList.remove('active-dot')
        }
    })
}

function slideCard(cardIndex) {
    cardSlider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
    activateDot(cardIndex);
}

function prevCard(cardIndex) {
    slideCard(cardIndex)
}

function nextCard(cardIndex) {
    slideCard(cardIndex)
}

setInterval(function () {
    cardIndex = (cardIndex == maxIndex) ? 0 : cardIndex + 1;
    slideCard(cardIndex);
}, 3000);

function updateSliderSettings() {
    cardWidth = cards[0].offsetWidth;
    if (window.innerWidth <= 480) {
        visibleCards = 2;
    } else if (window.innerWidth <= 768) {
        visibleCards = 3;
    } else if (window.innerWidth <= 991) {
        visibleCards = 3;
    } else {
        visibleCards = 4;
    }
    maxIndex = totalCards - visibleCards;
    updateDots();
}

function updateDots() {
    dotContainer.innerHTML = '';
    for (let i = 0; i <= totalCards - visibleCards; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-i', i);
        if (i == cardIndex) dot.classList.add('active-dot');
        dotContainer.appendChild(dot);

        dot.addEventListener('click', function () {
            cardIndex = Number(this.dataset.i);
            slideCard(cardIndex);
        });
    }
    dots = document.querySelectorAll('.card-dot-container .dot');
}

window.addEventListener('resize', () => {
    updateSliderSettings();
    slideCard(cardIndex);
});
// Team Slider Script End




