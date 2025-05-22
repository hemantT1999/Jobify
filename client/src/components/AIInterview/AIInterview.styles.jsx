import styled from "styled-components";

const Wrapper = styled.section`
  .interview-container {
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
  }

  .interview-header {
    text-align: center;
    margin-bottom: 2rem;

    h3 {
      color: var(--primary-500);
      margin-bottom: 0.5rem;
    }

    .question-counter {
      color: var(--grey-500);
      font-size: 0.9rem;
    }
  }

  .question-section {
    background: var(--primary-50);
    padding: 2rem;
    border-radius: var(--borderRadius);
    margin-bottom: 2rem;

    h4 {
      color: var(--primary-600);
      margin-bottom: 1.5rem;
    }
  }

  .answer-input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--grey-200);
    border-radius: var(--borderRadius);
    background: var(--white);
    font-size: 1rem;
    margin-bottom: 1rem;
    resize: vertical;
    min-height: 120px;

    &:focus {
      border-color: var(--primary-500);
      outline: none;
    }
  }

  .answer-controls {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .submit-btn {
    background: var(--primary-500);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--primary-700);
      transform: translateY(-2px);
    }
  }

  .interview-complete {
    text-align: center;
    padding: 2rem;

    h3 {
      color: var(--primary-500);
      margin-bottom: 2rem;
    }

    .final-score {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .score-feedback {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: var(--borderRadius);

      .good-score {
        color: var(--green-dark);
        background: var(--green-light);
        padding: 1rem;
        border-radius: var(--borderRadius);
      }

      .average-score {
        color: var(--yellow-dark);
        background: var(--yellow-light);
        padding: 1rem;
        border-radius: var(--borderRadius);
      }

      .low-score {
        color: var(--red-dark);
        background: var(--red-light);
        padding: 1rem;
        border-radius: var(--borderRadius);
      }
    }
  }
`;

export default Wrapper;
