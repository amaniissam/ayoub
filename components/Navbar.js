"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },

      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState("home");
  const activeRef = useRef("home");
  const [open, setOpen] = useState(false);

  function setActive(id) {
    if (!id) return;
    if (activeRef.current === id) return;

    activeRef.current = id;
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setOpen(false); // close mobile menu
  }

  useEffect(() => {
    const getTops = () =>
      items
        .map((it) => {
          const el = document.getElementById(it.id);
          if (!el) return null;
          return {
            id: it.id,
            top: el.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter(Boolean);

    let sectionTops = getTops();

    const onResize = () => {
      sectionTops = getTops();
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const offset = 140;

      const pos = scrollY + offset;

      let current = "home";
      for (const s of sectionTops) {
        if (s.top <= pos) current = s.id;
      }

      // bottom fix (contact stays active at end)
      const nearBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 10;

      if (nearBottom) current = "contact";

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items]);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles["logo-icon"]}>AY</span>
          <span className={styles["logo-text"]}>AYOUB EDITS</span>
        </div>

        {/* Hamburger */}
        <div
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul
          className={`${styles["nav-links"]} ${
            open ? styles.showMenu : ""
          }`}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className={
                activeId === item.id ? styles.active : ""
              }
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}