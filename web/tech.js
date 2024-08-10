// nav start
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function searchGoogle() {
    var searchTerm = document.getElementById('searchInput').value;
    window.open('https://www.google.com/search?q=' + searchTerm, '_blank');
}
//nav end