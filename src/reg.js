export default function regUser () {
    const [login, name, age, password, avatar ,button]
      = ['login', 'name', 'age', 'password', 'avatar','button']
        .map(item => document.getElementById(item))  
         
        button.disabled = true
        login.onchange = function (event) {
              event.target.style.color = 'green'
              name.disabled = false
              age.disabled = true
              password.disabled = true
              button.disabled = true
            }

        name.onchange = function (event) {
            if (event.target.value.length < 2){
                alert('Malo simvolov')
            age.disabled = true
            password.disabled = true
            button.disabled = true
            } else{
            event.target.style.color = 'green'
            age.disabled = false
            password.disabled = true
            button.disabled = true
            }
        }

        age.onchange = function (event) {
            if (event.target.value <= 0) {
                alert('Number plus')
            } else {
            event.target.style.color = 'green'
            password.disabled = false
            button.disabled = true
            }
        }

        password.onchange = function (event) {
            if (event.target.value.length < 6) {
                alert('Malo simvolov')
                button.disabled = true
            } 
            else{
                    //const passHash = Sha256.hash(event.target.value)
                button.disabled = false
            }         
        }
        avatar.onchange = function (event) {
            const file = event.target.files[0]
            if (file.type.indexOf('image') === 0) {
                const reader = new FileReader 
                reader.onload = (event) => img.src = event.target.result
                reader.readAsDataURL(file) 
            }
        }

    button.onclick = function (event) {
        fetch(`http://localhost:3000/comment`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                login: login.value,
                name: name.value,
                age: age.value,
                avatar: img.src,
                password: password.value
            })
        })
        .then(response => response.json())
           .then( response => console.log ( response ) ) 
           
           button.onclick = document.getElementById('button').addEventListener('click', function(e) {
            document.location.href = "index.html"
        })
    }
}

regUser()