async function sortByGenre(event) {
    event.preventDefault();

    let searchGenreID;
    const searchGenre = document.querySelector('#searchGenre').value.trim();

    switch(searchGenre) {
        case "Sci-Fi/Fantasy":
            searchGenreID = 1;
            break;
        case "Romance":
            searchGenreID = 2;
            break;
        case "Horror":
            searchGenreID = 3;
            break;
        case "History":
            searchGenreID = 4;
            break;
        case "Biography":
            searchGenreID = 5;
            break;
        case "Classics":
            searchGenreID = 6;
            break;
        case "Educational":
            searchGenreID = 7;
            break;
        case "Children's":
            searchGenreID = 8;
            break;
        case "Comedy":
            searchGenreID = 9;
            break;
        case "Novel":
            searchGenreID = 10;
            break;
    }

    document.location.replace(`/inventory/bygenre/${searchGenreID}`)
}

document.querySelector('#searchByGenre').addEventListener('click', sortByGenre);