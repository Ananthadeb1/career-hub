import { Link } from "react-router-dom";
import { singleData } from "../FeaturedJobs/FeaturedJobs";
import "../JobDetails/JobDetails.css";

let Data=[];
const handleAppliedData= ()=>{
  Data.push(singleData);
}
const JobDetails = () => {
  return (
    <div>
      <h2 className="sec-info">Job Details</h2>
      <div>
        <div className="details-sec">
          <div className="first-sec">
            <p>
              <strong>Job Description: </strong>
              {singleData.description}
            </p>
            <p>
              <strong>Job Responsibility: </strong>
              {singleData.responsibilities}
            </p>
            <h3>Educational Requirements: </h3>
            <p>{singleData.requirements}</p>
            <h3>Experiences: </h3>
            <p>{singleData.experience}</p>
          </div>
          <div>
            <div className="secound-sec">
            <h3>Job Details: </h3>
            <p className="strate-line"></p>
            <p>
              <strong>Salary: </strong>
              {singleData.salary} (per month)
            </p>
            <p>
              <strong>Job Title : </strong>
              {singleData.position}
            </p>
            <h3>Contact Information: </h3>
            <p className="strate-line"></p>
            <p>
              <strong>Phone : </strong>
              {singleData.phone}
            </p>
            <p>
              <strong>Email : </strong>
              {singleData.email}
            </p>
            <p>
              <strong>Address : </strong>
              {singleData.address}
            </p>
            </div>
            <Link className="details-btn" onClick={handleAppliedData} to="/appliedJobs">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
export {Data};
