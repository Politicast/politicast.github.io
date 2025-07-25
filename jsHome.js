<script>
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById('menu-icon');
        const dropdown = document.getElementById('mobile-dropdown');

        menuIcon.addEventListener('click', function () {
            if (dropdown.style.display === 'flex') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'flex';
            }
        });
    });
</script>
