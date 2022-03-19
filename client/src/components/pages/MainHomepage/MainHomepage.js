
import React, { useContext } from 'react'
import { Context } from '../../../context/Context'

export default function MainHomepage() {
  const [value, setValue] = React.useState([null, null]);
  const {user, dispatch} = useContext(Context)
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button></div>
  )
}
