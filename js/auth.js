function requireLogin() {
  const user = localStorage.getItem('sanskritUser');
  if (!user) {
    window.location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem('sanskritUser');
  window.location.href = 'index.html';
}

function getUser() {
  return JSON.parse(localStorage.getItem('sanskritUser'));
}
