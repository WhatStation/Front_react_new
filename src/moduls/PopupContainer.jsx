import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopupText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const PopupButton = styled.button`
  background-color: #05d686;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

export { PopupContainer, PopupText, PopupButton };