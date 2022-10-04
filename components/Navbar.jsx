import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

/*TO-do MAUI DRAwe-re csere*/

const Navbar = () => {
  const simpleLinks = [
    { name: "Főoldal", link: "/" },
    { name: "Rólunk", link: "/rolunk" },
    { name: "Edzéstervezés", link: "/edzestervezes" },
    { name: "Edzőink", link: "/edzoink" },
    { name: "Közös Edzések", link: "/kozosedzesek" },
    { name: "Egyesületről", link: "/egyesulet" },
    { name: "Táborok", link: "/taborok" },
    { name: "Galéria", link: "/galeria" },
  ];

  const highlightedLinks = [
    { name: "Edzéstervezés", link: "/edzestervezes" },
    { name: "Tagság", link: "/tagsag" },
    { name: "Kapcsolat", link: "/kapcsolat" },
  ];

  const [activeBar, setActiveBar] = useState(false);

  const router = useRouter();

  const [activeMenuPath, setActiveMenuPath] = useState(router.pathname);

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

  return (
    <div className={"navbar" + (activeBar ? " open" : "")}>
      <div className="wrapper">
        <div className="menu-content desktop">
          <ul className="menu-items">
            <div className="flex">
              {simpleLinks.map((item, i) => (
                <li className="" key={`${i * 4}`}>
                  <Link href={item.link}>
                    <a className="link-item">{item.name}</a>
                  </Link>
                </li>
              ))}
            </div>

            <div className="separeted">
              {highlightedLinks.map((item, i) => (
                <li className="" key={`${i * 4}`}>
                  <Link href={item.link}>
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
                <Link href={item.link}>
                  <a className="link-item">{item.name}</a>
                </Link>
              </li>
            ))}
          </div>

          <div className="separeted flex column">
            {highlightedLinks.map((item, i) => (
              <li className="" key={`${i * 4}`}>
                <Link href={item.link}>
                  <a className="link-item">{item.name}</a>
                </Link>
              </li>
            ))}
          </div>

          <div className="logo-container">
            <Image
              objectFit="contain"
              width="70px"
              height="70px"
              src="/logo.png"
              alt="Logo"
              className="logo"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
