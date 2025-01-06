import {NavTabLink} from "./NavTabLink.jsx";

export const NavTab = () => {
  return (
    <>
      <div className="flex px-4 md:px-12 xl:px-24 py-5 items-center gap-8 shadow sticky">
        <NavTabLink path={'/'} name={'Home'} />
        <NavTabLink path={'/subject'} name={'Subject'} />
        <NavTabLink path={'/resource'} name={'Resources'} />
        <NavTabLink path={'/chat'} name={'Chat'} />
        <NavTabLink path={'/date'} name={'Date'} />
      </div>
    </>
  )
}