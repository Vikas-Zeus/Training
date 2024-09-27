document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation checks
    if (!name) {
        alert("Name cannot be empty.");
        return;
    }
    if (!comments) {
        alert("Comments cannot be empty.");
        return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    alert("Form submitted successfully!");

    document.getElementById('myForm').reset();
});