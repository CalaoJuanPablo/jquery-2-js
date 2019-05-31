const RAND_USER_URL = 'https://randomuser.me/api/'
const MOVIE_LIST_URL = 'https://yts.am/api/v2/list_movies.json'

$.ajax(RAND_USER_URL, {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function (err) {
    console.log(err)
  }
})

fetch(RAND_USER_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  });

// action
// horror
// animation
getMoviesOfGenre('action')
getMoviesOfGenre('horror')
getMoviesOfGenre('animation')

async function getMoviesOfGenre(genre) {
  const API_URL = `${MOVIE_LIST_URL}?genre=${genre}`

  const movieList = await fetchFromApi(API_URL)
  console.log(genre, movieList)
}

async function fetchFromApi(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}