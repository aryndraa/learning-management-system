export const MeetingInformation = () => {
  return (
    <>
      <div className="bg-white p-4">
        <h2 className="font-medium text-font-100 mb-3">Current Activity</h2>
        <div className="mb-4 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-medium text-font-300">Meeting Class</h3>
            <p className="text-font-100">Bahasa Indonesia</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-success rounded-full"></div>
            <span className=" font-medium text-font-100">On Going</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 bg-primary/20 p-4 rounded-lg">
          <div className="bg-primary text-2xl font-medium text-white rounded-lg flex justify-center p-5 py-4">
            <span>01</span>
          </div>
          <span className="text-3xl font-medium text-primary">:</span>
          <div className="bg-primary text-2xl font-medium text-white rounded-lg flex justify-center p-5 py-4">
            <span>20</span>
          </div>
          <span className="text-3xl font-medium text-primary">:</span>
          <div className="bg-primary text-2xl font-medium text-white rounded-lg flex justify-center p-5 py-4">
            <span>12</span>
          </div>
        </div>
      </div>
    </>
  )
}