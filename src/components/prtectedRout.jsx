import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const [user, setUser] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = localStorage.getItem("access_token");
    if (checkToken) {
      setUser(true)
      return
    }
    navigate("/")
  },[])


  return (
    <>
      {user && user ? component : <span className="loading loading-ring loading-lg"></span> }
    </>
  )
}

export default ProtectedRoute