import React from "react";
import UserList from "../Components/UserList";
import FriendRequest from "../Components/FriendRequest";
import Friends from "../Components/Friends";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,4fr]">
        <div className="w-full">
          <UserList />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-20">
          <div>
            <FriendRequest />
          </div>
          <div>
            <Friends />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
