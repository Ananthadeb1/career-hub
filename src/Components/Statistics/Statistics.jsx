import { Link, useLoaderData } from "react-router-dom";
import "../Statistics/Statistics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBrain, faFileInvoiceDollar, faLightbulb, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Statistics = () => {

    let data = useLoaderData();
    // console.log(data);
  return (
    <div>
      <div className="top-banner">
        <img
          src="https://img.freepik.com/premium-photo/handsome-businessman-standing-white-background_474601-8418.jpg?w=996"
          alt=""
        ></img>
        <div className="banner-info ">
          <h1>
            One Step <br /> Closer To Your <br />{" "}
            <span className="special-text">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link to="/apply">
            <p className="btn-style">Get Started</p>
          </Link>
        </div>
      </div>

      {/* job category section  */}

      <div className="category-sec">
        <div className="sec-info">
            <h2>Job Categories List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="cate-cards">
            <div className="cards">
            <FontAwesomeIcon className="cate-icon" icon={faFileInvoiceDollar} />
                <h4>Account & Finance</h4>
                <p>300 Jobs Available</p>
            </div>
            <div className="cards">
            <FontAwesomeIcon className="cate-icon" icon={faLightbulb} />
                <h4>Creative Design</h4>
                <p>100+ Jobs Available</p>
            </div>
            <div className="cards">
            <FontAwesomeIcon className="cate-icon" icon={faMoneyBill} />
                <h4>Marketing & Sales</h4>
                <p>150 Jobs Available</p>
            </div>
            <div className="cards">
            <FontAwesomeIcon className="cate-icon" icon={faBrain} />
                <h4>Engineering Job</h4>
                <p>224 Jobs Available</p>
            </div>
        </div>
      </div>

      {/* fatures sections start  */}

      <div className="features-sec">
        <div className="sec-info">
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="f-jobs">
                { data.map(company=><FeaturedJobs className="full-width" 
                key={company.id}
                company={company}></FeaturedJobs>)}
            </div>
        </div>
      </div>
      <span className="btn-style" >See More</span>
    </div>
  );
};

export default Statistics;
