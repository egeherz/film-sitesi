import { getUsers, saveUsers, getCurrentUser, requireLogin, isAdmin } from './utils.js';

// Eğer kullanıcı yoksa, admin oluştur
if(getUsers().length === 0){
  saveUsers([{ username: 'admin', password: '1234', role: 'admin' }]);
}

export function login(){
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = user.role === 'admin' ? 'admin.html' : 'index.html';
  } else {
    alert('Kullanıcı adı veya şifre yanlış!');
  }
}

export function register(){
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if(!username || !password){
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  const users = getUsers();
  if(users.find(u => u.username === username)){
    alert('Bu kullanıcı adı zaten alınmış!');
    return;
  }

  users.push({ username, password, role: 'user' });
  saveUsers(users);

  alert('Kayıt başarılı! Giriş yapabilirsiniz.');
  window.location.href = 'login.html';
}

export function logout(){
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}
