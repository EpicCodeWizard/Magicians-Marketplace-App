import React from "react";
import "./InterviewPage.css";

const InterviewPage = () => {
  const list = [
    {
      name: "Harry Potter",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
      specialty: "Expelliarmus",
      location: "Number 4 Privet Drive",
      meeting: "https://meet.google.com/new?authuser=0"
    },
    {
      name: "Hermione Granger",
      image: "https://wallpapercave.com/wp/wp3257750.jpg",
      specialty: "Wingardium leviosa",
      location: "Hampstead Garden Suburb, London",
      meeting: "https://meet.google.com/new?authuser=0"
    },
    {
      name: "Ron Weasley",
      image:
        "https://th.bing.com/th/id/OIP.Y-SOg_Ru9GlteY51J-8r8AHaHa?pid=ImgDet&rs=1",
      specialty: "Eat Slugs",
      location: "The Burrow",
      meeting: "https://meet.google.com/new?authuser=0"
    },
    {
      name: "Voldemort",
      image:
        "https://th.bing.com/th/id/R.068d90fd16d9d474055e13c30c68fbde?rik=9PCBNY9lR3T4Aw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-7NltAwQ-TOo%2fTevABLMeadI%2fAAAAAAAAAHk%2fBByl15_B2oY%2fs1600%2flord-voldemort-hp7-.jpg&ehk=U%2fGzAYdkmycRQVVb%2fzFYLYEVrevvyHvlQ6fgbAujvmY%3d&risl=&pid=ImgRaw&r=0",
      specialty: "Avada kedavra",
      location: "Chamber of Secrets",
      meeting: "https://meet.google.com/new?authuser=0"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="card">
          <ul className="product-list">
            {list.map((content) => (
              <li>
                <div className="product">
                  <div className="product-image">
                    <img src={content.image} />
                  </div>
                  <div className="product-imformation">
                    <h4> Applicant Name: {content.name} </h4>
                    <div className="specification">
                      <span>Applicant Specialty: {content.specialty} </span>
                      <small className="line"></small>
                      <span>Applicant Location: {content.location} </span>
                    </div>
                    <span>
                      {" "}
                      <a href={content.meeting}>
                        {" "}
                        Meet the applicant now{" "}
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InterviewPage;
