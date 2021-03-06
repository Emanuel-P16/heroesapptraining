import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


export const LoginScreen = () => {
    const navigate = useNavigate()

    const{login} = useContext(AuthContext);
    const handleLogin = () => {

        login('Emanuel Palazón')

        navigate('/', {
            replace: true
        });
    }

    return(
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={handleLogin}
                >
                Login
            </button>
        </div>
    )
}