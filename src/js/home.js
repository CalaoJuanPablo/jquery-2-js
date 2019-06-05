const RAND_USER_URL = 'https://randomuser.me/api/'
const MOVIE_LIST_URL = 'https://yts.am/api/v2/list_movies.json'

// Elements
const $home = document.getElementById('home')
const $modal = document.getElementById('modal')
const $modalOverlay = document.getElementById('overlay')
const $hideModal = document.getElementById('hide-modal')

const $modalTitle = $modal.querySelector('h1')
const $modalImage = $modal.querySelector('img')

const $actionContainer = document.getElementById('action')
const $dramaContainer = document.getElementById('drama')
const $animationContainer = document.getElementById('animation')

const $featuringContainer = document.getElementById('featuring')

const $form = document.getElementById('form')

const videoItemTemplate = (src, title) => `
  <div class="primaryPlaylistItem">
    <div class="primaryPlaylitsItem-image">
      <img src="${src}" alt="${title}" srcset="">
    </div>
    <h4 class="primaryPlaylistItem-title">
      ${title}
    </h4>
  </div>
`

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

// $.ajax(RAND_USER_URL, {
//   method: 'GET',
//   success: function(data) {
//     console.log(data)
//   },
//   error: function (err) {
//     console.log(err)
//   }
// })

// fetch(RAND_USER_URL)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   });

// getMoviesOfGenre('action')
// getMoviesOfGenre('horror')
// getMoviesOfGenre('animation')