const MOVIE_LIST_URL = 'https://yts.am/api/v2/list_movies.json'

// Playlist selectors
const $actionPlayList = document.querySelectorAll('.primaryPlaylist-list#action')
const $dramaPlayList = document.querySelectorAll('.primaryPlaylist-list#drama')
const $animationPlayList = document.querySelectorAll('.primaryPlaylist-list#animation')

// Modal selectors
const $modal = document.querySelector('#modal')
const $overlay = document.querySelector('#overlay')
const $hideModal = document.querySelector('#hide-modal')

const $modalTitle = $modal.querySelector('h1')
const $modalImage = $modal.querySelector('img')
const $modalDescription = $modal.querySelector('p')

getMoviesOfGenre('action')
getMoviesOfGenre('drama')
getMoviesOfGenre('animation')

async function getMoviesOfGenre(genre) {
  const API_URL = `${MOVIE_LIST_URL}?genre=${genre}`

  const movieList = await fetchFromApi(API_URL)
  return movieList
}

async function fetchFromApi(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}