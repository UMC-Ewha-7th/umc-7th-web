import { Link } from "react-router-dom";
import styled from "styled-components";
import '../layout/layout.css';
import { BiSolidCameraMovie} from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Sidebar = () =>{
    return(
        <nav className="sidebar">
            <SearchB>
                <IoSearch style={{color:'#f0f0f0'}} />
                <SideLink to='/search'>검색</SideLink>
            </SearchB>

            <ListB>
                <BiSolidCameraMovie style={{color:'#f0f0f0'}}/>
                <SideLink to='/movies'>영화</SideLink>
            </ListB>

        </nav>
    );
};

const SearchB = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 10px;

`

const ListB = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 10px;
`

const SideLink = styled(Link)`
    text-decoration: none;
    color: #f0f0f0;
    &:hover{
        color: #FFDD1A;
    }
`

export default Sidebar;