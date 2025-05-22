import styled from "styled-components";

const StyledHeading = styled.h2`
  font-size: 2.2rem;
  font-family: var(--font-heading);
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--primary-500);
  display: flex;
  align-items: center;
  margin: 2rem 0 1.5rem 0;
  justify-content: center;
  position: relative;
  text-shadow: 0 2px 8px rgba(44, 177, 188, 0.1);

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      var(--primary-500) 0%,
      var(--accent) 100%
    );
    margin-left: 1.2rem;
    box-shadow: 0 2px 8px rgba(44, 177, 188, 0.15);
    animation: accentBarGrow 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @keyframes accentBarGrow {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 50px;
      opacity: 1;
    }
  }
`;

const SectionHeading = ({ children }) => (
  <StyledHeading>{children}</StyledHeading>
);

export default SectionHeading;
