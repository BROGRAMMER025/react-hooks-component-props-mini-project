
import React from "react";

function Article({ title, minutesToRead, preview }) {
  
  const getCoffeeCups = () => {
    const cups = Math.ceil(minutesToRead / 5);
    return "☕️".repeat(cups);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {getCoffeeCups()} {minutesToRead} min read
      </small>
      <p>{preview}</p>
      {}
    </article>
  );
}

export default Article;
