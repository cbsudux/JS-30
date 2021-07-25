const endpointUSCitiesAndStates = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpointAllCitiesAndCountry = 'https://countriesnow.space/api/v0.1/countries/population/cities'

// const cities = []
// fetch(endpointUSCitiesAndStates)
//     .then(res => console.log(res))
// .then(data => cities.push(...data))


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

let cities = []
fetch("https://countriesnow.space/api/v0.1/countries/population/cities", requestOptions)
    .then(response => response.json())
    .then(result => cities = result['data'])
    .catch(error => console.log('error', error));


function findMatches(wordToMatch, cities) {
    return cities.filter(place => place.city.toLowerCase().startsWith(wordToMatch.toLowerCase()))
}

const inputCityForm = document.querySelector('.city-search-bar')
const suggestionsList = document.querySelector('.suggestions')

inputCityForm.addEventListener('input', () => {
    suggestionsList.innerHTML = ''

    searchTerm = inputCityForm.value
    console.log(searchTerm)
    cityMatches = searchTerm == '' ? [] : findMatches(searchTerm, cities)

    console.log(cityMatches)
    for (let i in cityMatches) {
        const city = cityMatches[i].city
        const state = cityMatches[i].country
        const population = cityMatches[i].populationCounts[0].value.split('.')[0]

        // For US
        // const city = cityMatches[i].city
        // const state = cityMatches[i].state
        // const population = cityMatches[i].population

        const listElement = document.createElement('LI')

        const listElementHTML = `<span class='list-city-item'>${city},${state}</span>
                         <span class='list-population-item'>${population}</span>`

        listElement.innerHTML = listElementHTML

        suggestionsList.appendChild(listElement)
    }

})