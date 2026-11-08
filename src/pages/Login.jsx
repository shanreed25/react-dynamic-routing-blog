import useAuth from "../context/AuthContext"
import { styles } from "../styles/styles"

export default function Login(){
    const {isAuthenticated, login} = useAuth()

    if (isAuthenticated){
        return(
            <p>You are logged In</p>
        )
    }
    return (
       <>
            <p className="text-5xl my-15">Click the Log In Button to Log In</p>
            <button className={styles.loginBtn} onClick={() => login()}>Log In</button>
       </>
    )
}