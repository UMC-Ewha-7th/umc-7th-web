import CardContainer from "../../components/CardContainer";
import CategoryCard from "../../components/CategoryCard";
import WhiteTitle from "../../components/WhiteTitle";

const Category = () => {
    return (
        <>
        <WhiteTitle>카테고리</WhiteTitle>
        <CardContainer>
            <CategoryCard
            routeLink={'/movies/now-playing'}
            imgURL={'url(/category_img1.jpg)'}
            title={'현재 상영중인'} />
            <CategoryCard
            routeLink={'/movies/now-playing'}
            imgURL={'url(/category_img2.jpg)'}
            title={'인기있는'} />
            <CategoryCard
            routeLink={'/movies/now-playing'}
            imgURL={'url(/category_img3.jpg)'}
            title={'높은 평가를 받은'} />
            <CategoryCard
            routeLink={'/movies/now-playing'}
            imgURL={'url(/category_img4.jpg)'}
            title={'개봉 예정중인'} />
        </CardContainer>
        </> 
    );
};

export default Category;