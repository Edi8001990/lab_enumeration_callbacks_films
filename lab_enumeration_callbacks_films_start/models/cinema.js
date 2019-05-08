const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByTitle = function () {
      titles = [];
      for (const film of this.films){
       titles.push(film.title)
     }
     return titles
    };


Cinema.prototype.findByTitle = function(title){
  const foundFilms = [];

  for (const film of this.films){
    if (film.title === title){
      foundFilms.push(film);
    }
  }
  return foundFilms;
};

Cinema.prototype.findByGenre = function(genre){
  const foundGenre = [];

  for (const film of this.films){
    if (film.genre === genre){
      foundGenre.push(film);
    }
  }
  return foundGenre;
};

Cinema.prototype.areThereFilmsFromThisYear = function (year) {
  
};


module.exports = Cinema;
