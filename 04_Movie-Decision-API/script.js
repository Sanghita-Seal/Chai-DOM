const submitBtn= document.getElementById("search-btn");
const inputElement= document.getElementById("search-box")


const resultscontainer= document.getElementById("results-container")

async function fetchApiData( inputElement){
    //Validate input
    const inputVal = inputElement.value.trim(); // get fresh value every click

    console.log(inputVal);
    if( inputVal===""){
        alert("Search is empty");
        return;
    }

    const apiUrl=`https://www.omdbapi.com/?apikey=5404e692&s=${inputVal}`
    console.log(apiUrl);
    resultscontainer.textContent="Loading..."
    try {
        const response= await fetch(apiUrl);
        
        

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}` )
        }

        const data= await response.json();
        displayData(data);
    } catch (error) {
        console.log(error);
        resultscontainer.innerHTML="Movie could not be found"
        
    }

}
function displayData(data) {
    console.log(data);
    if(data.Response ==="False"){
        resultscontainer.innerHTML="Movie not found!"
    }
    resultscontainer.innerHTML="";
    data.Search.forEach(movie=>{
        const movieCard=`
                <div id="movie-card">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                    <button>View Details</button>
                </div>
        `
        resultscontainer.innerHTML+=movieCard
    })
}
submitBtn.addEventListener("click", () => fetchApiData(inputElement));