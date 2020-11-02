import React from 'react'
import { Link } from 'react-router-dom';
import { logout, useAuthDispatch, useAuthState } from '../store'

const Home = (props) => {
  const dispatch = useAuthDispatch();
  const { user } = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push('/login')
  }
  return (
    <div className="border-1 card mx-auto mt-4 p-4 shadow-sm w-50 w-fixed-25 rounded" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title my-3 text-center">Welcome {user.username}</h5>
        <div className="d-flex justify-content-between">
          <Link to="/search" className="card-link btn btn-outline-info">Search Planets</Link>
          <button className="card-link btn btn-outline-info" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Home
