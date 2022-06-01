import React from 'react';
import {
  Card, CardText
} from 'reactstrap';
import './postcard.scss';

const PostCard = (props) => {
  const { list } = props;
  const items = list && list.map((item, index) => {
     return(
      <div className="post-card" key={index}>
        <Card>
           <div className="p-header">
             <div className="p-img">
               <img src={item.userImg} />
             </div>
             <div className="name">
               {item.name}
               <div className="category">
                <span>Travel</span>
                <span>Food</span>
                <span>Corporate</span>
              </div>
              </div>
           </div>

           <CardText>{item.description}</CardText>

           <div className="p-media">
              
           </div>
        </Card>
      </div>
     )
  });
  return (
    <div className="post-card-wrapper">
      {items}
    </div>
  );
};

export default PostCard;
