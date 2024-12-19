import styled from "styled-components";
import ModalButton from "./ModalButton";

const Modal = ({children}) => {
    return(
        <ModalArea>
            <ModalBody>
                {children}
                <ModalButton />
            </ModalBody>
        </ModalArea>

    );
};

const ModalArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalBody = styled.div`
    position: relative;

    width:400px;
    height:200px;

    padding:40px;  

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    text-align: center;

    background-color: rgb(255,255,255);
    border-radius:10px;
    box-shadow:0 2px 3px 0 rgba(34,36,38,0.15);
    transform:translateY(-50%);

    font-family: "Gothic A1", serif;
    font-weight: 400;
    font-style: normal;

`

export default Modal;