import React from 'react'
import { useNavigate } from "react-router-dom"

function PageNotFound() {

  const navigate = useNavigate()
  return (
    <div>
      <h2>404 Page Not Found</h2>

      <button onClick={() => {
        navigate("/login")
      }} style={{ width: '200px', color: 'red'}}></button>
      </div>

  )
}


export default PageNotFound