window.lottieAnimations = {};

document.addEventListener("DOMContentLoaded", function () {
    window.lottieAnimations.checkMark = lottie.loadAnimation({
        container: document.getElementById('animeCheckmark'), // The container element
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'anime_lottie/checkmark.json' // ✅ Correct relative path
    });

    window.lottieAnimations.redCross = lottie.loadAnimation({
        container: document.getElementById('animeRedCross'), 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'anime_lottie/red_cross.json' 
    });


    window.lottieAnimations.bouncingFruits = lottie.loadAnimation({
        container: document.getElementById('animeBouncingFruits'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'anime_lottie/anime_bouncing_fruits.json' 
    });


    window.lottieAnimations.calculator = lottie.loadAnimation({
        container: document.getElementById('calculatorAnimation'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'anime_lottie/calculator.json' 
    });

    window.lottieAnimations.remainder = lottie.loadAnimation({
        container: document.getElementById('remainderAnimation'), 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'anime_lottie/math.json' 
    });
});



