window.onload = function() {
    const years = Array.from(document.querySelectorAll('.toolbar span[data-year]'));
    const locations = Array.from(document.getElementsByClassName('location'));
    const images = Array.from(document.getElementsByClassName('content-item'));
    
    years.forEach((year) => {
        year.addEventListener('click', function() {
            // Add strikethrough to selected year and remove from others
            years.forEach((yr) => {
                if (yr === this) {
                    yr.classList.add('active');
                } else {
                    yr.classList.remove('active');
                }
            });
        });
    });

    locations.forEach((location) => {
        location.addEventListener('click', function() {
            let selectedLocation = this.getAttribute('data-location');

            // Add strikethrough to selected location and remove from others
            locations.forEach((loc) => {
                if (loc === this) {
                    loc.classList.add('active');
                } else {
                    loc.classList.remove('active');
                }
            });

            // Show only images that match the selected location
            images.forEach((img) => {
                if (selectedLocation === 'all' || img.getAttribute('data-location') === selectedLocation) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
}