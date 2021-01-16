import React from 'react';
import Skeleton from 'react-loading-skeleton';
const array = [1, 2, 3, 4, 5, 6,7,8,9];

export default function Loader() {
  return (
    <>
      {array.map((_, index) => (
        <div key={index}>
          <Skeleton height={300} />
        </div>
      ))}
    </>
  );
}
