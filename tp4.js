/*TP 4
Crear un array de películas
Crear una función que agregue objetos “película” al array “películas”:
El objeto película deberá tener ID, titulo, descripción, año, duración, actores, director.
Deberá tener métodos para editar todas sus propiedades  menos su ID, y para los actores tendrá que ir agregando uno a uno.
*/

var movies = [];
//var actors =[];

var movie = {
    id: 1,
    title: 'I Am Sam',
    description: 'Sam Dawson has the mental capacity of a 7-year-old. He works at a Starbucks and is obsessed with the Beatles.',
    year: 2001,
    duration: 120,
    actors: [],
    director: 'Jessie Nelson',

    setTitle:function(title){
      this.title=title;
    },
    setDescription:function(description){
      this.description=description;
    },
    setYear:function(year){
      this.year=year;
    },
    setDuration:function(duration){
      this.duration=duration;
    },
    addActor:function(actor){
      this.actors.push(actor);
    },
    setDirector:function(director){
      this.director=director;
    }

  }


function addMovie(movie){

  movies.push(movie);
}

addMovie(movie);
movie.addActor('Dakota');
movie.addActor('Sam');
console.log(movie);
