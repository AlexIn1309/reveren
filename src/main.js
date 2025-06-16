// Presentacion de imagenes de presentacion
document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.getElementById("img1");
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

    document.getElementById('img1').classList.add('oculto');
    document.getElementById('img2').classList.remove('oculto');
  }

  function logoutUser() {
    document.getElementById('userMenuLoggedOut').style.display = 'flex';
    document.getElementById('userMenuLoggedIn').style.display = 'none';

    document.getElementById('img1').classList.remove('oculto');
    document.getElementById('img2').classList.add('oculto');
  }
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Shopping cart functionality
  document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".shopping_cart_link");
  const cartDropdown = document.getElementById("shoppingCartDropdown");

  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
    if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
      cartDropdown.style.display = "none";
    }
  });
});
