import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

const StyledLoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${props => props.theme.spinnerBackground || '#f3f3f3'};
  border-top: 5px solid ${props => props.theme.spinnerColor || '#007bff'};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <StyledSpinnerContainer>
      <StyledLoadingSpinner />
    </StyledSpinnerContainer>
  );
};

export default LoadingSpinner;