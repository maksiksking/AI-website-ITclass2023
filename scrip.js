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

    let currentImage = document.getElementsByClassName("current-image")[0];
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const scaleAnim = [
        {transform: "scale(1)"},
        {transform: "scale(0)"},
    ];
    const scaleAnimBack = [
        {transform: "scale(0)"},
        {transform: "scale(1)"},
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

    let onOffPass = false;
    let onOffPass2 = false;

    let y = true;
    let z = true;
    let q = true;
    let j = true;
    let o = 0;

    let y2 = true;
    let z2 = true;
    let q2 = true;
    let j2 = true;
    let o2 = 0;

    function redeclareSqr() {
        onOffPass = false;

        if (currentLeftRqtIndex > 3) {
            currentLeftRqtIndex = 0
            console.log("bruuh")
        }

        if (currentRightRqtIndex > 3) {
            currentRightRqtIndex = 0
            console.log("bruuhR")
        }

        rqt = document.getElementsByClassName("rqtId")[currentLeftRqtIndex];

        rqt.classList.add("rct1");
        rqt.classList.add("active");
        rqt.classList.add("rectL");

        rqt.classList.remove("activeMain");
        rqt.classList.remove("rctR");
        rqt.classList.remove("rctL");

        rqt2 = currentMainRqt;


        rqt2.classList.add("rct2");
        rqt2.classList.add("active2");
        rqt2.classList.add("rectR");

        rqt2.classList.remove("activeMain");
        rqt2.classList.remove("mainRct");
        rqt2.classList.remove("rctR");
        rqt2.classList.remove("rctL");

        currentMainRqt = document.getElementsByClassName("mainRct")[0];

        rqt2.classList.remove("active2");
        rqt2.classList.remove("rct2");
        rqt2.classList.remove("rectR");
        rqt2.classList.remove("fakeAnimActive");
        rqt2.classList.remove("fakeAnimL");

        void rqt2.offsetWidth;

        rqt2.classList.add("active2");
        rqt2.classList.add("rct2");
        rqt2.classList.add("rectR");
        rqt2.classList.add("fakeAnimActive");
        rqt2.classList.add("fakeAnimL");

        rqt2.style.animationPlayState = "paused";

        console.log(currentMainRqt);
        console.log(rqt2);
        console.log("yeeeee");
    }

    function redeclareSqrR() {
        onOffPass = false;

        if (currentLeftRqtIndex > 3) {
            currentLeftRqtIndex = 0
            console.log("bruuh")
        }

        if (currentRightRqtIndex > 3) {
            currentRightRqtIndex = 0
            console.log("bruuhR")
        }

        rqt2 = document.getElementsByClassName("rqtIdR")[currentRightRqtIndex];

        rqt2.classList.add("rct2");
        rqt2.classList.add("active2");
        rqt2.classList.add("rectR");

        rqt2.classList.remove("activeMain");
        rqt2.classList.remove("rctR");
        rqt2.classList.remove("rctL");

        rqt = currentMainRqt;

        rqt.classList.add("rct1");
        rqt.classList.add("active");
        rqt.classList.add("rectL");

        rqt.classList.remove("activeMain");
        rqt.classList.remove("mainRct");
        rqt.classList.remove("rctR");
        rqt.classList.remove("rctL");

        currentMainRqt = document.getElementsByClassName("mainRct")[0];

        currentMainRqt.classList.remove("activeMain");
        currentMainRqt.classList.remove("rctR");

        void currentMainRqt.offsetWidth;

        currentMainRqt.classList.add("activeMain");
        currentMainRqt.classList.add("rctR");

        currentMainRqt.style.animationDirection = "normal"
        currentMainRqt.style.animationPlayState = "paused"

        rqt.classList.remove("active");
        rqt.classList.remove("rct1");
        rqt.classList.remove("rectL");
        rqt.classList.remove("fakeAnimActiveR");
        rqt.classList.remove("fakeAnimR");

        void rqt.offsetWidth;

        rqt.classList.add("active");
        rqt.classList.add("rct1");
        rqt.classList.add("rectL");
        rqt.classList.add("fakeAnimActiveR");
        rqt.classList.add("fakeAnimR");

        rqt.style.animationPlayState = "paused";

        console.log(currentMainRqt);
        console.log(rqt);
        console.log("yeeeee");
    }

    function prevButtonClick() {
        if (onOffPass2 === false) {
            onOffPass2 = true;
        } else {
            console.log("I am true");
        }
    }

    function nextButtonClick() {
        if (onOffPass === false) {
            onOffPass = true;
            // currentLeftRqtIndex = currentLeftRqtIndex++
        } else {
            console.log("I am true too");
        }
    }

    // Лівий прямокутник

    function animStart() {
        cTxt1.classList.remove("cc")

        rqt.classList.remove("fakeAnimL")
        rqt.classList.remove("fakeAnimActive")
        rqt2.classList.remove("fakeAnimR")
        rqt2.classList.remove("fakeAnimActiveR")
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
    }

    function animBack() {
        rqt.classList.remove("fakeAnimL")
        rqt.classList.remove("fakeAnimActive")
        rqt2.classList.remove("fakeAnimR")
        rqt2.classList.remove("fakeAnimActiveR")

        if (onOffPass === false) {
            rqt.classList.remove("active");
            rqt.classList.remove("rct1");

            void rqt.offsetWidth;

            rqt.classList.add("active");
            rqt.classList.add("rct1");

            rqt.style.animationDirection = "reverse";

            fakeRqt.animate(scaleAnim, scaleAnimTiming);

            setTimeout(() => {
                rqt2.animate(scaleAnimBack, scaleAnimTiming)
            }, 500)
        } else {
            currentLeftRqtIndex++
            currentMainRqtIndex++

            fakeRqt.classList.remove("rectL")

            console.log("///");
            console.log(rqt);
            console.log("///");

            rqt.classList.remove("rct1");
            rqt.classList.remove("active");
            rqt.classList.remove("rectL");

            rqt.classList.add("activeMain");
            rqt.classList.add("mainRct");
            rqt.classList.add("rctL");
            rqt.classList.add("rctR");

            console.log("///2412422424242");
            console.log(currentMainRqt);
            console.log("///");

            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctL");
            currentMainRqt.classList.remove("rctR");
            currentMainRqt.classList.remove("mainRct");

            currentMainRqt.classList.add("active2");
            currentMainRqt.classList.add("rct2");
            currentMainRqt.classList.add("rectR");

            rqt2.classList.remove("rct2");
            rqt2.classList.remove("active2");
            rqt2.classList.remove("rectR");

            console.log("///24124");
            console.log(currentMainRqt);
            console.log("///");

            rqt.style.animationPlayState = "paused";
            // currentMainRqt.style.animationPlayState = "paused";

            y = false;
            z = false;
            q = false;
            j = false;

            onOffPass = false;

            o++

            redeclareSqr()
        }
    }

    // ⚠️ Коли проводиш надто швидео одне входе в інше, пофіксю колись - М

    function delayedAnimStart() {
        // clearTimeout(delayTimer);
        delayTimer = setTimeout(animStart, 500);
    }

    function delayedAnimBack() {
        // clearTimeout(delayTimer); <- мб
        delayTimer = setTimeout(animBack, 500);
    }

    // Правий прямокутник

    function animStart2() {
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

        // rqt2.classList.remove("active2");
        // rqt2.classList.remove("rct2");
        //
        // void rqt2.offsetWidth;
        //
        // rqt2.classList.add("active2");
        // rqt2.classList.add("rct2");
        //
        // rqt2.style.animationPlayState = "running";
        // rqt2.style.animationDirection = "normal";
        //
        // ctrTxt.classList.remove("ctrActive");
        // ctrTxt.classList.remove("centerText");
        //
        // void ctrTxt.offsetWidth;
        //
        // ctrTxt.classList.add("ctrActive");
        // ctrTxt.classList.add("centerText");
        //
        // ctrTxt.style.animationPlayState = "running";
        // ctrTxt.style.animationDirection = "normal";
        //
        //
        // rqt.animate(scaleAnim, scaleAnimTiming);
    }

    function animBack2() {
        rqt2.classList.remove("fakeAnimR")
        rqt2.classList.remove("fakeAnimActiveR")
        rqt.classList.remove("fakeAnim")
        rqt.classList.remove("fakeAnimActive")

        if (onOffPass2 === false) {
            rqt2.classList.remove("active2");
            rqt2.classList.remove("rct2");

            void rqt2.offsetWidth;

            rqt2.classList.add("active2");
            rqt2.classList.add("rct2");

            rqt2.style.animationDirection = "reverse";

            fakeRqt2.animate(scaleAnim, scaleAnimTiming);

            setTimeout(() => {
                rqt.animate(scaleAnimBack, scaleAnimTiming)
            }, 500)
        } else {
            currentRightRqtIndex++
            currentMainRqtIndex++

            fakeRqt2.classList.remove("rectR")

            console.log("///");
            console.log(rqt2);
            console.log("///");

            rqt2.classList.remove("rct2");
            rqt2.classList.remove("active2");
            rqt2.classList.remove("rectR");

            rqt2.classList.add("activeMain");
            rqt2.classList.add("mainRct");
            rqt2.classList.add("rctL");
            rqt2.classList.add("rctR");

            currentMainRqt.classList.remove("activeMain");
            currentMainRqt.classList.remove("rctL");
            currentMainRqt.classList.remove("rctR");
            currentMainRqt.classList.remove("mainRct");

            currentMainRqt.classList.add("active");
            currentMainRqt.classList.add("rct1");
            currentMainRqt.classList.add("rectL");

            rqt.classList.remove("rct1");
            rqt.classList.remove("active");
            rqt.classList.remove("rectL");

            console.log("///");
            console.log(currentMainRqt);
            console.log("///hfgfgf");

            y2 = false;
            z2 = false;
            q2 = false;
            j2 = false;

            onOffPass2 = false;

            o2++

            redeclareSqrR()
        }
    }

    function delayedAnimStart2() {
        // clearTimeout(delayTimer2);
        delayTimer2 = setTimeout(animStart2, 500);
    }

    function delayedAnimBack2() {
        // clearTimeout(delayTimer2);
        delayTimer2 = setTimeout(animBack2, 500);
    }

    function mainStartAnimL() {
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

    function mainBackAnimL() {
        currentMainRqt.classList.remove("activeMain");
        currentMainRqt.classList.remove("rctL");

        void currentMainRqt.offsetWidth;

        currentMainRqt.classList.add("activeMain");
        currentMainRqt.classList.add("rctL");

        currentMainRqt.classList.remove("rctR");
        currentMainRqt.classList.add("rctL");

        currentMainRqt.style.animationDirection = "reverse";
    }

    function delayedMainStartAnimL() {
        // clearTimeout(delayTimerMain);
        delayTimerMain = setTimeout(mainStartAnimL, 500);
    }

    function delayedMainBackAnimL() {
        // clearTimeout(delayTimerMain);
        delayTimerMain = setTimeout(mainBackAnimL, 500);
    }

    function mainStartAnimR() {
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

    function mainBackAnimR() {
        currentMainRqt.classList.remove("activeMain");
        currentMainRqt.classList.remove("rctR");

        void currentMainRqt.offsetWidth;

        currentMainRqt.classList.add("activeMain");
        currentMainRqt.classList.add("rctR");

        currentMainRqt.classList.remove("rctL");
        currentMainRqt.classList.add("rctR");

        currentMainRqt.style.animationDirection = "reverse";
    }

    function delayedMainStartAnimR() {
        // clearTimeout(delayTimerMainR);
        delayTimerMainR = setTimeout(mainStartAnimR, 500);
    }

    function delayedMainBackAnimR() {
        // clearTimeout(delayTimerMainR);
        delayTimerMainR = setTimeout(mainBackAnimR, 500);
    }

    nextButton.addEventListener("mouseenter", delayedMainStartAnimL);
    nextButton.addEventListener("mouseleave", delayedMainBackAnimL);

    prevButton.addEventListener("mouseenter", delayedMainStartAnimR);
    prevButton.addEventListener("mouseleave", delayedMainBackAnimR);

    nextButton.addEventListener("mouseleave", delayedAnimBack);
    nextButton.addEventListener("mouseenter", delayedAnimStart);

    prevButton.addEventListener("mouseleave", delayedAnimBack2);
    prevButton.addEventListener("mouseenter", delayedAnimStart2);

// Анімація самої штуки - М

// ⚠️ Рагульно зроблено але я хз як чинити - М

    function isScrolledIntoView() {
        if (elemTop >= 0 && elemBottom <= window.innerHeight) {
            isVisible = true;
        }

        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if (isVisible === true) {
            setTimeout(() => {
                currentImage.style.animationPlayState = "paused";
            }, 10)
        }
    }

// ⚠️ рагульно зроблено але я хз як чинити - М
window.addEventListener("scroll", isScrolledIntoView)
})
;