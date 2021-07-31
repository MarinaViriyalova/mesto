 export default class Api {
     constructor(config) {
         this._baseUrl = config.baseUrl;
         this._headers = config.headers
     }

     getInitialCards() {
         return fetch(`${this._baseUrl}/cards`, {
                 method: 'GET',
                 headers: this._headers
             })
             .then(res => this._handleResponse(res))
     }

     _handleResponse(res) {
         if (res.ok) { return res.json() }
         return Promise.reject(`Ошибка: ${res.status}`);
     }

     getUserInfo() {
         return fetch(`${this._baseUrl}/users/me`, {
                 method: 'GET',
                 headers: this._headers
             })
             .then(res => this._handleResponse(res))
     }

     editUserInfo(data) {
         return fetch(`${this._baseUrl}/users/me`, {
                 method: 'PATCH',
                 headers: this._headers,
                 body: JSON.stringify({
                     name: data.userName,
                     about: data.userJob
                 })
             })
             .then(res => this._handleResponse(res))
     }

     editUserAvatar(data) {
         return fetch(`${this._baseUrl}/users/me/avatar`, {
                 method: 'PATCH',
                 headers: this._headers,
                 body: JSON.stringify({
                     avatar: data.avatarLink,
                 })
             })
             .then(res => this._handleResponse(res))
     }

     postCard(data) {
         return fetch(`${this._baseUrl}/cards`, {
                 method: 'POST',
                 headers: this._headers,
                 body: JSON.stringify({
                     name: data.picName,
                     link: data.picLink
                 })
             })
             .then(res => this._handleResponse(res))
     }

     deleteCard(cardId) {
         return fetch(`${this._baseUrl}/cards/${cardId}`, {
                 method: 'DELETE',
                 headers: this._headers
             })
             .then(res => this._handleResponse(res))
     }

     makeLike(cardId) {
         return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                 method: 'PUT',
                 headers: this._headers
             })
             .then(res => this._handleResponse(res))
     }

     makeUnlike(cardId) {
         return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                 method: 'DELETE',
                 headers: this._headers
             })
             .then(res => this._handleResponse(res))
     }


 }