import React, { useState, useEffect } from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

function Blog() {
  // Calculate the displayed date 
  const [date, setDate] = useState(new Date());
  const [previousDate, setPreviousDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    setDate(currentDate);
    setPreviousDate(previousDate);
  }, []);
  const formattedDate = `${getMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  const formattedPreviousDate = `${getMonth(previousDate.getMonth())} - ${previousDate.getDate()}, ${previousDate.getFullYear()}`;

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date={formattedDate} text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
        {/* Article of the previous date */}
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date={formattedPreviousDate} text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date={formattedPreviousDate} text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date={formattedPreviousDate} text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date={formattedPreviousDate} text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
};

const getMonth = (month) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
};

export default Blog;