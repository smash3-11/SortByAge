const BASE_URL = "https://dummyjson.com/users"

let form = document.querySelector('form')
let age = document.querySelector('#age')
let name = document.querySelector('#name')
let btn = document.querySelector('.btn')

let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')

let users = []

fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        users = data.users
        reload(users)
        console.log(users)
        
    })


form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        id: Math.random(),
        firstName: name.value,
        age: age.value,
        image: "./img/master.png"
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        user[key] = value
    })

    users.push(user)
    reload(users)
    console.log(user);
    console.log(users);
}

function reload(params) {

    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''

    for (item of users) {

        let div = document.createElement('div')
        div.classList.add('item')

        let p_nm = document.createElement('p')
        p_nm.classList.add('nm')

        let sp_i = document.createElement('span')

        let p_age = document.createElement('p')
        p_age.classList.add('age')

        let sp_age = document.createElement('span')

        let img = document.createElement('img')


        p_nm.innerHTML = item.firstName
        sp_age.innerHTML = 'Age:'
        p_age.innerHTML = item.age
        img.src = item.image

        // if (!img.src && item.age >= 50) {
        //     img.src = "/img/puxliy.png";
        //   } else if (!img.src && item.age === 666) {
        //     img.src = "/img/black.jpg";
        //   } else if (!img.src && item.age >= 50) {
        //     img.src = "/img/56_robot-vector.png";
        //   } else if (!img.src && item.age <= 25) {
        //     img.src = "/img/50r.png";
        //   }

        if (item.age <= 25) {
            box1.append(div)
        } else if (item.age <= 50) {
            box2.append(div)
        } else if (item.age >= 50) {
            box3.append(div)
        }

        div.append(p_nm, p_age,)
        p_nm.append(sp_i)
        sp_i.append(img)
        p_age.prepend(sp_age)
    }
    age.value = ''
    name.value = ''
}