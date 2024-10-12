import React from "react";
import "./Properties.css";
function ShowcaseApplicants(props) {
  const applicants = props.applicants;
  return (
    <div>
      {
      applicants.map((applicant) => (
        <div key={applicant.id} className="box">
          {/* console.log(key); */}
          <p>
            Applicant Name: <span>{applicant.name}</span>
          </p>
          <p>
            Websites built: <span>{applicant.websites}</span>
          </p>
          <p>
            Applicant location: <span>{applicant.location}</span>
          </p>
        </div>
       )
      )
      }
    </div>
  );
}

const Properties = () => {
  const applicants = [
    {
      name: "Joe",
      work: "freelance-developer",
      blogs: "54",
      websites: "32",
      hackathons: "6",
      location: "morocco",
      id: "0",
    },
    {
      name: "janet",
      work: "fullstack-developer",
      blogs: "34",
      websites: "12",
      hackathons: "8",
      location: "Mozambique",
      id: "1",
    },
  ];

  return (
    <div>
      <h1>Oh! Hello World</h1>

      <ShowcaseApplicants applicants={applicants} />
    </div>
  );
};

export default Properties;
