import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="head-sec">
            <h4>Cakri Bakri</h4>
            <div >
            <Link className="Head-item" to="/">Home</Link>
            <Link className="Head-item" to="/Statistics">Statistics</Link>
            <Link className="Head-item" to="/appliedJobs">Applied Jobs</Link>
            <Link className="Head-item" to="/blog">Blog</Link>
            </div>
            <Link  to="/apply"><p className="btn-style">Start Applying</p></Link>
        </div>
    );
};

export default Header;