import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://epower.ng/wp-json/wp/v2/posts?page=2").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 6),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card my-2" key={post.id}>
            <div className="card-body">
              <Link to={"/" + post.id}>
                <span className="card-title">Hello World (post item)</span>
              </Link>
              <p>{post.date}</p>
              <p>{post.slug}</p>

              <img src={post.featured_image} className="card-img"></img>
            </div>
          </div>
        );
      })
    ) : (
      <div className="self-align-center">No post yet</div>
    );
    return (
      <div className="container">
        <h4 className="text-center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
