import Wrapper from "./SharedLayout.styles";
import { Outlet } from "react-router-dom";
import BigSidebar from "../../../components/BigSidebar/BigSidebar";
import Navbar from "../../../components/Navbar/Navbar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <aside className="sidebar">
          <BigSidebar />
        </aside>
        <div className="main-content">
          {/* Enhanced Dashboard Heading */}
          <div className="dashboard-heading">
            <h1>
              Dashboard
              <span className="accent-bar"></span>
            </h1>
          </div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
