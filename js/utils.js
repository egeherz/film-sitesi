export function getUsers(){
  return JSON.parse(localStorage.getItem('users')) || [];
}

export function saveUsers(users){
  localStorage.setItem('users', JSON.stringify(users));
}

export function getFilms(){
  return JSON.parse(localStorage.getItem('films')) || [];
}

export function saveFilms(films){
  localStorage.setItem('films', JSON.stringify(films));
}

export function getCurrentUser(){
  return JSON.parse(localStorage.getItem('currentUser'));
}

export function requireLogin(redirect = 'login.html'){
  if(!getCurrentUser()){
    window.location.href = redirect;
  }
}

export function isAdmin(){
  const user = getCurrentUser();
  return user && user.role === 'admin';
}
