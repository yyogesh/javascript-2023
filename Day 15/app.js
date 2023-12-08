function toggleDropdown() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';

    dropdownButton.setAttribute('aria-expanded', !isExpanded);

    dropdownContent.style.display = isExpanded ? 'none' : 'block';

    if (!isExpanded) {
        // Focus on the first link when the dropdown is expanded
        const firstLink = dropdownContent.querySelector('a');
        firstLink && firstLink.focus();
    }
}