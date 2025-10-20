interface ConnectionsTablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ConnectionsTablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ConnectionsTablePaginationProps) => {
  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).filter((page) => {
    return (
      page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1
    );
  });

  return (
    <div className="flex h-[70px] items-center justify-center border-t border-neutral-200 bg-white px-6 py-2">
      <nav className="flex items-center gap-4" aria-label="Pagination">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="text-brand-primary hover:text-brand-primary-hover rounded-lg border-2 border-neutral-100 px-4 py-2 font-medium disabled:cursor-not-allowed disabled:text-neutral-400"
          aria-label="Previous page"
        >
          ← Previous
        </button>
        <div className="flex items-center space-x-2">
          {pageNumbers.map((page, index, array) => {
            const prevPage = array[index - 1];
            const showEllipsis = prevPage && page - prevPage > 1;

            return (
              <div key={page} className="flex items-center">
                {showEllipsis && (
                  <span className="px-2 text-neutral-400" aria-hidden="true">
                    ...
                  </span>
                )}
                <button
                  onClick={() => onPageChange(page)}
                  className={`rounded-lg px-4 py-3 text-sm ${
                    currentPage === page
                      ? "bg-neutral-100 text-black"
                      : "text-black hover:bg-neutral-100"
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="rounded-lg border-2 border-neutral-100 px-4 py-2 font-medium text-black disabled:cursor-not-allowed disabled:text-neutral-400"
          aria-label="Next page"
        >
          Next →
        </button>
      </nav>
    </div>
  );
};
