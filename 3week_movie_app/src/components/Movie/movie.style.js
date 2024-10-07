import styled from 'styled-components';
import '../variable.css';

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  margin: 10px;
`;

export const MoviePoster = styled.img`
    width: 150px;
    border-radius: 20px;
    dispaly: flex;
    flex-direction: column;

    &:hover {
    filter: brightness(0.4);
  }
`;

export const MovieTitle = styled.h3`
  font-size: 15px;
  color: var(--text-color);

  width: 150px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const MovieReleaseDate = styled.p`
  color: var(--text-color);
`;