document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('dashboard-link').addEventListener('click', function () {
        loadCourses();
    });

    function loadCourses() {
        fetch('courses-data.json')
            .then(response => response.json())
            .then(data => {
                renderCourses(data.courses);
            })
            .catch(error => console.error('Error loading courses:', error));
    }

    function renderCourses(courses) {
        const coursesContainer = document.getElementById('courses-container');
        coursesContainer.innerHTML = ''; // Clear previous content

        courses.forEach(course => {
            const courseCard = `
                <div class="courses-card" id="${course.id}">
                    <div class="courses-info">
                        <div class="courses-img">
                            <img src="${course.image}">
                        </div>
                        <div class="courses-details">
                            <div class="courses-heading">
                                <div class="courses-title">${course.title}</div>
                                <div class="courses-star">
                                    <img src="${course.favourite}">
                                </div>
                            </div>
                            <div class="courses-sub">${course.subject}</div>
                            <div class="courses-unit">
                                <span class="courses-unit-count">${course.units}</span><span class="e8-space">Units</span>
                                <span class="courses-unit-count">${course.lessons}</span><span class="e8-space">Lessons</span>
                                <span class="courses-unit-count">${course.topics}</span><span class="e8-space">Topics</span>
                            </div>
                            <div class="courses-lecture-selection">
                                <select id="sort-lecture" name="sort-lec" required>
                                    ${course.classes.map(cls => `<option value="${cls}">${cls}</option>`).join('')}
                                </select>
                            </div>
                            <div class="courses-student-dur">
                                ${course.students ? `${course.students} students | ` : ''}${course.duration}
                            </div>
                        </div>
                    </div>
                    <div class="courses-insight">
                        <div><img src="assets/icons/preview.svg"></div>
                        <div><img src="assets/icons/manage course.svg"></div>
                        <div id="insights3"><img src="assets/icons/grade submissions.svg"></div>
                        <div id="insights4"><img src="assets/icons/reports.svg"></div>
                    </div>
                </div>`;
            coursesContainer.insertAdjacentHTML('beforeend', courseCard);
        });
    }
});

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