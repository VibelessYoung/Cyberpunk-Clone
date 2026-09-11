"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = {
    games: ["Cyberpunk 2077", "Cyberpunk 2", "Phantom Liberty", "Games"],
    shows: ["Cyberpunk: Edgerunners", "Upcoming Shows", "Episodes"],
    community: ["Community", "Forums", "Discord", "Fan Art"],
    more: ["About Us", "Careers", "Support", "Contact"],
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="nav-shell relative z-50">
      {/* LOGO */}
      <a href="/" className="shrink-0">
        <img
          src="/assets/logo.png"
          className="w-40 sm:w-48 md:w-52 lg:w-60"
          alt="Logo"
        />
      </a>

      {/* DESKTOP NAVBAR */}
      <nav className="nav-bar hidden md:flex items-center">
        {/* GAMES */}
        <div className="relative group">
          <button type="button" className="nav-item flex items-center gap-1">
            GAMES
            <ChevronDown size={16} />
          </button>

          <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
            <div className="w-56 overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              {dropdowns.games.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SHOWS */}
        <div className="relative group">
          <button type="button" className="nav-item flex items-center gap-1">
            SHOWS
            <ChevronDown size={16} />
          </button>

          <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
            <div className="w-60 overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              {dropdowns.shows.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* NEWS */}
        <a className="nav-item" href="#news">
          NEWS
        </a>

        {/* COMMUNITY */}
        <div className="relative group">
          <button type="button" className="nav-item flex items-center gap-1">
            COMMUNITY
            <ChevronDown size={16} />
          </button>

          <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
            <div className="w-52 overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              {dropdowns.community.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MORE */}
        <div className="relative group">
          <button type="button" className="nav-item flex items-center gap-1">
            MORE
            <ChevronDown size={16} />
          </button>

          <div className="absolute right-0 top-full hidden pt-4 group-hover:block">
            <div className="w-48 overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              {dropdowns.more.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="relative group">
          <button type="button" className="nav-item flex items-center gap-1">
            EN
            <ChevronDown size={16} />
          </button>

          <div className="absolute right-0 top-full hidden pt-4 group-hover:block">
            <div className="w-32 overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              <a
                href="#"
                className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 transition-colors"
              >
                ENGLISH
              </a>

              <a
                href="#"
                className="block px-5 py-3 text-white whitespace-nowrap hover:bg-white/10 transition-colors"
              >
                فارسی
              </a>
            </div>
          </div>
        </div>

        {/* BUY NOW */}
        <a className="nav-buy" href="#buy">
          BUY NOW
        </a>
      </nav>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setOpenDropdown(null);
        }}
        className="
          md:hidden
          bg-black/50
          backdrop-blur-xl
          text-white
          p-2
          border border-white/10
          hover:bg-white/10
          transition-all duration-300
        "
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <div className="relative w-6 h-6">
          <Menu
            size={24}
            className={`
              absolute inset-0
              transition-all duration-300
              ${
                mobileOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }
            `}
          />

          <X
            size={24}
            className={`
              absolute inset-0
              transition-all duration-300
              ${
                mobileOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }
            `}
          />
        </div>
      </button>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-full
          md:hidden

          bg-black/65
          backdrop-blur-2xl

          border-t
          border-white/10

          shadow-[0_20px_60px_rgba(0,0,0,0.5)]

          overflow-hidden

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            mobileOpen
              ? "visible opacity-100 translate-y-0 max-h-[1000px]"
              : "invisible opacity-0 -translate-y-4 max-h-0 pointer-events-none"
          }
        `}
      >
        <div
          className={`
            flex
            flex-col
            p-4

            transition-all
            duration-500
            ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
        >
          {/* GAMES */}
          <div>
            <button
              onClick={() => toggleDropdown("games")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-white
                py-4
                border-b
                border-white/10
              "
            >
              <span>GAMES</span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${openDropdown === "games" ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openDropdown === "games"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-4 py-2">
                {dropdowns.games.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMobileMenu}
                    className="
                      block
                      text-white/60
                      hover:text-white
                      hover:translate-x-1
                      py-3
                      transition-all
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SHOWS */}
          <div>
            <button
              onClick={() => toggleDropdown("shows")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-white
                py-4
                border-b
                border-white/10
              "
            >
              <span>SHOWS</span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${openDropdown === "shows" ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openDropdown === "shows"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-4 py-2">
                {dropdowns.shows.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMobileMenu}
                    className="
                      block
                      text-white/60
                      hover:text-white
                      hover:translate-x-1
                      py-3
                      transition-all
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NEWS */}
          <a
            href="#news"
            onClick={closeMobileMenu}
            className="
              text-white
              py-4
              border-b
              border-white/10
              hover:text-white/70
              transition-colors
            "
          >
            NEWS
          </a>

          {/* COMMUNITY */}
          <div>
            <button
              onClick={() => toggleDropdown("community")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-white
                py-4
                border-b
                border-white/10
              "
            >
              <span>COMMUNITY</span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${openDropdown === "community" ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openDropdown === "community"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-4 py-2">
                {dropdowns.community.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMobileMenu}
                    className="
                      block
                      text-white/60
                      hover:text-white
                      hover:translate-x-1
                      py-3
                      transition-all
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* MORE */}
          <div>
            <button
              onClick={() => toggleDropdown("more")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-white
                py-4
                border-b
                border-white/10
              "
            >
              <span>MORE</span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${openDropdown === "more" ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openDropdown === "more"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-4 py-2">
                {dropdowns.more.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMobileMenu}
                    className="
                      block
                      text-white/60
                      hover:text-white
                      hover:translate-x-1
                      py-3
                      transition-all
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LANGUAGE */}
          <div>
            <button
              onClick={() => toggleDropdown("language")}
              className="
                w-full
                flex
                items-center
                justify-between
                text-white
                py-4
                border-b
                border-white/10
              "
            >
              <span>EN</span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform
                  duration-300
                  ${openDropdown === "language" ? "rotate-180" : "rotate-0"}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openDropdown === "language"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="pl-4 py-2">
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="
                    block
                    text-white/60
                    hover:text-white
                    hover:translate-x-1
                    py-3
                    transition-all
                  "
                >
                  ENGLISH
                </a>

                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="
                    block
                    text-white/60
                    hover:text-white
                    hover:translate-x-1
                    py-3
                    transition-all
                  "
                >
                  فارسی
                </a>
              </div>
            </div>
          </div>

          {/* BUY NOW */}
          <a
            href="#buy"
            onClick={closeMobileMenu}
            className="
              mt-4
              bg-white
              text-black
              text-center
              py-4
              font-bold

              hover:bg-white/80

              transition-all
              duration-300
            "
          >
            BUY NOW
          </a>
        </div>
      </div>
    </header>
  );
}
