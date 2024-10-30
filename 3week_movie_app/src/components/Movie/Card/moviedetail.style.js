import styled from 'styled-components';
import '../../variable.css';

// 전체를 감싸는 요소
export const DetailWrapper = styled.div `
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: var(--text-color);
  overflow: hidden;
  border-radius: 8px;
  height: 500px;
;`

//배경 이미지
export const Backdrop = styled.div`
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 100%;

    background-color: black;
    background: linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%), url(${props => props.backdropUrl});
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  mask-image: linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    `;

export const DetailContent = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.5); /* 글씨 뒤 반투명 배경 /
  padding: 20px;
  border-radius: 8px;
  max-width: 600px; / 텍스트 영역 크기 조절 */
`;

// 제목
export const DetailTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
;`

// 영화 설명
export const DetailOverview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
;`

// 출시 날짜
export const DetailReleaseDate = styled.span`
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: block;
  strong {
    font-weight: bold;
  }
;`

// 영화 평점
export const DetailRate = styled.span`
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
  strong {
    font-weight: bold;
  }
;`

// 캐스트 제목
export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--logo-color);
`;

// 캐스트 정보
export const CastWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
;`

// 캐스트 카드 (사진+이름+캐릭터이름)
export const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;

  width: 80px;
  height: 200px;
  word-wrap: break-words;
  overflow: hidden;
;`

// 캐스트 이미지
export const CastImg = styled.img`
  margin-top: 5px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  object-fit: cover;
  border: var(--text-color) 2px solid;
`;

//캐스트 이름
export const ActorName = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 6px;
;`
//캐릭터 이름
export const CharacterName = styled.p`
  font-size: 0.85rem;
  color: var(--secondary-text-color);
  margin: 0px;
;`