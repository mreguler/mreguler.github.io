function filterLocation(location) {
    let items = document.querySelectorAll('.content-item');
    items.forEach((item) => {
        if (location === "all") {
            item.style.display = "";
        } else if (item.getAttribute('data-location') !== location) {
            item.style.display = "none";
        } else {
            item.style.display = "";
        }
    });
}

function filterYear(year) {
    if(year === "all") {
        window.location.href = "index.html";
    } else {
        window.location.href = year + ".html";
    }
}

document.getElementById('yearSelect').addEventListener('change', function () {
    filterYear(this.value);
});

document.getElementById('locationSelect').addEventListener('change', function () {
    filterLocation(this.value);
});