import "../FeaturedJobs/FeaturedJobs.css"

const FeaturedJobs = (company) => {
    const {name,position,location,salary,logo,jobType,workLocation} =company.company;
    // console.log(data.name)
    return (
        <div className="feature-sec">
            <div className="featured-info">
                <img className="comp-logo" src={logo} alt="" />
                <h4>{position}</h4>
                <p>{name}</p>
                <div>
                    <p>{workLocation}</p>
                    <p>{jobType}</p>
                </div>
                <div>
                    <p>{location}</p>
                    <p>Salary:{salary}</p>
                </div>
            </div>
        </div>
    );
}; 

export default FeaturedJobs;