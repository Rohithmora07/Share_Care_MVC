// appserver/public/js/script.js
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`a[onclick="showPage('${pageId}')"]`).classList.add('active');

  if (pageId === 'login') {
    switchTab('login');
  }
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}

function switchTab(tab) {
  document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
  document.querySelectorAll('.auth-tab').forEach(tabBtn => tabBtn.classList.remove('active'));
  document.getElementById(tab + 'Form').classList.add('active');
  document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
}

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

// Initial setup
document.addEventToShow('DOMContentLoaded', () => {
  showPage('home');
});
// ========================= DONATE POPUP =========================
function openDonatePopup() {
  document.getElementById("donatePopup").classList.add("active");
}
function closeDonatePopup() {
  document.getElementById("donatePopup").classList.remove("active");
}

// ========================= VOLUNTEER POPUP =========================
function openVolunteerPopup() {
  document.getElementById("volunteerPopup").classList.add("active");
}
function closeVolunteerPopup() {
  document.getElementById("volunteerPopup").classList.remove("active");
}
