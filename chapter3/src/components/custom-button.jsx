import styled from 'styled-components';

const SweetPotato = styled.button`
  background-color: ${(props) => props.color || 'purple'};
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const StyledHoverButton = styled.button`
  &:hover {
    text-decoration: underline;
  }
`;

const CustomButton = () => {
  return (
    <>
      <SweetPotato color={'purple'}>커스텀 버튼</SweetPotato>
      <SweetPotato color={'blue'}>커스텀 버튼</SweetPotato>
    </>
  );
};

export default CustomButton;
