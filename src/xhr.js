export default function user () {
//    let objUsers = {
//   name: 'Anna',
//   age: 23,
// }
// let reqPost = new XMLHttpRequest()
// reqPost.open("POST", 'http://localhost:3000/comment')

// reqPost.setRequestHeader('Content-Type', 'application/json')
// reqPost.onload = function (event) {
//   if (this.status === 200){
//     console.log(this.responseText)
//   }
// }
// reqPost.send(JSON.stringify(objUsers))
/////////////////////////////////////////////////////////////

// let reqDel = new XMLHttpRequest
// reqDel.open('DELETE', 'http://localhost:3000/comment'+'/17', true)
// reqDel.setRequestHeader('Content-Type', 'application/json')
// reqDel.onload = function (event) {
//   if (this.status === 200) {
//     console.log(this.responseText)
//   }
// }
//   reqDel.send() 

  /////////////GET/////////////////

  let reqGet = new XMLHttpRequest
  reqGet.open('GET', 'http://localhost:3000/comment')
  reqGet.setRequestHeader('Content-Type', 'application/json')
  reqGet.onload = function (event) {
    if (this.status === 200) {
      console.log(this.responseText)
    }
  }
  reqGet.send() 
  console.log('this.xhr')
}
user()



