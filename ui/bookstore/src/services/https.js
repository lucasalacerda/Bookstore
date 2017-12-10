import axios from 'axios';

const BASE_URL = 'https://localhost:3000/api/';


function getUsers(){
    const url = `${BASE_URL}`;
}

const client = axios.create({
    baseURL: 'https://localhost/api/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export {
    getUsers, 
    getBooks,
    getGenres,
    getPurchases
};