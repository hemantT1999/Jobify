import { useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import Loading from "../../../components/Loading";
import Wrapper from "./AppliedJobs.styles.jsx";

const AppliedJobs = () => {
  const { getAppliedJobs, appliedJobs, isLoading } = useAppContext();

  useEffect(() => {
    getAppliedJobs();
  }, [getAppliedJobs]);

  if (isLoading) {
    return <Loading center />;
  }

  if (appliedJobs.length === 0) {
    return (
      <Wrapper>
        <h2>No applications found</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Applied Jobs</h5>
      <div className="jobs">
        {appliedJobs.map((application) => (
          <div key={application._id} className="job">
            <header>
              <div className="main-icon">
                {application.job?.company.charAt(0)}
              </div>
              <div className="info">
                <h5>{application.job?.position}</h5>
                <p>{application.job?.company}</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <h5>Application Status: {application.status}</h5>
                <p>
                  Applied:{" "}
                  {new Date(application.appliedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AppliedJobs;
