import { useState } from "react";

export const usePagination = <T>(data: Array<T>, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const lastPage = Math.ceil(data.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage((page) => page + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((page) => page - 1);
        }
    };

    const dataToDisplay = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    return {
        dataToDisplay,
        currentPage,
        nextPage,
        previousPage,
    };
};
