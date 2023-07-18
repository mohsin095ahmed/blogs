import Link from "next/link";
import "@/styles/Home.module.css";


export default function Nav(){


    return(
        <>
          <nav className="nav">

             <span className="logo">
                BLOGS-APP
             </span>
              
              <ul className="list">
                 <li><Link href="/">Home</Link></li>
                 <li><Link href="/About">About us</Link></li>
                 <li><Link href="/Contact">Contact us</Link></li>
                 <li><Link href="/Blogs">Blogs</Link></li>
              </ul>
              

               <span className="serch">
                <input type="serch" placeholder="Searc blogs"/> <button>search</button>
               </span>
          </nav>
        </>
    )
}