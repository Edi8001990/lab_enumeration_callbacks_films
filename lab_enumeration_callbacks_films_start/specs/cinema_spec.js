const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];

    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk' , 'Black Panther', 'T2 Trainspotting'];
    const actual = cinema.filmsByTitle();
    assert.deepStrictEqual(actual, expected);
  });



  it('should be able to find a film by title', function(){
    const actual = cinema.findByTitle('Moonlight');
    const expected = [moonlight];
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to filter films by genre', function () {
    const actual = cinema.findByGenre("drama");
    const expected = [moonlight, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are some films from a particular year',function () {
    const actual = cinema.areThereFilmsFromThisYear(2016)
    const expected = "yes!";
    assert.StrictEqual(actual, expected);
  });


  it('should be able to check whether there are no films from a particular year');
  it('should be able to check whether all films are over a particular length');
  it('should be able to calculate total running time of all films');

});
