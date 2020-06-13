import { authHeader, API_POST_SIGN_UP_PATH, API_POST_LOGIN_PATH, API_GET_USER_PATH, API_POST_HEADERS } from '../_helpers';
import _ from 'lodash';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  getUserLogin,
  update,
  delete: _delete,
};

const API_URL = process.env.API_URL;

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: API_POST_HEADERS,
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${API_URL}${API_POST_LOGIN_PATH}`, requestOptions)
    .then(handleResponse)
    .then((userToken) => {
      // login successful if there's a jwt token in the response
      if (userToken.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(userToken));
      }
      return userToken;
    })
    .then(getUserLogin);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: API_POST_HEADERS,
    body: JSON.stringify(user),
  };

  return fetch(`${API_URL}${API_POST_SIGN_UP_PATH}`, requestOptions).then(handleResponse);
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function getUserLogin() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${API_URL}${API_GET_USER_PATH}`, requestOptions).then(handleResponse, handleAuthUserResponse);
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${API_URL}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function handleAuthUserResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    const user = JSON.parse(localStorage.getItem('user'));
    _.assign(user, data);
    localStorage.setItem('user', user);
    return user;
  });
}
