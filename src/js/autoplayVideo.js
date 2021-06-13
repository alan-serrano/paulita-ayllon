document.addEventListener('DOMContentLoaded', function autoPlay() {
    const video = document.getElementById('cumpleaños-video');
    const cakeWrapper = document.getElementsByClassName('cake-wrapper');

    setTimeout(() => {
        $(cakeWrapper).transition('fade');
    }, 4000);
    
    setTimeout(() => {
        $(video).transition('fade');
    }, 4300);

    setTimeout(() => {
        video.play();
    }, 5000);
});