function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(link => link.classList.remove('selected'));
        this.classList.add('selected');
    });
});

const subMenuItems = document.querySelectorAll('.has-submenu > a');
subMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const subMenu = this.nextElementSibling;
        subMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const courses = document.getElementById('courses');
    const classes = document.getElementById('classes');

    function handleSelection(clickedElement, otherElement) {
        clickedElement.classList.add('selected');
        otherElement.classList.remove('selected');
    }

    courses.addEventListener('click', function () {
        handleSelection(courses, classes);
    });

    classes.addEventListener('click', function () {
        handleSelection(classes, courses);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const announcementIcon = document.querySelector('.nav-item.announcement');
    const announcementPreview = document.querySelector('.announcement-preview');

    let hideTimeout;

    announcementIcon.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
        announcementPreview.classList.add('show');
    });

    announcementIcon.addEventListener('mouseout', () => {
        hideTimeout = setTimeout(() => {
            announcementPreview.classList.remove('show');
        }, 200);
    });

    announcementPreview.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
    });

    announcementPreview.addEventListener('mouseout', () => {
        hideTimeout = setTimeout(() => {
            announcementPreview.classList.remove('show');
        }, 200);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const announcementIcon = document.querySelector('.nav-item.notification');
    const announcementPreview = document.querySelector('.notification-preview');

    let hideTimeout;

    announcementIcon.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
        announcementPreview.classList.add('show');
    });

    announcementIcon.addEventListener('mouseout', () => {
        hideTimeout = setTimeout(() => {
            announcementPreview.classList.remove('show');
        }, 200);
    });

    announcementPreview.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
    });

    announcementPreview.addEventListener('mouseout', () => {
        hideTimeout = setTimeout(() => {
            announcementPreview.classList.remove('show');
        }, 200);
    });
});

