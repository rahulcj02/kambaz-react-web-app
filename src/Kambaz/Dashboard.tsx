import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
      <h2 id="wd-dashboard-published">Published Courses (7)</h2><hr/>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={200} alt="Node JS" />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/expressjs.jpg" width={200} alt="Express JS" />
            <div>
              <h5>CS3456 Express JS</h5>
              <p className="wd-dashboard-course-title">Building APIs with Express</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/mongodb.jpg" width={200} alt="MongoDB" />
            <div>
              <h5>CS4567 MongoDB</h5>
              <p className="wd-dashboard-course-title">NoSQL Database Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/mern.jpg" width={200} alt="MERN Stack" />
            <div>
              <h5>CS5678 MERN Stack</h5>
              <p className="wd-dashboard-course-title">Full MERN Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/redux.jpg" width={200} alt="Redux" />
            <div>
              <h5>CS6789 Redux</h5>
              <p className="wd-dashboard-course-title">State Management with Redux</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/netlify.jpg" width={200} alt="Netlify" />
            <div>
              <h5>CS7890 Deployment</h5>
              <p className="wd-dashboard-course-title">Deploying Apps on Netlify</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
