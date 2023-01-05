import React from "react";
import commonGetter from "../lib/commonGetter";

export default function Cards(props) {
  const { repoDetails } = props;
  const repoName = commonGetter.getRepoName(repoDetails);
  const description = commonGetter.getRepoDescription(repoDetails);
  const rating = commonGetter.getRepoStars(repoDetails);
  const language = commonGetter.getRepoLanguage(repoDetails);

  return (
    <>
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title text-muted text-start">{repoName}</h5>
          <h6 className="card-subtitle mb-4 text-muted text-start">
            {description}
          </h6>
          <div className="d-flex justify-content-between">
            <h6 className="card-subtitle  text-muted text-start">
              &#9734; {rating}
            </h6>

            <h6 className="card-subtitle  text-muted text-start">{language}</h6>
          </div>

          {/* <p className="card-text fs-6 text text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        </div>
      </div>
    </>
  );
}
