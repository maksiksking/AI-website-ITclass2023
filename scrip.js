document.addEventListener("DOMContentLoaded", function () {
    let currentLeftRqtIndex = 0;
    let currentMainRqtIndex = 0;
    let currentRightRqtIndex = 0;
    let rqt = document.getElementsByClassName("rectL")[currentLeftRqtIndex];
    let rqt2 = document.getElementsByClassName("rectR")[currentRightRqtIndex];
    let currentMainRqt = document.getElementsByClassName("mainRct")[currentMainRqtIndex];

    let cTxt1 = document.getElementsByClassName("cc")[0];
    let cTxt2 = document.getElementsByClassName("cc")[1];

    let fakeRqt = document.getElementsByClassName("fakeRectL")[0];
    let fakeRqt2 = document.getElementsByClassName("fakeRectR")[0];

    const descF = document.getElementsByClassName("containerDesc")[0];

    const currentImg = document.getElementsByClassName("galleryC")[0];
    const ctrC = document.getElementById("ctrC");

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const scaleAnim = [
        {transform: "scale(1)"},
        {transform: "scale(0)"},
    ];
    const opacityAnim = [
        {opacity: 100},
        {opacity: 0},
    ];
    const scaleAnimBack = [
        {transform: "scale(0)"},
        {transform: "scale(1)"},
    ];
    const opacityAnimBack = [
        {opacity: 0},
        {opacity: 100},
    ];
    const scaleAnimTiming = {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    };
    const scaleDescAnimTiming = {
        duration: 100,
        iterations: 1,
        fill: "forwards",
    };

    let onOff = true;

    let delayTimer;
    let delayTimer2;
    let delayTimerMain;
    let delayTimerMainR;

    let delayTimerD;
    let delayTimer2D;
    let delayTimerMainD;
    let delayTimerMainRD;

    let allowAnim1 = true;

    // Лівий прямокутник

    function animStart() {
        if (allowAnim1 === true) {
            cTxt1.classList.remove("cc");

            rqt.classList.remove("fakeAnimL");
            rqt.classList.remove("fakeAnimActive");
            rqt2.classList.remove("fakeAnimR");
            rqt2.classList.remove("fakeAnimActiveR");

            rqt.classList.remove("active");
            rqt.classList.remove("rct1");

            void rqt.offsetWidth;

            rqt.classList.add("active");
            rqt.classList.add("rct1");

            rqt.style.animationPlayState = "running";
            rqt.style.animationDirection = "normal";

            rqt2.animate(scaleAnim, scaleAnimTiming);

            fakeRqt.classList.add("rectL");
            fakeRqt.animate(scaleAnimBack, scaleAnimTiming);

            descF.animate(opacityAnim, scaleDescAnimTiming);
        } else {
            console.log("puff1")
        }
    }

    function animBack() {
        if (allowAnim1 === true) {
            rqt.classList.remove("fakeAnimL")
            rqt.classList.remove("fakeAnimActive")
            rqt2.classList.remove("fakeAnimR")
            rqt2.classList.remove("fakeAnimActiveR")


            rqt.classList.remove("active");
            rqt.classList.remove("rct1");

            void rqt.offsetWidth;

            rqt.classList.add("active");
            rqt.classList.add("rct1");

            rqt.style.animationDirection = "reverse";

            fakeRqt.animate(scaleAnim, scaleAnimTiming);

            allowAnim1 = false;

            setTimeout(() => {
                allowAnim1 = true;
            }, 750)

            setTimeout(() => {
                rqt2.animate(scaleAnimBack, scaleAnimTiming);
                descF.animate(opacityAnimBack, scaleDescAnimTiming);
            }, 500)
        }
    }

    function delayedAnimStart() {
        clearTimeout(delayTimer)
        delayTimer = setTimeout(animStart, 500);
    }

    function delayedAnimBack() {
        clearTimeout(delayTimerD)
        delayTimerD = setTimeout(animBack, 500);
    }

    // Правий прямокутник

    function animStart2() {
        if (allowAnim1 === true) {
            cTxt2.classList.remove("cc")

            rqt2.classList.remove("fakeAnimR")
            rqt2.classList.remove("fakeAnimActiveR")
            rqt.classList.remove("fakeAnim")
            rqt.classList.remove("fakeAnimActive")

            rqt2.classList.remove("active2");
            rqt2.classList.remove("rct2");

            void rqt2.offsetWidth;

            rqt2.classList.add("active2");
            rqt2.classList.add("rct2");

            rqt2.style.animationPlayState = "running";
            rqt2.style.animationDirection = "normal";

            rqt.animate(scaleAnim, scaleAnimTiming);

            fakeRqt2.classList.add("rectR");
            fakeRqt2.animate(scaleAnimBack, scaleAnimTiming);

            descF.animate(opacityAnim, scaleDescAnimTiming);
        } else {
            console.log("puff2")
        }
    }

    function animBack2() {
        if (allowAnim1 === true) {
            rqt2.classList.remove("fakeAnimR")
            rqt2.classList.remove("fakeAnimActiveR")
            rqt.classList.remove("fakeAnim")
            rqt.classList.remove("fakeAnimActive")

            rqt2.classList.remove("active2");
            rqt2.classList.remove("rct2");

            void rqt2.offsetWidth;

            rqt2.classList.add("active2");
            rqt2.classList.add("rct2");

            rqt2.style.animationDirection = "reverse";

            fakeRqt2.animate(scaleAnim, scaleAnimTiming);

            allowAnim1 = false;

            setTimeout(() => {
                allowAnim1 = true;
            }, 750)

            setTimeout(() => {
                rqt.animate(scaleAnimBack, scaleAnimTiming)
                descF.animate(opacityAnimBack, scaleDescAnimTiming);
            }, 500)
        }
    }

    function delayedAnimStart2() {
        delayTimer2 = setTimeout(animStart2, 500);
    }

    function delayedAnimBack2() {
        delayTimer2D = setTimeout(animBack2, 500);
    }

    function mainStartAnimL() {
        if (allowAnim1 === true) {
            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctL");

            void currentMainRqt.offsetWidth;

            currentMainRqt.classList.add("activeMain");
            currentMainRqt.classList.add("rctL");

            currentMainRqt.classList.remove("rctR");
            currentMainRqt.classList.add("rctL");

            currentMainRqt.style.animationPlayState = "running";
            currentMainRqt.style.animationDirection = "normal";
        }
    }

    function mainBackAnimL() {
        if (allowAnim1 === true) {
            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctL");

            void currentMainRqt.offsetWidth;

            currentMainRqt.classList.add("activeMain");
            currentMainRqt.classList.add("rctL");

            currentMainRqt.classList.remove("rctR");
            currentMainRqt.classList.add("rctL");

            currentMainRqt.style.animationDirection = "reverse";
        }
    }

    function delayedMainStartAnimL() {
        clearTimeout(delayTimerMain);
        delayTimerMain = setTimeout(mainStartAnimL, 500);
    }

    function delayedMainBackAnimL() {
        clearTimeout(delayTimerMainD);
        delayTimerMainD = setTimeout(mainBackAnimL, 500);
    }

    function mainStartAnimR() {
        if (allowAnim1 === true) {
            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctR");

            void currentMainRqt.offsetWidth;

            currentMainRqt.classList.add("activeMain");
            currentMainRqt.classList.add("rctR");

            currentMainRqt.classList.remove("rctL");
            currentMainRqt.classList.add("rctR");
            currentMainRqt.style.animationPlayState = "running";
            currentMainRqt.style.animationDirection = "normal";
        }
    }

    function mainBackAnimR() {
        if (allowAnim1 === true) {
            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctR");

            void currentMainRqt.offsetWidth;

            currentMainRqt.classList.add("activeMain");
            currentMainRqt.classList.add("rctR");

            currentMainRqt.classList.remove("rctL");
            currentMainRqt.classList.add("rctR");

            currentMainRqt.style.animationDirection = "reverse";
        }
    }

    function delayedMainStartAnimR() {
        clearTimeout(delayTimerMainR);
        delayTimerMainR = setTimeout(mainStartAnimR, 500);
    }

    function delayedMainBackAnimR() {
        clearTimeout(delayTimerMainRD);
        delayTimerMainRD = setTimeout(mainBackAnimR, 500);
    }

    prevButton.addEventListener("mouseenter", delayedMainStartAnimL);
    prevButton.addEventListener("mouseleave", delayedMainBackAnimL);

    prevButton.addEventListener("mouseleave", delayedAnimBack);
    prevButton.addEventListener("mouseenter", delayedAnimStart);

    nextButton.addEventListener("mouseenter", delayedMainStartAnimR);
    nextButton.addEventListener("mouseleave", delayedMainBackAnimR);

    nextButton.addEventListener("mouseleave", delayedAnimBack2);
    nextButton.addEventListener("mouseenter", delayedAnimStart2);

// Анімація самої штуки - М

    function isScrolledIntoView() {
        let rect = currentImg.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    setInterval(() => {
        if (isScrolledIntoView() === true) {
            if (onOff === true) {
                currentImg.style.animationPlayState = "running";
                ctrC.style.animationPlayState = "running";
                onOff = false;
            }
        }
    }, 1200)
    window.addEventListener("scroll", isScrolledIntoView)
})
;