import c from './GlobalSearch.module.css';
import searchIcon from '../../assets/icon_search.png';
import { useState, useEffect } from "react";

function GlobalSearch() {
    const [placeholder, setPlaceholder] = useState("Enter your name");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 500) {
          setPlaceholder("Search");
        } else {
          setPlaceholder("Search across Company resources");
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <div className={c.searchContainer}>
            <input placeholder={placeholder}/>
            <img src={searchIcon} alt='Search icon'/>
        </div>
    )
}

export default GlobalSearch;