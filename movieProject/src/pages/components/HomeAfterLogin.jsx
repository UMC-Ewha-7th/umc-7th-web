import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeAfterLogin = (props) => {
    const getRandomNum = () =>{
        return parseInt(Math.random()*20)
    }
    const imgnum = getRandomNum();
    
    console.log(props);    

    return(
        <AfterLogin>
            <ImgCard to={'movies/'+props.id}>
                <img src={"https://image.tmdb.org/t/p/w1280/" + props.backdrop_path} />
                <TextPos>
                    <h2> {props.title} </h2>
                    <p className='released_year'> {props.release_date} </p>
                    <p className='overview_article'> {props.overview} </p>
                </TextPos> 

            </ImgCard>
        </AfterLogin>
    )
}

const AfterLogin = styled.div`
    
`
const ImgCard = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 280px;

    position: relative;
    margin-top: 15px;

    img{
      object-fit: cover;
      border-radius:10px;
      width:100%;
      height: 100%;
    }
`

const TextPos = styled.div`
  background: linear-gradient(to right, #121212BB 50%, #12121200) ;
  
  color: #f0f0f0;
  margin: 0px;
  padding-left:2%;
  
  position: absolute;

  height: 100%;
 
  
  p{
    margin: 0px;
    display: flex;
    display-direction: column;
    word-wrap: break-word;
    color: #f0f0f0;
    width: 50%;
  }

  h2{
    margin-bottom: 10px;
  }

  h3{
    margin-top:10px;
    margin-bottom:10px;
  }
  
  p.overview_article{
    height: 5.6em;
    overflow: hidden;
    text-overflow: ellipsis;
    
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

`

export default HomeAfterLogin;