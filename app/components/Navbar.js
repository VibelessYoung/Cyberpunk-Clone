"use client";
import {Menu} from "lucide-react";

export default function Navbar(){
 return <header className="nav-shell">
   <a href="#top" className="nav-logo" aria-label="Cyberpunk">Cyberpunk</a>
   <nav className="nav-bar">
    <a className="nav-item" href="#games">GAMES⌄</a>
    <a className="nav-item" href="#shows">SHOWS⌄</a>
    <a className="nav-item" href="#news">NEWS</a>
    <a className="nav-item" href="#community">COMMUNITY⌄</a>
    <a className="nav-item" href="#more">MORE⌄</a>
    <a className="nav-item" href="#">EN⌄</a>
    <a className="nav-buy" href="#buy">BUY NOW</a>
   </nav>
   <button className="md:hidden bg-black text-white p-2" aria-label="Open menu"><Menu size={22}/></button>
 </header>
}
