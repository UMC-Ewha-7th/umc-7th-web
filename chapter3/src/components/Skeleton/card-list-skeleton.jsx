import React from 'react';
import CardSkeleton from './card-skeleton';

function CardListSkeleton() {
  return (
    <>
      {Array(20)
        .fill(0)
        .map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
    </>
  );
}

export default CardListSkeleton;
