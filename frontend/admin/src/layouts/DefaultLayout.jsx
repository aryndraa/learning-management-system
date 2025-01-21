import Navbar from "../components/navigation/Navbar";

export default function DefaultLayout ({ children }) {
  return (
    <div className="bg-background">

        <Navbar/>
        <main className="lg:ml-[17rem] px-5 md:px-12 lg:px-8 lg:py-6 text-black min-h-[100vh] ">
            {children}
        </main>
    </div>
  )
}
