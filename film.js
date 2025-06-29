import { getFilms } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const filmList = document.getElementById('filmList');
  if(!filmList) return;

  const films = getFilms();
  filmList.innerHTML = films.map((film, idx) => `
    <div class="film" onclick="viewFilm(${idx})" tabindex="0" role="button" aria-pressed="false" onkeydown="if(event.key==='Enter'){viewFilm(${idx})}">
      <img src="${film.image}" alt="${film.title} görseli" />
      <div class="film-body">
        <h3>${film.title}</h3>
      </div>
    </div>
  `).join('');
});

window.viewFilm = function(index){
  location.href = `film.html?i=${index}`;
}
