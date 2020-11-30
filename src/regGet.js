export default function regGet () {
let reqGet = new XMLHttpRequest
reqGet.open('GET', 'http://localhost:3000/comment')
reqGet.setRequestHeader('Content-Type', 'application/json')
reqGet.onload = function (event) {
  if (this.status === 200) {
    console.log(this.responseText)
  }
}
reqGet.send() 
}
regGet()


