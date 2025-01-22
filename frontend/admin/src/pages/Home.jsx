import {OnlineDisplay} from "../components/OnlineDisplay.jsx";

export default function Home () {
  return (
    <>
      <section>
        <h1 className="bg-white mb-4 px-4 py-4 text-xl font-semibold text-font-200 tracking-wider rounded-lg">Dashboard</h1>
        <div>
          <OnlineDisplay />
        </div>
      </section>
    </>
  )
}
