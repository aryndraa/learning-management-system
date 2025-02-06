export const DetailOverview = () => {
  return (
		<div className="bg-white p-4 rounded-lg	">
			<div className="flex flex-col gap-1 pb-4 border-b border-border mb-4">
				<h2 className="text-2xl font-medium text-font-300">Class A15</h2>
				<p className="text-font-100">Rekayasa Perangkat Lunak</p>
				<p className="text-font-100">Number : 13</p>
			</div>
			<div>
				<h2 className="text-sm font-medium text-font-100 mb-3">Class Teacher</h2>
				<div className="flex gap-3">
					<img
						src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
						alt=""
						className="w-12 h-12 rounded-full object-cover"
					/>
					<div>
						<h3 className="font-medium text-font-300">Mr Anatoli Walkwaker</h3>
						<p className="text-font-100">Code : 003</p>
					</div>
				</div>
			</div>
		</div>
  )
}
