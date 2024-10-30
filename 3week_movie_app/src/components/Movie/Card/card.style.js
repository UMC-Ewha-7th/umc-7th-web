import styled from 'styled-components';
import '../../variable.css';

export const CardList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  cursor: pointer;

  &:hover {
      filter: brightness(0.9);
    }
`;

export const CardPoster = styled.img`
    width: 150px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 15px;
  color: var(--text-color);

  width: 150px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const CardReleaseDate = styled.p`
  color: var(--text-color);
`;