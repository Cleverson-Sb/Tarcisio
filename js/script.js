function menuShow(){
    let menuMobile = document.querySelector('.mobilimenu');
    if (menuMobile.classList.contains('open') ){
        (menuMobile.classList.remove('open'));
        document.querySelector('.icone').src = "css/img/menu_white_36dp.svg";
    } else {
        (menuMobile.classList.add('open'))
        document.querySelector('.icone').src = "css/img/close_white_36dp.svg";
    }
}