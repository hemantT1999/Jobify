import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();

  // Filter links: only show "add job" if user is admin
  const filteredLinks = links.filter((link) => {
    if (
      (link.text === "add job" || link.text === "stats") &&
      user?.role !== "admin"
    ) {
      return false;
    } else if (link.text === "Applied Jobs" && user?.role !== "job_seeker") {
      return false;
    }
    return true;
  });

  return (
    <div className="nav-links">
      {filteredLinks.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
