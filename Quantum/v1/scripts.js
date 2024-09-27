// Toggle menu in mobile view
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Change the selected menu item and display content in <main>
document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove selected class from all items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('selected');
        });

        // Add selected class to clicked item
        this.parentElement.classList.add('selected');

        // Load respective content into main section
        const contentDisplay = document.getElementById('content-display');
        const contentType = this.getAttribute('data-content');

        let content = '';
        switch(contentType) {
            case 'dashboard':
                content = '<h1>Dashboard</h1>';
                break;
            case 'content':
                content = '<h1>Content</h1>';
                break;
            case 'users':
                content = '<h1>Users</h1>';
                break;
            case 'reports':
                content = '<h1>Reports</h1>';
                break;
            case 'admin':
                content = '<h1>Admin</h1>';
                break;
            // case 'notification':
            //     content = '<h1>Notification</h1>';
            //     break;
            // case 'announcement':
            //     content = '<h1>Announcement</h1>';
            //     break;
            // case 'profile':
            //     content = '<h1>Profile</h1>';
            //     break;
        }

        contentDisplay.innerHTML = content;
    });
});

// Get references to the divs
const coursesDiv = document.getElementById('courses');
const classesDiv = document.getElementById('classes');

// Function to handle selection
function selectOption(selectedDiv) {
    // Remove the 'selected' class from both divs
    coursesDiv.classList.remove('selected');
    classesDiv.classList.remove('selected');
    
    // Add the 'selected' class to the clicked div
    selectedDiv.classList.add('selected');
}

// Add click event listeners to both divs
coursesDiv.addEventListener('click', function() {
    selectOption(coursesDiv);
});

classesDiv.addEventListener('click', function() {
    selectOption(classesDiv);
});
