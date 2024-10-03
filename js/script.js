const light = document.querySelector('#light_icon');
const dark = document.querySelector('#dark_icon');

function toggleDarkMode() {
    dark.classList.toggle('switchDark');
    document.body.classList.toggle('dark');
    light.classList.toggle('switchLight');
}

light.addEventListener('click', toggleDarkMode);
dark.addEventListener('click', toggleDarkMode);