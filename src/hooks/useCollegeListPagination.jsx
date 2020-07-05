import { useEffect, useState } from "react";

import { getColleges } from "../services";

export default function useCollegeListPagination(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async function fetchColleges() {
      try {
        const { colleges: respCollges, hasNext } = await getColleges(
          pageNumber
        );
        setColleges((colleges) => [...colleges, ...respCollges]);
        setHasNext(hasNext);
      } catch (err) {
        setColleges([])
        setHasNext(true)
      } finally {
        setLoading(false);
      }
    })();
  }, [pageNumber]);

  return { loading, hasNext, colleges, length: colleges.length };
}
