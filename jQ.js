//Function to align all cards to the same size
(document).ready(function () {
    var maxHeight = 0;
    $(".card").each(function () {
        const height = $(this).height();
        maxHeight = height > maxHeight ? height : maxHeight;
    });
    $(".card").height(maxHeight);

    var maxWidth = 0;
    $(".card-body img").each(function () {
        const width = $(this).width();
        maxWidth = width > maxWidth ? width : maxWidth;
    });
    $(".card-body img").width(maxWidth);
});

// Function to animate elements when they come into view
function animateOnScroll() {
    const sectionsToAnimate = $("section");

    sectionsToAnimate.css({ opacity: 0, transform: "translateY(20px)" });

    function isElementInViewport(el) {
        const rect = el[0].getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        sectionsToAnimate.each(function () {
            if (isElementInViewport($(this))) {
                // Add animation class when element is in view
                $(this).addClass("animate__animated animate__fadeInUp");
            }
        });
    }

    handleScroll();

    $(window).on("scroll", handleScroll);
}

$(document).ready(function () {
    animateOnScroll();
});

$(document).ready(function() {
    var pageHeading = $(".page-heading");

    pageHeading.mouseenter(function() {
        $(this).find("h3").animate({
            marginLeft: "50px",
            opacity: 1
        }, 500);

        $(this).find("p").animate({
            marginRight: "50px",
            opacity: 1
        }, 500);
    });

    pageHeading.mouseleave(function() {
        $(this).find("h3").animate({
            marginLeft: 0,
            opacity: 0
        }, 500);

        $(this).find("p").animate({
            marginRight: 0,
            opacity: 0
        }, 500);
    });
});


