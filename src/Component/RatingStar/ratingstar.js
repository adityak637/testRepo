import React from 'react';
import './rating.scss';
import StarRatings from 'react-star-ratings';

const RatingStar = (props) => {

    return (
      <StarRatings
          rating={props.rating}
          starRatedColor="#fe5e4a"
          numberOfStars={5}
          starDimension={props.size}
          starSpacing="0px"
          name='rating'
        />
    );
}


export default RatingStar;
