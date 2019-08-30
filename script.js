var movies = [
    {
        id: 1,
        title: 'Batman: Mroczny rycerz',
        desc: 'Film o superbohaterze',
        picture: 'posters/bat.jpg'
    },
    {
        id: 2,
        title: 'Bękarty wojny',
        desc: 'Film o II Wojnie Światowej',
        picture: 'posters/bekarty.jpg'
    },
    {
        id: 3,
        title: 'Breaking Bad',
        desc: 'Film o producencie metaamfetaminy',
        picture: 'posters/brbad.jpg'
    },
    {
        id: 4,
        title: 'The Walking Dead',
        desc: 'Film o zombie',
        picture: 'posters/zombie.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
                React.createElement('h2', {}, movie.title),
                React.createElement('h4', {}, movie.desc),
                React.createElement('img', {src: movie.picture})               
            );                                    
    });


var element = 
            React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            );

ReactDOM.render(element, document.getElementById('app'));

                 