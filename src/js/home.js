const URL = 'https://randomuser.me/api/'

$.ajax(URL, {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function (err) {
    console.log(err)
  }
})

fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })