import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {getMovies,createMovie} from './apiService.js'
import {register,login} from './authService.js'
const doc = {
    loginButton = document.querySelector('#loginButton')
}
doc.loginButton.addEventListener('click',()=>{
    console.log('Belépés indul....')
    startLogin()
})
function startLogin(){
    const user = {
        name: 'mari',
        password: 'titok'
    }
    login(user)
}
function startCreateMovie(){
    const movie= {
        title:'zzz',
        director:'zzz',
        releaseYear:2026
    }


    //TODO: folytatás
}