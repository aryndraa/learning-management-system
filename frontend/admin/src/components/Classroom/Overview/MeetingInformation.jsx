export const MeetingInformation = () => {
  return (
    <>
      <div className="bg-white p-4">
        <h2 className="font-medium text-font-100 mb-4">Current Activity</h2>

        <div className="mb-4 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-medium mb-1 text-font-300">Meeting Class</h3>
            <p className="text-font-100">Bahasa Indonesia</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-font-100">On Going</span>
          </div>
        </div>

        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex justify-between items-center  bg-primary/20 p-4 rounded-lg">
            <div className="bg-primary text-xl font-medium text-white rounded-lg flex justify-center py-3 p-4">
              <span>01</span>
            </div>
            <span className="text-3xl font-medium text-primary">:</span>
            <div className="bg-primary text-xl font-medium text-white rounded-lg flex justify-center py-3 p-4">
              <span>20</span>
            </div>
            <span className="text-3xl font-medium text-primary">:</span>
            <div className="bg-primary text-xl font-medium text-white rounded-lg flex justify-center py-3 p-4">
              <span>12</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-font-100 mb-3">Meeting Teacher</h4>
          <div className="flex gap-3">
					  <div className="w-full border px-4 py-3 border-border rounded-lg ">
					  	<div>
					  		<h3 className="font-medium text-font-300 ">Mr Anatoli Walkwaker</h3>
					  		<p className="text-font-100">Code : 003</p>
					  	</div>
					  </div>
			  	</div>
        </div>
      </div>
    </>
  )
}