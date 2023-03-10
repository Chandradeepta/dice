import React from "react";

const sortBy = [
  {
    label: "Stars",
    name: "stars",
  },
  {
    label: "Watchers Count",
    name: "watchers_count",
  },
  {
    label: "Score",
    name: "score",
  },
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Created At",
    name: "created_at",
  },
  {
    label: "Updated At",
    name: "updated_at",
  },
];

export default function Sort({ selectedSort, handleSort }) {
  return (
    <>
      <div className="btn-group">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedSort?.label || "Sort By"}
        </button>
        <ul className="dropdown-menu">
          {sortBy.map((each) => {
            return (
              <li key={each.name} style={{cursor: 'pointer'}} onClick={() => handleSort(each)}>
                {each.label}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
