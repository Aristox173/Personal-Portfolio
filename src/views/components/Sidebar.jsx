import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaCertificate,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = ({ navbarStyles }) => {
  return (
    <nav
      className={`fixed top-1/2 right-[5%] transform -translate-y-1/2 p-3 rounded-3xl shadow-lg ${navbarStyles.backgroundColor} ${navbarStyles.shadowColor}`}
    >
      <ul>
        <li>
          <a href="#hero">
            <FaHome
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#about">
            <FaInfoCircle
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaTools
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#certifications">
            <FaCertificate
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaProjectDiagram
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#work">
            <FaBriefcase
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope
              className={`icon ${navbarStyles.iconColor} ${navbarStyles.hoverColor}`}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
