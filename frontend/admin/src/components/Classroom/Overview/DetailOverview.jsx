import {Link} from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { MdClass } from "react-icons/md";

export const DetailOverview = () => {
  return (
		<div className="bg-white p-4 rounded-lg	h-fit">
			<div className=" flex-col gap-1 pb-4 border-b border-border mb-4 hidden md:flex">
				<h2 className="text-2xl font-medium text-font-300 flex items-center gap-2">
					<span className="text-primary text-3xl"><MdClass/></span>
					Class A15
				</h2>
				<p className="text-font-100 text-sm">Rekayasa Perangkat Lunak</p>
				<p className="text-font-100 text-sm">Number : 13</p>
			</div>
			<div className="pb-2">
				<h2 className="font-medium text-font-100 mb-3">Class Teacher</h2>
				<div className="flex gap-3">
					<img
						src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
						alt=""
						className="min-w-12 h-12 rounded-full object-cover"
					/>
					<div className="flex justify-between items-center w-full ">
						<div>
							<h3 className="font-medium text-font-300 ">Mr Anatoli Walkwaker</h3>
							<p className="text-font-100">Code : 003</p>
						</div>
						<Link
							to={'/teacher/:id'}
							className="p-2 text-3xl flex justify-center bg-primary rounded-full text-white"
						>
							<FaCaretRight/>
						</Link>
					</div>
				</div>
			</div>
		</div>
  )
}
