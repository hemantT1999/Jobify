import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(44, 177, 188, 0.1);
  padding: 2rem 2rem 1.5rem 2rem;
  margin-bottom: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 32px rgba(44, 177, 188, 0.18);
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    .main-icon {
      width: 60px;
      height: 60px;
      display: grid;
      place-items: center;
      background: var(--primary-500);
      border-radius: 50%;
      font-size: 2rem;
      font-weight: 700;
      color: var(--white);
      margin-right: 1.5rem;
      box-shadow: 0 2px 8px rgba(44, 177, 188, 0.1);
      text-transform: uppercase;
    }
    .info {
      h5 {
        margin: 0 0 0.25rem 0;
        font-size: 1.3rem;
        font-weight: 800;
        color: var(--primary-500);
        letter-spacing: 1px;
      }
      p {
        margin: 0;
        color: var(--grey-400);
        font-size: 1.05rem;
        font-weight: 500;
      }
    }
  }

  .content {
    .content-center {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 1rem;
      align-items: center;
    }
    .status {
      padding: 0.35rem 1.2rem;
      border-radius: 1rem;
      font-weight: 700;
      background: var(--primary-100);
      color: var(--primary-500);
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 1rem;
      text-transform: capitalize;
    }
    .status.pending {
      background: var(--accent-light);
      color: var(--accent);
    }
    .status.interview {
      background: #e0f7fa;
      color: #00796b;
    }
    .status.declined {
      background: #ffe0e0;
      color: #d32f2f;
    }
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    .btn {
      min-width: 100px;
      font-size: 1rem;
      border-radius: 2rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .apply-btn[disabled] {
      background: var(--grey-100);
      color: var(--grey-400);
      cursor: not-allowed;
    }
  }

  .application-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .application-date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--grey-600);
    font-size: 0.9rem;
    padding: 0.25rem 0;

    svg {
      color: var(--primary-500);
    }
  }

  .apply-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &.applied {
      background: var(--primary-100);
      color: var(--primary-500);
      border: 1px solid var(--primary-500);

      &:hover {
        background: var(--primary-100);
        transform: none;
      }

      svg {
        color: var(--primary-500);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.8;
    }
  }

  @media (max-width: 600px) {
    padding: 1.2rem;
    header .main-icon {
      width: 48px;
      height: 48px;
      font-size: 1.3rem;
      margin-right: 1rem;
    }
    .content-center {
      flex-direction: column;
      gap: 0.7rem;
    }
  }
`;

export default Wrapper;
