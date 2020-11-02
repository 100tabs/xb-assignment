import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://swapi.dev'
export async function loginUser(dispatch, payload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const res = await axios.get(BASE_URL + '/api/people?search=' + payload.username)

    const peoples = res.data.results
    const person = peoples.filter(people => (
      people.name === payload.username && people.birth_year === payload.password
    ))
    if (person) {
      const user = {
        username: person[0].name
      }
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
      localStorage.setItem('isLoggedIn', true);
      return user
    }
    dispatch({ type: 'LOGIN_ERROR', error: "Invalid username or password" });
    return;

  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('isLoggedIn');
}