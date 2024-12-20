import styled from "styled-components";
import blankProfile from "../../../public/blankProfile.webp"

const Cast = (props) =>{
    return(
        <CastCard>
            {(props.profile_path == null) ? (
                <img src={blankProfile} />
            ) : (
                <img src={"https://image.tmdb.org/t/p/w500/" + props.profile_path} />

            )}

            <p> {props.name} </p>
            <p className="character"> {props.character} </p>
        </CastCard>
    )
};



const CastCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    width: 80px;
    height: 100%;
    //margin-bottom: 10px;

    p{
        margin:0px;
        word-wrap: break-word;
        font-size: 0.7em;
        color: #f0f0f0;
    }
    
    p.character{
        color: #888888;

        height: 2.8em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    img{
        width:80px;
        height: 80px;

        object-fit: cover;
        border-radius:70%;
        border: 1px solid white;
    }

    &:hover{
        filter: brightness(0.6);
        cursor: pointer;
    }
`

export default Cast;