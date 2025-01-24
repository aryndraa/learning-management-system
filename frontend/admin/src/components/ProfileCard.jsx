import { IoMdMore } from "react-icons/io";

export const ProfileCard = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <p className="text-sm text-font-100">Welcome,</p>
            <h2 className="text-font-200">Admin Slebew</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-2xl p-2 border-font-200 border rounded-full text-font-200 ">
            <IoMdMore />
          </button>
        </div>
      </div>
    </>
  )
}