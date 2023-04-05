import navbarStyle from "./navbar.module.less";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Item {
  name: string;
  path: string;
}

function Navbar() {
  const [list] = useState<Item[]>([
    { name: "我是导航1", path: "/" },
    { name: "我是导航2", path: "/user" },
    { name: "我是导航3", path: "/login" },
    { name: "我是导航4", path: "/partner" },
  ]);

  const [currentPath, setCurrentPath] = useState("/");

  const changePath = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <header>
      <div className={navbarStyle.navbar}>
        {list.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`${navbarStyle.navbarItem} ${
                currentPath === item.path && navbarStyle.active
              }`}
              onClick={() => changePath(item.path)}
            >
              我是导航1
            </NavLink>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
