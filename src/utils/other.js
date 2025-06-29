import { jwtDecode } from "jwt-decode";


export function getToken() {
    const token = localStorage.getItem('token')
    return jwtDecode(token)
}

export function saveToken(token) {
    localStorage.setItem('token', token)
}

export function removeToken() {
    localStorage.removeItem('token')
}