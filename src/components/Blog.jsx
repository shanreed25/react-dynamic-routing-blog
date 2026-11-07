import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { styles } from "../styles/styles";

export default function Blog(){

    return (
        <>
        <NavBar />
        <main className={styles.app} >
            <Outlet />{/* gets swapped for the child route that matches the url */}
        </main>
        </>
    )
}