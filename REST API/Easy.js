function easyHTTP() {
  this.http = new XMLHttpRequest()
}

//Make an HTTP GET REQUEST
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true)

  let self = this

  this.http.onload = function () {
    if (self.http.status == 200) {
      callback(null, self.http.responseText)
    }
  }
  this.http.send()
}

//MAKE an HTTP POST REQUEST
