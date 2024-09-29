import { useEffect } from "react";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import { useState } from "react";

const api_key = "13558d582f5d43ac94e9bbedd9d78c4e";

function App() {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("");

  const totalPosts = post.length;
  console.log(totalPosts);
  // console.log(post);
  const searchedPost = query.length
    ? post.filter((e) =>
        `${e.title} ${e.description}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : post;

  useEffect(function () {
    async function fetchBlogs() {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${api_key}`
      );
      const data = await res.json();
      console.log(data);
      setPost(data.articles.slice(0, 10));
    }
    fetchBlogs();
  }, []);

  function handleClearPost() {
    setPost([]);
  }

  return (
    <div>
      <Navbar
        totalPosts={totalPosts}
        query={query}
        setQuery={setQuery}
        onClearPost={handleClearPost}
      />
      <NewPost setPost={setPost} />
      <MainBody temp={searchedPost} />
    </div>
  );
}

export default App;
