import styled from "styled-components";
import { CategoryList } from "./movies/category";
import CCard from "./movies/ccard";
import * as S from './movies.style'

const Category = () => {
    console.log(CategoryList);
    return(
        <CategoryP>
            <h1>카테고리</h1>
            <Cat>
                {CategoryList.data.map((cats) => (
                    <CCard key={cats.num} 
                    bg_path={cats.bg_path}
                    title={cats.title}
                    link={cats.link}/>
                ))}
            </Cat>
        </CategoryP>
    )

}

const CategoryP = styled.div`
    color:#f0f0f0;
`

const Cat = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`

export default Category;