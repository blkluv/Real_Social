import React from "react";
import "./post.scss";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { TextsmsOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Post({ post }) {
  //temp
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="post_name">{post.name}</span>
              </Link>
              <span className="post_date"> 1 min ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />} 12 likes
          </div>
          <div className="item">
            <TextsmsOutlined /> 2 comments
          </div>
          <div className="item">
            <ShareOutlined /> 1 share
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;