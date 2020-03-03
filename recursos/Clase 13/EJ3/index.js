function changeLogo() {
    let element = document.querySelector('img');

    let originalLogo = 'https://lh6.googleusercontent.com/-mwjksp6bc3c/Uedd3ROtyZI/AAAAAAAAAJM/9jQ_qfCEshQ/s1600/NEW+GOOGLE+LOGO.jpg';
    let newLogo = 'https://i.pinimg.com/originals/d7/c1/d0/d7c1d07b8d763870d4b59c10603ed092.png';
    element.src = newLogo;

    //element.src = element.src === newLogo ? originalLogo : newLogo;
}