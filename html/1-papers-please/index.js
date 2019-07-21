
function init() {
    const page = document.getElementById('page-container');
    const title = document.getElementById('title-container');
    page.addEventListener('animationend', (event) => {
        title.animate([
            { transform: 'translate3d(0, 0, 0)' },
            { transform: 'translate3d(0, 2.5vh, 0)' }
        ], {
            duration: 1125,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });
    });
}

window.onload = init;
