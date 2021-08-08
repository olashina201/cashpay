import React from "react";
import LineCharts from "../../charts/LineChart";

function BottomChart({ user }) {
  return (
    <div className="bottomBox">
      <div className="spentTime">
        <header>
          <h1>Spent time</h1>
        </header>
        <div className="chartContaine">
          <LineCharts />
        </div>
      </div>
      <div className="tweet">
        <div className="profileContainer">
          <div className="profileImage"></div>
          <div className="profileInfo">
            <span className="name">{`${user.firstname} ${user.lastname}`}</span>
            <span className="title">Web Developer</span>
          </div>
        </div>
        <h1>How to properly manage your personal budget?</h1>
        <div className="badgesContainer">
          <div className="tweetBadge">
            <i className="icofont-play-alt-1"></i>
            <span>Video</span>
          </div>
          <div className="tweetBadge">
            <i className="icofont-clock-time"></i>
            <span>15 mins</span>
          </div>
          <div className="tweetBadge">
            <i className="icofont-star"></i>
            <span>12 likes</span>
          </div>
        </div>
        <div className="tweetBottomContainer">
          <span className="time">5 days ago</span>
          <a href="#" className="connect">
            Connect<i className="icofont-rounded-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomChart;
