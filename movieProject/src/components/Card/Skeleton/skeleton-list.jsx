import CardSkeleton from "./card-skeleton";

const SkeletonList = () => {
    return (
        new Array(20).fill(0).map((_, idx) => <CardSkeleton/>)
    );
};

export default SkeletonList;