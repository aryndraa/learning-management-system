import Navbar from "../components/navigation/Navbar";

export default function DefaultLayout ({ children }) {
  return (
    <>
        <Navbar/>
        <div className="px-5 md:px-12 xl:px-24 text-black bg-background min-h-[100vh] ">
            {children}
        </div>
    </>
  )
}
