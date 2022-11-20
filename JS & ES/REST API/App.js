const http = new easyHTTP()

//GET POST

http.get('https://jsonplaceholder.typicode.com/posts', function (response) {
  console.log(response)
})
