'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome:"Daian",
    email:"daiane@gamil.com",
    celular:"994012140",
    cidade:"Cps"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setlocalStorage = (dbClient) => localStorage.setItem ("db_client", JSON.stringify(dbClient))
//Crud - create  read apdate e delite

//Crud - READ
const createClient = (client) =>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setlocalStorage(dbClient)   
}
 

//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)