import React from "react";
import { blogsData } from "../../data/data";

const Blogs = () => {
  const blogs = blogsData.map((blog) => {
    return (
      <>
        <li key={blog.id} className="blog-post-item">
          <a href="/">
            <figure className="blog-banner-box">
              <img
                src={blog.blogThumbail}
                alt={blog.blogTitle}
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category"> {blog.blogCategory} </p>

                <span className="dot"></span>

                <time dateTime="2022-02-23"> {blog.date} </time>
              </div>

              <h3 className="h3 blog-item-title"> {blog.blogTitle} </h3>

              <p className="blog-text">{blog.blogDesc}</p>
            </div>
          </a>
        </li>
      </>
    );
  });
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">{blogs}</ul>
      </section>
    </article>
  );
};

export default Blogs;
