// Create scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const pxValue = (150 * window.innerHeight) / 100;

    if (document.body.scrollTop > pxValue || document.documentElement.scrollTop > pxValue) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function validateEmail() {
    const emailInput = document.querySelector('.news-input input');
    const enteredValue = emailInput.value.trim();

    if (enteredValue.length === 0) {
        alert('Please fill out the email field.');
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(enteredValue)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
    }

    emailInput.value = '';  // Clear the input field
}

// Allow pressing Enter to submit the form
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.news-input input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            validateEmail();
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var carouselCaption = document.querySelectorAll('.carousel-caption');

    carouselCaption.forEach(function (caption) {
        caption.addEventListener('mouseenter', function () {
            caption.querySelector('.caption-left').classList.add('show-text');
            caption.querySelector('.caption-right').classList.add('show-text');
        });

        caption.addEventListener('mouseleave', function () {
            caption.querySelector('.caption-left').classList.remove('show-text');
            caption.querySelector('.caption-right').classList.remove('show-text');
        });
    });
});

// Function to add the 'active' class for fade-in effect
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Select all sections you want to animate
const sectionsToAnimate = document.querySelectorAll('section');

// Observe each section
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});

function animateText(element) {
    anime.timeline({ loop: true })
        .add({
            targets: element + ' .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: function (el, i) {
                return 150 * (i + 1)
            }
        }).add({
        targets: element,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var captions = document.querySelectorAll('.carousel-caption');
    captions.forEach(function (caption) {
        animateText('#' + caption.id);
    });
});


function toggleReadMore(contentId, linkId) {
    var moreText = document.getElementById(contentId);
    var readMoreLink = document.getElementById(linkId);

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreLink.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreLink.textContent = "Read More";
    }
}


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('keypress', function(event) {
    switch (event.key) {
        case '1':
            scrollToSection('newsletter');
            break;
        case '2':
            scrollToSection('services');
            break;
        case '3':
            scrollToSection('about');
            break;
        case '4':
            scrollToSection('learn');
            break;
        case '5':
            scrollToSection('questions');
            break;
        case '6':
            scrollToSection('footer');
            break;
    }
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    console.log("AAAAAAAAAAAAA");
    const audio = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});
