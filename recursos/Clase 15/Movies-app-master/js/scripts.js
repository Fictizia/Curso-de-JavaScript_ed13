let query = 'hola';
let apikey = '699ba79b';
let results = null;


//query = document.getElementById('queryValue').nodeValue; 


function getMovies() {
	
	axios.get(`http://www.omdbapi.com/?s=${ query }&apikey=${ apikey }`)
	.then(response => {
		
		console.log(response);
		// No se comprueba si results falla
		results = response.data.Search;
		console.log(results);

		let otherResult = results.filter(elem => {
			 return (elem.Poster || elem.Year || elem.Title) !== 'N/A'
		} );

		console.log(otherResult);
        let title = otherResult[0].Title;
        let year = otherResult[0].Year;
        
        document.getElementById('title').innerHTML = title;
		document.getElementById('year').innerHTML = year;
        
	})
	.catch((error) => {
        // Error 😨
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}

