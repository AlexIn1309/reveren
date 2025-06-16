// Presentacion de imagenes de presentacion
document.addEventListener("DOMContentLoaded", function () {
  const img2 = document.getElementById("img2");
  setTimeout(() => {
    img2.classList.remove("oculto");
    setTimeout(() => {
      img2.classList.add("oculto");
    }, 2000);
  }, 3000);
});

  const userIcon = document.getElementById('userIcon');
  const userDropdown = document.getElementById('userDropdown');
  userIcon.addEventListener('click', () => {
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
  });

  const userLogged = document.getElementById('userLogged');
  const loggedDropdown = document.getElementById('loggedDropdown');
  userLogged.addEventListener('click', () => {
    loggedDropdown.style.display = loggedDropdown.style.display === 'block' ? 'none' : 'block';
  });



  function showLoginModal() {
    closeModal('registerModal');
    document.getElementById('loginModal').style.display = 'flex';
  }

  function showRegisterModal() {
    closeModal('loginModal');
    document.getElementById('registerModal').style.display = 'flex';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  function switchToRegister() {
    closeModal('loginModal');
    showRegisterModal();
  }

  function switchToLogin() {
    closeModal('registerModal');
    showLoginModal();
  }

  function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === 'password' ? 'text' : 'password';
  }

    function loginUser() {
    closeModal('loginModal');

    document.getElementById('userMenuLoggedOut').style.display = 'none';
    document.getElementById('userMenuLoggedIn').style.display = 'flex';
  }

  function logoutUser() {
    document.getElementById('userMenuLoggedOut').style.display = 'flex';
    document.getElementById('userMenuLoggedIn').style.display = 'none';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }


  document.addEventListener('DOMContentLoaded', () => {
    const filterToggleButton = document.getElementById('filter-toggle-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    function openMenu() {
        offCanvasMenu.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open'); // Bloquea el scroll del body
    }

    function closeMenu() {
        offCanvasMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open'); // Permite el scroll del body
    }

    // Abre el menú al hacer clic en el botón de filtros
    filterToggleButton.addEventListener('click', openMenu);

    // Cierra el menú al hacer clic en el botón de cerrar (dentro del menú)
    closeMenuButton.addEventListener('click', closeMenu);

    // Cierra el menú al hacer clic en el overlay
    overlay.addEventListener('click', closeMenu);

    // Opcional: Cierra el menú si se presiona la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && offCanvasMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});