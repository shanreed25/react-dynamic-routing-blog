import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { styles } from "../styles/styles";
import { pageFade } from "../styles/animation";

export default function Blog() {
  //get the current url for the pathname to know when the url changes
  const location = useLocation();
  /* 
    useOutlet() and<Outlet /> render the matching child route
    but useOutlet gives the page as a value 
    so it can hold on to the old page while it fades out
    */
  const outlet = useOutlet();

  return (
    <>
      <NavBar />
      <main className={styles.content}>
        {/* 
                <AnimatePresence> is uses so that the
                old page will not get removed immediately
                <AnimatePresence> will watch the pages 
                when a page is removed, it keeps the page
                on screen long enough for the exit animation 
                to finish then it removes it
                mode="wait" is what makes the old page finish 
                fading out before the new page starts fading in
              */}
        <AnimatePresence mode="wait">
            {/* motion.div is just a div that can animate
                it also accepts animation props which a 
                normal div cannot */}
          <motion.div
            key={location.pathname}
            {...pageFade}
            className="flex flex-col gap-20 items-center"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>

        {/* <Outlet />gets swapped for the child route that matches the url */}
      </main>
    </>
  );
}
