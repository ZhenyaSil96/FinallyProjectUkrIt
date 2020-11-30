export default function entryGet() {
  const [login, password, buttton1]
  = ['loginEntry', 'passwordEntry','buttonEntry']
    .map(item => document.getElementById(item)) 
  

  let request = new XMLHttpRequest
  request.open("GET", 'http://localhost:3000/comment')
  request.onload = function (event) {
    if (this.readyState === 4) {
      if (this.status === 200) {
        let respon = JSON.parse(this.responseText)
        console.log(respon)
        buttton1.onclick = function (event) {
          let res = respon.filter(x => 
            x.password === password.value & x.login === login.value 
          )
          console.log(res)
          
          if (res.length === 0){
            alert('Зарегистрируйся СУКА!')
          }else{
            
            document.getElementById('buttonEntry').addEventListener('click', function(e) {
                document.location.href = "index.html";
            })
            
          }
        }
      }
    }
  }
  request.send()
  console.log('app working entry')
}
entryGet()

