import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  .job {
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 1.5rem;
    transition: var(--transition);
    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 8px 32px rgba(44, 177, 188, 0.18);
    }
    .main-icon {
      width: 60px;
      height: 60px;
      display: grid;
      place-items: center;
      background: var(--primary-500);
      border-radius: var(--borderRadius);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
      margin-right: 2rem;
    }
    .info {
      h5 {
        margin-bottom: 0.25rem;
      }
      p {
        margin: 0;
        text-transform: capitalize;
        color: var(--grey-400);
        letter-spacing: 1px;
      }
    }
    .content {
      padding: 1rem 0 0 0;
    }
    .content-center {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 0.5rem;
    }
    header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
