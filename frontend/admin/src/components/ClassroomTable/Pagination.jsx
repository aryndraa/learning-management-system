import { useClassroom } from "../../contexts/ClassroomContext.jsx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Pagination = () => {
  const { page, setPage, totalPages } = useClassroom();

  return (
    <div className="flex justify-between gap-4 items-center mt-4 bg-white p-4 rounded-lg">
      <span className="text-base font-medium text-font-100">
        Page {totalPages < page ? totalPages : page} of {totalPages}
      </span>
      <div className="flex gap-3">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="p-2 px-2 text-2xl flex items-center  bg-primary text-white rounded-lg disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>

        <button
          onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={page >= totalPages}
          className="px-2 py-2 text-2xl flex items-center bg-primary text-white rounded-lg disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div>

    </div>
  );
};
