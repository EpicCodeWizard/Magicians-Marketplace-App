import React, { useState, useEffect } from "react";

const JobofferPage = () => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function mainfetch() {
      const response = await fetch(
        "https://magicians-marketplace.epiccodewizard2.repl.co/jobs/all"
      );
      const data = await response.json();
      setJob(data);
    }
    mainfetch();
  }, []);

  return (
    <div>
      {job &&
        job.map((job) => {
          return (
            <div className="card" style={{ width: "18 rem" }}>
              <img
                className="card-img-top"
                src={job.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.author}</p>
                <a href="#" className="btn btn-primary">
                  Apply
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobofferPage;
