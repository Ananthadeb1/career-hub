import { Link } from "react-router-dom";
import "../FeaturedJobs/FeaturedJobs.css"


let singleData={};
const FeaturedJobs = (company) => {

    const {name,position,location,salary,logo,jobType,workLocation} =company.company;
    
    const handleId=(e)=>{
        singleData =e;
    }
    return (
        <div className="feature-sec">
            <div className="featured-info">
                <img className="comp-logo" src={logo} alt="" />
                <h4>{position}</h4>
                <p>{name}</p>
                <div className="work-sec">
                    <p>{workLocation}</p>
                    <p>{jobType}</p>
                </div>
                <div className="job-loc">
                    <p>{location}</p>
                    <p>Salary:{salary}</p>
                </div>
            <Link onClick={()=>handleId(company.company)} className="btn-style" to="/jobDetails">View Details</Link>
            </div>
        </div>
    );
}; 

export default FeaturedJobs;
export {singleData};