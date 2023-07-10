import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blogs.css";

const Blogs = () => {
  //consume
  const { posts, loading } = useContext(AppContext);
  console.log("Printing inside blog component");
  console.log(posts);

  return (
    <div className="mt-4 max-w-[50%] mx-auto flex flex-col items-center min-h-[100vh] justify-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-3 mb-6">
            <p className="title text-2xl font-bold">{post.title}</p>
            <p>
              By <span className="italic">{post.author}</span> on{" "}
              <span className="font-bold">{post.category}</span>
            </p>
            <p>Posted On {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-500 mr-1"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
