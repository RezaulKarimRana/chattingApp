import React from "react";
import { AddFriendIcon } from "../../svg/AddFriend";

const UserList = () => {
  return (
    <>
      <div className="px-8 pt-3">
        <h1 className="font-fontBold text-black text-xl">All Users</h1>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Md. Rezaul Karim
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Md. Rezaul Karim
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Md. Rezaul Karim
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 overflow-hidden"></div>
            <h3 className="font-fontRegular text-black text-lg">
              Md. Rezaul Karim
            </h3>
          </div>
          <div className="text-black cursor-pointer">
            <AddFriendIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
