import { singleData } from "../FeaturedJobs/FeaturedJobs";
import "../JobDetails/JobDetails.css";

const JobDetails = () => {
  return (
    <div>
      <h1>Job Details</h1>
      <div>
        <div>
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
            <h3>Job Details: </h3>
            <p><strong>Salary: </strong>{singleData.salary} (per month)</p>
            <p><strong>Job Title : </strong>{singleData.position}</p>
            <h3>Contact Information: </h3>
            <p><strong>Phone : </strong>{singleData.phone}</p>
            <p><strong>Email : </strong>{singleData.email}</p>
            <p><strong>Address : </strong>{singleData.address}</p>
            <span className="btn-style">Apply Now</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
