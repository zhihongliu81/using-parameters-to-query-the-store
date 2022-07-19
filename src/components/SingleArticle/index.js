import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./SingleArticle.css";

const SingleArticle = () => {
  const articles = useSelector((state) => state.articleState.entries);
  const { id } = useParams();
  const article = articles.find((ele) => ele.id === id);

  return (
    <div className="singleArticle">
      {/* <h1>Why Am I At Home</h1>
      <img
        src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
        alt='home'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam?
      </p> */}
      {article && (
        <>
          <h1>{article.title}</h1>
          <img src={article.imageUrl} alt={article.id} />
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
};

export default SingleArticle;
