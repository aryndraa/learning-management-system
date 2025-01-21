const Logo = ({isClose = false}) => {
  return (
    <>
      <div className={` items-center ${
        isClose ? "" : "flex gap-2" 
      }`}>
        <img src="/logo.svg" alt="logo app" className="w-7 md:w-10"/>
        <strong>
          <h1 className={`text-xl md:text-[28px] text-font-300 ${isClose ? "lg:hidden" : "block" }`}>
            Orbits<span className="text-primary">.</span>
          </h1>
        </strong>
      </div>
    </>
  )
}

export default Logo;