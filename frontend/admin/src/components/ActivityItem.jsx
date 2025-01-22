export const ActivityItem = () => {
  return (
    <>
      <div className="bg-white py-4 px-2 flex justify-between  border-b border-border last:border-none">
        <div className="flex flex-col gap-3">
          <img
            src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <h2 className="text-lg font-medium text-font-300 ">Wayan Slebew</h2>
            <p className="text-font-100 ">Make Meeting in Class 12A</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-font-100 ">
            1 Hours Ago
          </p>
        </div>
      </div>
    </>
  )
}