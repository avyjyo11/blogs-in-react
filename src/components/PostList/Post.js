import React from "react";
import UserHeader from "./UserHeader";

class Post extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div className="content">
        <div className="header">{post.title}</div>
        <div className="meta">
          <UserHeader id={post.userId} />
        </div>
        <div className="description">{post.body}</div>
      </div>
    );
  }
}

export default Post;
