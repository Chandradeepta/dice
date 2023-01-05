import "./App.css";
import { useState } from "react";
import { debounce } from "lodash";
import { searchRepositories } from "./services/services";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Sort from "./components/Sort";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSort, setSelectedSort] = useState();

  const search = async (query, sortBy) => {
    const repos = await searchRepositories({
      query: query,
      sortBy: sortBy || selectedSort?.name,
    });
    setRepositories(repos);
  };

  const handleSort = (sortObj) => {
    setSelectedSort(sortObj);
    if (searchTerm) {
      search(searchTerm, sortObj.name);
    }
  };

  return (
    <div className="App">
      <Search
        search={search}
        setSearchTerm={setSearchTerm}
        setSelectedSort={setSelectedSort}
      />
      <br />
      <Sort selectedSort={selectedSort} handleSort={handleSort} />
      <div className="container pt-4 text-center">
        <div className="row row-cols-1 row-cols-md-1 g-4">
          {
            repositories.length < 1 && searchTerm && <p>No Results Found</p>
          }
          
          {repositories.map((repo) => {
            return (
              <div
                className="col-sm-3 pb-4 d-flex justify-content-center"
                key={repo.id}
              >
                <Cards repoDetails={repo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
