import styled from 'styled-components';
import StyledLink from './StyledLink';
import WhiteSpan from './WhiteSpan';
import StyledBtn from './StyledBtn';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <NavContainer>
            <MarginSpan left={'40px'}>
                <StyledLink to='/'>
                    <LogoSpan>
                        YONGCHA
                    </LogoSpan>
                </StyledLink>
                <MarginSpan left={'40px'}>
                    <StyledLink to='/search'>
                        <WhiteSpan>검색</WhiteSpan>
                    </StyledLink>
                </MarginSpan>
            </MarginSpan>
            <MarginSpan right={'40px'}>
                <StyledBtn
                color2={'rgb(48,48,48)'}
                onClick={()=>navigate('/login')}
                >
                    로그인
                </StyledBtn>
                <StyledBtn
                color={'red'}
                color2={'rgb(204,41,0)'}
                onClick={()=>navigate('/signup')}
                >
                    회원가입
                </StyledBtn>
            </MarginSpan>
        </NavContainer>
    );
}

export default Navbar;

const LogoSpan = styled.span`
    color: red;
    font-size: 1.3em;
    font-weight: bold;
    padding: 5px;
`

const MarginSpan = styled.span<{left?: string, right?: string}>`
    margin-left: ${props => props.left || '0'};
    margin-right: ${props => props.right || '0'};
`

const NavContainer = styled.nav`
    background-color: black;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding-top: 5px;
`