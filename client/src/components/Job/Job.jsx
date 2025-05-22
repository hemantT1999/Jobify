import moment from "moment";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./Job.styles";
import JobInfo from "../JobInfo/JobInfo";
import { useState } from "react"; // Add this
import AIInterview from "../AIInterview/AIInterview"; // Add this

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
  applicationDate,
}) => {
  const { user, setEditJob, deleteJob, applyForJob, appliedJobIds } =
    useAppContext();
  const [showInterview, setShowInterview] = useState(false); // Add this

  const isApplied = appliedJobIds?.includes(_id);
  const date = moment(createdAt).format("MMM Do, YYYY");
  const formattedApplicationDate = applicationDate
    ? moment(applicationDate).format("MMM Do, YYYY")
    : null;

  const handleApply = async () => {
    await applyForJob(_id);
    setShowInterview(true); // Add this
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            {user.role === "admin" ? (
              <>
                <Link
                  to="/add-job"
                  onClick={() => setEditJob(_id)}
                  className="btn edit-btn"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={() => deleteJob(_id)}
                >
                  Delete
                </button>
              </>
            ) : (
              <div className="application-info">
                {!isApplied ? (
                  <button
                    type="button"
                    className="btn apply-btn"
                    onClick={handleApply}
                  >
                    Apply Now
                  </button>
                ) : showInterview ? (
                  <AIInterview jobId={_id} position={position} />
                ) : (
                  <>
                    <div className="status applied">
                      <FaCheckCircle /> Applied
                    </div>
                    {formattedApplicationDate && (
                      <div className="application-date">
                        <FaCalendarAlt />
                        <span>Applied on: {formattedApplicationDate}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
