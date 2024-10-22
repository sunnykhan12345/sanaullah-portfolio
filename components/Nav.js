"use client";
import { Link as ScrollLink } from "react-scroll";
const Links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "journey",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];
const Nav = ({ containerStyles, ListStyles, LinkStyles, Spy }) => {
  return (
    <div className={containerStyles}>
      <u className={ListStyles}>
        {Links?.map((link, index) => {
          return (
            <ScrollLink
              Spy={Spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              className={LinkStyles}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </u>
    </div>
  );
};

export default Nav;
