import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const Post = ({ id }) => {
  const [postContent, setPostcontent] = useState("");

  const url = window.location.href;
  const currentBlog = url.split("/writing/")[1].split("%20").join(" ");

  useEffect(() => {
    import(`../database/${currentBlog}.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, [currentBlog]);

  return (
    <div>
        <article>
          <main className="post-wrapper">
            <Markdown className="markdown-rendered">{postContent}</Markdown>
          </main>
        </article>
    </div>
  );
};

export default Post;
