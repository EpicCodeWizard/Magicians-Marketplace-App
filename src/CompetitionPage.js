import React, { useState, useEffect } from "react";

const CompetitionPage = () => {
  const [comp, setComp] = useState(null);

  useEffect(async () => {
    const response = await fetch(
      "https://magicians-marketplace.epiccodewizard2.repl.co/competitions/all"
    );
    const data = await response.json();
    const [item] = data;
    setComp(item);
  }, []);

  const renderComp = (comp, index) => {
    return (
      <div className="card" key={index} style={{ width: "18 rem;" }}>
        <img class="card-img-top" src={comp.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{comp.title}</h5>
          <p className="card-text">{comp.author}</p>
          <a href="#" className="btn btn-primary">
            Apply
          </a>
        </div>
      </div>
    );
  };

  return <div>{comp && comp.map(renderComp)}</div>;
};

export default CompetitionPage;
