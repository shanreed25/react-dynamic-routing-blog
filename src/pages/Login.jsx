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
            <p className="text-5xl my-15">You must login</p>
            <button className={styles.loginBtn}>Log In</button>
       </>
    )
}