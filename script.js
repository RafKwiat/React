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




var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    },
});


var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('h4', {}, this.props.desc)
    },
});


var MoviePicture = React.createClass({
    propTypes: {
        picture: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('img', {src: this.props.picture, style: {width: 314, height: 445}})
    },
});


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (React.createElement('li', {key: this.props.movie.id}, 
                    React.createElement(MovieTitle, {title: this.props.movie.title}),
                    React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                    React.createElement(MoviePicture, {picture: this.props.movie.picture})               
            )
        )
    }
});

var MoviesList = React.createClass({
    propTypes: {
        moviesList: React.PropTypes.array.isRequired,
    },
    
    render: function() {
        return React.createElement('ul', {}, this.props.moviesList.map(function(movie) {
            
                return React.createElement(Movie, {key: movie.id, movie: movie} )
        }))
    }
});


var element = React.createElement(MoviesList, {moviesList: movies} );

ReactDOM.render(element, document.getElementById('app'));


          