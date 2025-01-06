import {NavLink} from "./NavLink.jsx";

export const Navigation = () => {

  const navLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/subject",
      name: "Subject",
    },
    {
      path: "/resources",
      name: "Resource",
    },
    {
      path: "/chats",
      name: "Chats",
    },
    {
      path: "/date",
      name: "Date",
    },
  ]

  return (
    <>
      <div className="flex px-4 md:px-12 xl:px-24 py-5 items-center gap-8 shadow sticky">
        {navLinks.map((navLink, index) => (
          <NavLink key={index} path={navLink.path} name={navLink.name} />
        ))}
      </div>
    </>
  )
}