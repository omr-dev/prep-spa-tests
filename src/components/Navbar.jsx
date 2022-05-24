import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="info">Info</NavLink>
        </li>
        <li>
          <NavLink to="spaTest1">Spa-Test-1</NavLink>
        </li>
        <li>
          <NavLink to="spaTest2">Spa-Test-2</NavLink>
        </li>
        <li>
          <NavLink to="spaTest3">Spa-Test-3</NavLink>
        </li>
        <li>
          <NavLink to="spaTest4">Spa-Test-4</NavLink>
        </li>
        <li>
          <NavLink to="spaTest5">Spa-Test-5</NavLink>
        </li>
        <li>
          <NavLink to="spaTest6">Spa-Test-6</NavLink>
        </li>
      </ul>
    </nav>
  );
};
