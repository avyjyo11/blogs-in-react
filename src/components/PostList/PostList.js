import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Post from "./Post";

import { fetchPostAndUsers } from "../../redux/actions/posts";

class PostList extends React.Component {
  static propTypes = {
    blogs: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.blogs.map((post) => (
          <div className="card" key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect((store) => store, { fetchPostAndUsers })(PostList);
