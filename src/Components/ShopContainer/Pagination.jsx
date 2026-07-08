const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <section>
      <ul className="flex justify-center gap-4 my-4 ">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`${currentPage === index + 1 ? "bg-[#004941] text-white" : "bg-white text-black"} text-center  text-bold text-lg px-3 py-1 rounded-lg cursor-pointer hover:${currentPage === index + 1 ? "bg-[#004941] text-white" : "bg-gray-300"}`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
