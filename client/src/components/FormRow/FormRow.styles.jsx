import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2rem 1.5rem 2rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1rem;
  }

  .form-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-500);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  label {
    font-weight: 600;
    color: var(--primary-500);
    margin-bottom: 0.5rem;
  }

  input,
  select {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: var(--borderRadius);
    border: 1px solid var(--grey-400);
    background: var(--white);
    font-size: 1rem;
    transition: border 0.2s, box-shadow 0.2s;
    &:focus {
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px var(--primary-100);
    }
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
  }
`;

export default Wrapper;
