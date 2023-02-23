import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { ClickAwayListener, MenuItem, MenuList, Paper } from "@mui/material";
import { client } from "../lib/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/*TO-do MAUI DRAwe-re csere*/
const simpleLinks = [
  { name: "Főoldal", link: "/" },
  { name: "Rólunk", link: "/rolunk" },
  { name: "Edzéstervezés", link: "/edzestervezes" },
  { name: "Edzőink", link: "/edzoink" },
  // { name: "Közös Edzések", link: "/kozosedzesek" },
  { name: "Egyesületről", link: "/egyesulet" },
  { name: "Táborok", link: "/taborok" },
  { name: "Galéria", link: "/galeria" },
];

const highlightedLinks = [
  // { name: "Tagság", link: "/tagsag" },
  { name: "Kapcsolat", link: "/kapcsolat" },
];

const Navbar = () => {
  const [activeBar, setActiveBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [coaches, setCoaches] = useState({});

  useEffect(() => {
    client
      .fetch(
        `*[_type == "coaches"]{
         page{current}, name}`
      )
      .then((data) => setCoaches(data))
      .catch(console.error);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    const allLink = document.querySelectorAll(
      `.navbar .menu-content .link-item`
    );

    for (let i = 0; i < allLink.length; i++) {
      const link = allLink[i];

      if (link.attributes.href.value === router.pathname) {
        link.closest("li").classList.add("active");
        continue;
      }

      link.closest("li").classList.remove("active");
    }

    return setActiveBar(false);
  }, [router.pathname]);

  console.log(coaches);

  return (
    <div className={"navbar" + (activeBar ? " open" : "")}>
      <div className="wrapper">
        <div className="menu-content desktop">
          <ul className="menu-items">
            <div className="flex">
              {simpleLinks.map((item) => {
                if (item.link === "/edzoink") {
                  return (
                    <li
                      onMouseEnter={handleMenuOpen}
                      onMouseLeave={handleMenuClose}
                      className={`edzoink-link${menuOpen ? " open" : ""}`}
                      key={item.link}
                    >
                      <Link passHref legacyBehavior href={item.link}>
                        <a className="link-item">
                          {item.name} <KeyboardArrowDownIcon />
                        </a>
                      </Link>

                      {menuOpen && (
                        <ClickAwayListener onClickAway={handleMenuClose}>
                          <Paper className="dropdown-links">
                            <MenuList>
                              {coaches.length
                                ? coaches?.map((coach) => {
                                    const coachHref = `/edzoink/${coach.page.current}`;

                                    return (
                                      <Link
                                        key={coachHref}
                                        passHref
                                        legacyBehavior
                                        href={coachHref}
                                      >
                                        <a>
                                          <MenuItem>{coach.name}</MenuItem>
                                        </a>
                                      </Link>
                                    );
                                  })
                                : null}
                            </MenuList>
                          </Paper>
                        </ClickAwayListener>
                      )}
                    </li>
                  );
                }

                return (
                  <li className="" key={item.link}>
                    <Link passHref legacyBehavior href={item.link}>
                      <a className="link-item">{item.name}</a>
                    </Link>
                  </li>
                );
              })}
            </div>

            <div className="separeted">
              {highlightedLinks.map((item, i) => (
                <li className="" key={`${i * 4}`}>
                  <Link passHref legacyBehavior href={item.link}>
                    <a className="link-item">{item.name}</a>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div
          className="hamburger-wrapper mobile"
          onClick={() => setActiveBar(!activeBar)}
        >
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        <div className="logo-container">
          <Image layout="fill" src="/logo.png" alt="Logo" className="logo" />
        </div>
      </div>

      <div className="menu-content mobile">
        <ul className="menu-items">
          <div className="flex column">
            {simpleLinks.map((item, i) => (
              <li className="" key={`${i * 4}`}>
                <Link passHref legacyBehavior href={item.link}>
                  <a className="link-item">{item.name}</a>
                </Link>
              </li>
            ))}
          </div>

          <div className="separeted flex column">
            {highlightedLinks.map((item, i) => (
              <li className="" key={`${i * 4}`}>
                <Link passHref legacyBehavior href={item.link}>
                  <a className="link-item">{item.name}</a>
                </Link>
              </li>
            ))}
          </div>

          <div className="logo-container">
            <li>
              <Image
                width="105px"
                height="101px"
                src="/logo.png"
                alt="Logo"
                className="logo"
              />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
