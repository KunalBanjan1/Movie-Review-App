'use strict';

const api_key = '15b368bd4cc59543c6a694719e81d793';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/*
    fetch data from a server using the url and passes the 
    result in JSON data to a 'callback' function along
    with an optional parameter if has 'optionalParam'.
*/

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };