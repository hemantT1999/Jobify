import styled from "styled-components";

const Wrapper = styled.aside`
  background: var(--white);
  min-height: 100vh;
  width: 250px;
  box-shadow: var(--shadow-2);
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  .sidebar-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1.5rem;
      border-radius: 1.5rem;
      color: var(--grey-900);
      font-weight: 600;
      transition: var(--transition);
      &:hover,
      &.active {
        background: var(--primary-100);
        color: var(--primary-500);
      }
      .icon {
        font-size: 1.25rem;
      }
    }
  }
`;

export default Wrapper;
