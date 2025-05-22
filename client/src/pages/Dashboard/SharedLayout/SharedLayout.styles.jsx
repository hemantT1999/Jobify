import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  .dashboard {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
      120deg,
      var(--primary-100) 0%,
      var(--white) 100%
    );
  }
  .sidebar {
    min-width: 250px;
    max-width: 250px;
    background: var(--white);
    box-shadow: var(--shadow-2);
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .main-content {
    flex: 1;
    padding: 2rem 3vw;
    min-height: 100vh;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 900px) {
    .sidebar {
      display: none;
    }
    .main-content {
      padding: 1rem 1vw;
    }
  }

  .dashboard-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    h1 {
      font-size: 2.8rem;
      font-family: var(--font-heading);
      font-weight: 900;
      letter-spacing: 2px;
      color: var(--primary-500);
      position: relative;
      text-shadow: 0 2px 8px rgba(44, 177, 188, 0.1);
      display: flex;
      align-items: center;
    }
    .accent-bar {
      display: inline-block;
      width: 60px;
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--primary-500) 0%,
        var(--accent) 100%
      );
      margin-left: 1.5rem;
      box-shadow: 0 2px 8px rgba(44, 177, 188, 0.15);
      animation: accentBarGrow 1s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }

  @keyframes accentBarGrow {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 60px;
      opacity: 1;
    }
  }
`;

export default Wrapper;
