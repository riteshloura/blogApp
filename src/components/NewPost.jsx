import { useState } from "react";

function NewPost({ setPost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handlePost() {
    setPost((e) => [{ title: title, description: description }, ...e]);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="flex justify-center">
      <div className="p-5 w-11/12 flex justify-around items-center bg-orange-100 rounded-md">
        <input
          type="text"
          placeholder="Post title"
          className="bg-slate-100 outline-none p-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post description"
          className="h-10 w-96 p-2 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-orange-500 w-28 p-2 rounded-lg"
          onClick={handlePost}
        >
          Add Post
        </button>
      </div>
    </div>
  );
}

export default NewPost;
