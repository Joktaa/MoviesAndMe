const API_TOKEN = "c8561261ae51a5ceef2a31436473c242"

export function getFilmsFromApiSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}