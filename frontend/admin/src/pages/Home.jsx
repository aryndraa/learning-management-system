import OnlineCard from "../components/OnlineCard";

export default function Home () {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 gap-2">
          <OnlineCard/>
          <OnlineCard/>
          <OnlineCard/>
          <OnlineCard/>
        </div>
      </section>
    </>
  )
}
