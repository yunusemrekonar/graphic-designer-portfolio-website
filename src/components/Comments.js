import React from 'react';
import card1 from '../assets/Comment-1.png';
import card2 from '../assets/Comment-2.png';
import card3 from '../assets/Comment-3.png';
import card4 from '../assets/Comment-4.png';

const Comments = () => {
  return (
    <div className="comments-container" id="comments">
      <img src={card1} alt="" className="comment-card"/>
      <img src={card2} alt="" className="comment-card"/>
      <img src={card3} alt="" className="comment-card"/>
      <img src={card4} alt="" className="comment-card"/>
    </div>
  );
};

export default Comments;
