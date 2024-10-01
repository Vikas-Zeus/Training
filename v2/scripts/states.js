document.getElementById('state').addEventListener('change', function() {
    var state = this.value;
    var districtDropdown = document.getElementById('district');

    // Clear the previous options
    districtDropdown.innerHTML = '<option value="">Select District</option>';

    // Define the districts for each state
    var districtsByState = {
        'Alabama': ['Alabama School District', 'Alabama School District 2', 'Alabama School District 3'],
        'California': ['Los Angeles Unified', 'San Francisco Unified', 'Sacramento City Unified'],
        'New York': ['New York City District 1', 'Buffalo City District', 'Rochester City District'],
        // Add more states and their districts as needed
    };

    // Populate the district dropdown based on the selected state
    if (districtsByState[state]) {
        districtsByState[state].forEach(function(district) {
            var option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    }
});
