function toggleMenu () {
   const BODY = document.querySelector('body');
   const MENU_BUTTON = document.getElementById('menuButton');
   const MENU = document.getElementById('menu');
   const MENU_CLOSED = document.getElementById('menuClosed');
   const SHARE_BUTTON = document.getElementById('shareButton');
   const SHARE = document.getElementById('share');

    MENU_BUTTON.addEventListener('click', () => {
        BODY.classList.add('no-scroll');
        MENU_BUTTON.classList.add('hidden');
        MENU_CLOSED.classList.remove('hidden');
        MENU.classList.remove('hidden')
        MENU.classList.add('show');
    })
   
    SHARE_BUTTON.addEventListener('click', () => {
       BODY.classList.add('no-scroll')
       SHARE_BUTTON.classList.add('hidden');
       MENU_BUTTON.classList.remove('show');
       MENU_BUTTON.classList.add('hidden');
       SHARE.classList.remove('hidden');
       SHARE.classList.add('show');
       MENU_CLOSED.classList.remove('hidden');
    })

    MENU_CLOSED.addEventListener('click', () => {
        BODY.classList.remove('no-scroll');
        MENU_BUTTON.classList.remove('hidden');
        SHARE_BUTTON.classList.remove('hidden');
        MENU_CLOSED.classList.add('hidden');
        MENU.classList.remove('show');
        MENU.classList.add('hidden');
        SHARE.classList.remove('show');
        SHARE.classList.add('hidden');
    })
}
toggleMenu();
