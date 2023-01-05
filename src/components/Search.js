import React from "react";
import { debounce } from "lodash";

export default function Search({ search, setSearchTerm, setSelectedSort }) {
  const debouncedSearch = debounce(async (term) => {
    if (!term) {
      setSelectedSort("Sort By");
      return;
    }
    setSearchTerm(term);
    await search(term);
  }, 800);

  return (
    <>
      <form className="d-flex w-50" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Public Repositories"
          aria-label="Search"
          onInput={(e) => debouncedSearch(e.target.value)}
        />
      </form>
    </>
  );
}
