/* Makes hidden section visible when scrolling */ 
const robotSection = document.querySelector(".not-a-robot-section");

window.addEventListener('scroll', function (e) {
    this.setTimeout(() => {     
        robotSection.classList.remove("not-a-robot-section-hidden");
    }, 1000); 
});


const checkbox = document.querySelector(".checkbox");
const check = document.querySelector(".check");
const selectWoodSection = document.querySelector(".select-wood-section");

checkbox.addEventListener("click", () => {
    rightAnswer.play();
    check.classList.remove("check-hidden");
    setTimeout(() => {
        robotSection.classList.add("hidden");  
        selectWoodSection.classList.remove("select-wood-section-hidden");     
    }, 2000);
});

/* Output of images */
const selectWoodWrapperNew = document.querySelector(".select-wood-wrapper-new");

const images = [
    {
        image: "images/dog.jpg",
    },
    {
        image: "images/wood1.jpg",
    },
    {
        image: "images/tram.jpg",
    },
    {
        image: "images/pizza.jpg",
    },
    {
        image: "images/wood2.jpg",
    },
    {
        image: "images/wood3.jpg",
    }
];

function imgOutput() {
    images.forEach((image) => {
        let imageSrc = `${image["image"]}`;

        let createImg = document.createElement("img");

        createImg.src = imageSrc;

        let createDiv = document.createElement("div");

        createDiv.classList.add("test");

        selectWoodWrapperNew.appendChild(createDiv);

        createDiv.appendChild(createImg);

        return imageSrc;
    });
}

console.log(imgOutput());

/* Audio */ 
const wrongAnswer = new Audio('audio/wrong-answer.mp3');
const win = new Audio('audio/win.mp3');
const rightAnswer = new Audio("audio/click-img.mp3");

console.log(win);

const imageContainer1 = document.querySelector(".test:nth-of-type(1) img");
const imageContainer2 = document.querySelector(".test:nth-of-type(2) img");
const imageContainer3 = document.querySelector(".test:nth-of-type(3) img");
const imageContainer4 = document.querySelector(".test:nth-of-type(4) img");
const imageContainer5 = document.querySelector(".test:nth-of-type(5) img");
const imageContainer6 = document.querySelector(".test:nth-of-type(6) img");

imageContainer1.addEventListener("click", () => {
    imageContainer1.remove();
    imageGameLoss();
});

imageContainer2.addEventListener("click", () => {
    rightAnswer.play();
    imageContainer2.remove();
    testVar += 1;
    testt();
});

imageContainer3.addEventListener("click", () => {
    imageContainer3.remove();
    imageGameLoss();
});

imageContainer4.addEventListener("click", () => {
    imageContainer4.remove();
    imageGameLoss();
});

imageContainer5.addEventListener("click", () => {
    rightAnswer.play();
    imageContainer5.remove();
    testVar += 1;
    testt();
});

imageContainer6.addEventListener("click", () => {
    rightAnswer.play();
    imageContainer6.remove();
    testVar += 1;
    testt();
});

let wordTestSection = document.querySelector(".word-test-section");
let testVar = 0;

function testt() {
if (testVar == 3) {
    this.setTimeout (() => {
        console.log("coooool");
        wordTestSection.classList.remove("word-test-section-hidden");
        selectWoodSection.classList.add("select-wood-section-hidden");
    }, 1000);
}};

const confirmed = document.querySelector(".confirm-btn");
const popup = document.querySelector(".select-wood-section-popup");
popup.classList.add("hidden");

const confirmed2 = document.querySelector(".confirm-btn2");
const popup2 = document.querySelector(".word-test-section-popup");
popup2.classList.add("hidden");

const confirmed3 = document.querySelector(".confirm-btn3");
const popup3 = document.querySelector(".last-section-popup-win");
popup3.classList.add("hidden");

function imageGameLoss() {
    imageGameLoss = function(){};
    wrongAnswer.play();
    popup.classList.remove("hidden");
    confirmed.addEventListener("click", (e) => {
        location.reload();
        window.scrollTo(0,0);
    });
}

/* Let user guess the word */
let userInput = document.querySelector(".word-test-section-input");
let form = document.querySelector(".word-test-section-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userInput.value == "Made you look") {
        win.play();
        popup3.classList.remove("hidden");
        confirmed3.addEventListener("click", () => {
            location.reload(); 
            window.scrollTo(0,0);
        });
    } else {
        wrongAnswer.play();
        popup2.classList.remove("hidden");
        confirmed2.addEventListener("click", () => {
            location.reload();
            window.scrollTo(0,0);
        });
    }
});


