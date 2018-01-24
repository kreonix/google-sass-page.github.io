let menu = document.getElementById('menu-buttons');
window.addEventListener('click',()=>{
    let menuExtensions = document.getElementById('menu-button-extensions');
    if (menuExtensions.style.animationName == 'showMenu'){
        menuExtensions.style.animationName = 'hideMenu';
        menuExtensions.addEventListener('animationend',()=>{menuExtensions.style.opacity=0});
    }
})

let showModal = (event) =>{
    let menuExtensions = document.getElementById('menu-button-extensions');
    if (menuExtensions.style.animationName == 'showMenu'){
        menuExtensions.style.animationName = 'hideMenu';
        menuExtensions.addEventListener('animationend',()=>{menuExtensions.style.opacity=0});
    }
    else{
        menuExtensions.style.animationName = 'showMenu';
        menuExtensions.addEventListener('animationend',()=>{menuExtensions.style.opacity=1});
    }
    event.stopPropagation()
}
menu.addEventListener('click',showModal);