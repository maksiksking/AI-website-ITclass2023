document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = [
        "image/images.png",
        "image/images1.jpg",
        "image/images3.png"
        // Тут можна додати ше
    ];
    const currentImage = document.getElementById("current-image");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const rqt = document.getElementById("rect1");
    const rqt2 = document.getElementById("rect2");
    const mainRct = document.getElementById("mainRct");
    const scaleAnim = [
        {transform: "scale(0.8)"},
        {transform: "scale(0)"},
    ];
    const scaleAnimBack = [
        {transform: "scale(0)"},
        {transform: "scale(0.8)"},
    ];
    const scaleAnimTiming = {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    };
    let rectag = currentImage.getBoundingClientRect();
    let elemTop = rectag.top;
    let elemBottom = rectag.bottom;
    let isVisible = false
    let delayTimer;
    let delayTimer2;
    let delayTimerMain;
    let delayTimerMainR;

    function updateCurrentImage() {
        currentImage.src = images[currentImageIndex];
    }

    function prevButtonClick() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCurrentImage();
    }

    function nextButtonClick() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCurrentImage();
    }

    prevButton.addEventListener("click", prevButtonClick);
    nextButton.addEventListener("click", nextButtonClick);

    // Лівий прямокутник

    function animStart() {
        rqt.classList.remove("active");
        rqt.classList.remove("rct1");

        void rqt.offsetWidth;

        rqt.classList.add("active");
        rqt.classList.add("rct1");

        rqt.style.animationPlayState = "running";
        rqt.style.animationDirection = "normal";
        rqt2.animate(scaleAnim, scaleAnimTiming);
    }

    function animBack() {
        rqt.classList.remove("active");
        rqt.classList.remove("rct1");

        void rqt.offsetWidth;

        rqt.classList.add("active");
        rqt.classList.add("rct1");

        rqt.style.animationDirection = "reverse";
        setTimeout(() => {
            rqt2.animate(scaleAnimBack, scaleAnimTiming)
        }, 500)
    }

    // ⚠️ Коли проводиш надто шкидко починається тільки друга анімація, пофіксю колись - М

    function delayedAnimStart() {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(animStart, 500);
    }

    function delayedAnimBack() {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(animBack, 500);
    }

    // Правий прямокутник

    function animStart2() {
        rqt2.classList.remove("active2");
        rqt2.classList.remove("rct2");

        void rqt2.offsetWidth;

        rqt2.classList.add("active2");
        rqt2.classList.add("rct2");

        rqt2.style.animationPlayState = "running";
        rqt2.style.animationDirection = "normal";
        rqt.animate(scaleAnim, scaleAnimTiming);
    }

    function animBack2() {
        rqt2.classList.remove("active2");
        rqt2.classList.remove("rct2");

        void rqt2.offsetWidth;

        rqt2.classList.add("active2");
        rqt2.classList.add("rct2");

        rqt2.style.animationDirection = "reverse";
        setTimeout(() => {
            rqt.animate(scaleAnimBack, scaleAnimTiming)
        }, 500)
    }

    function delayedAnimStart2() {
        clearTimeout(delayTimer2);
        delayTimer2 = setTimeout(animStart2, 500);
    }

    function delayedAnimBack2() {
        clearTimeout(delayTimer2);
        delayTimer2 = setTimeout(animBack2, 500);
    }

    function mainStartAnimL() {
        mainRct.classList.remove("activeMain");
        mainRct.classList.remove("rctL");

        void mainRct.offsetWidth;

        mainRct.classList.add("activeMain");
        mainRct.classList.add("rctL");

        mainRct.style.animationName = "rctMoovinL";
        mainRct.style.animationPlayState = "running";
        mainRct.style.animationDirection = "normal";
    }

    function mainBackAnimL() {
        mainRct.classList.remove("activeMain");
        mainRct.classList.remove("rctL");

        void mainRct.offsetWidth;

        mainRct.classList.add("activeMain");
        mainRct.classList.add("rctL");

        mainRct.style.animationName = "rctMoovinL";
        mainRct.style.animationDirection = "reverse";
    }

    function delayedMainStartAnimL() {
        clearTimeout(delayTimerMain);
        delayTimerMain = setTimeout(mainStartAnimL, 500);
    }

    function delayedMainBackAnimL() {
        clearTimeout(delayTimerMain);
        delayTimerMain = setTimeout(mainBackAnimL, 500);
    }

    function mainStartAnimR() {
        mainRct.classList.remove("activeMainR");
        mainRct.classList.remove("rctR");

        void mainRct.offsetWidth;

        mainRct.classList.add("activeMainR");
        mainRct.classList.add("rctR");
        
        mainRct.style.animationPlayState = "running";
        mainRct.style.animationDirection = "normal";
    }

    function mainBackAnimR() {
        mainRct.classList.remove("activeMainR");
        mainRct.classList.remove("rctR");

        void mainRct.offsetWidth;

        mainRct.classList.add("activeMainR");
        mainRct.classList.add("rctR");

        mainRct.style.animationDirection = "reverse";
    }

    function delayedMainStartAnimR() {
        clearTimeout(delayTimerMainR);
        delayTimerMainR = setTimeout(mainStartAnimR, 500);
    }

    function delayedMainBackAnimR() {
        clearTimeout(delayTimerMainR);
        delayTimerMainR = setTimeout(mainBackAnimR, 500);
    }

    nextButton.addEventListener("mouseleave", delayedAnimBack);
    nextButton.addEventListener("mouseenter", delayedAnimStart);

    prevButton.addEventListener("mouseleave", delayedAnimBack2);
    prevButton.addEventListener("mouseenter", delayedAnimStart2);

    nextButton.addEventListener("mouseenter", delayedMainStartAnimL);
    nextButton.addEventListener("mouseleave", delayedMainBackAnimL);

    prevButton.addEventListener("mouseenter", delayedMainStartAnimR);
    prevButton.addEventListener("mouseleave", delayedMainBackAnimR);

    // Анімація самої штуки - М

    // ⚠️ Рагульно зроблено але я хз як чинити - М

    function isScrolledIntoView() {
        // Only completely visible elements return true:
        if (elemTop >= 0 && elemBottom <= window.innerHeight) {
            isVisible = true;
        }

        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if (isVisible === true) {
            setTimeout(() => {
                currentImage.style.animationPlayState = "running";
            }, 10)
        }
    }

    // ⚠️ рагульно зроблено але я хз як чинити - М

    window.addEventListener("scroll", isScrolledIntoView)

    updateCurrentImage();
});