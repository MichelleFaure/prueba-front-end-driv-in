const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center m-4 ">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded"
      >
        Anterior
      </button>
      <span className="text-white">
        Página {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded"
      >
        Siguiente
      </button>
    </div>
  );
};
export default Pagination