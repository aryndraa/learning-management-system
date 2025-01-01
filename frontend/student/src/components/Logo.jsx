const Logo = () => {
  return (
    <>
      <div className="flex gap-2 items-center ">
        <img src="/logo.svg" alt="logo app" className="w-7 2xl:w-10"/>
        <strong>
          <h1 className="text-xl 2xl:text-[28px] text-font-300">
            Onclass<span className="text-primary">.</span>
          </h1>
        </strong>
      </div>
    </>
  )
}

export default Logo;