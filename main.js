const bar = document.querySelector('.battery-bar');
window.addEventListener('load', charging);

function charging() {
    let percentage = 100;
    setInterval(() => {
        bar.style.width = percentage + '%';
        percentage += 10;
        if (percentage === 80) charging();
    }, 1000);
}