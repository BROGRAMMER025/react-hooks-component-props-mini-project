import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const blogName = "My Blog";
  const aboutImage = "path/to/your/image.jpg";
  const aboutText = "About the blog..."; 
  const posts = [
    { id: 1, title: "Post 1", content: "Content for post 1..." },
    { id: 2, title: "Post 2", content: "Content for post 2..." },
    
  ];

  return (
    <div className="App">
    <Header blogName={blogName} />
    <About imageSrc={aboutImage} aboutText={aboutText} />
    <ArticleList posts={posts} />
      {}
    </div>
  );
}
function About({ imageSrc, aboutText }) {
  
  const defaultImageSrc = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageSrc || defaultImageSrc} alt="blog logo" />
      <p>{aboutText}</p>
      {}
    </aside>
  );
}


export default App;
