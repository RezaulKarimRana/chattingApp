import React, { useEffect, useState } from "react";
import { AddFriendIcon } from "../../svg/AddFriend";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref as Ref } from "firebase/storage";
import avatarImage from "../../assets/man_avatar.png";
const UserList = () => {
  const user = useSelector((user) => user.login.loggedIn);
  const db = getDatabase();
  const storage = getStorage();
  const [users, setUsers] = useState([]);
  const [friendReqList, setFriendReqList] = useState([]);
  const [cancelReq, setCancelReq] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const users = [];
      snapshot.forEach((userList) => {
        if (user.uid !== userList.key) {
          getDownloadURL(Ref(storage, userList.key))
            .then((downloadURL) => {
              users.push({
                ...userList.val(),
                id: userList.key,
                photoURL: downloadURL,
              });
            })
            .catch((error) => {
              users.push({
                ...userList.val(),
                id: userList.key,
                photoURL: null,
              });
            })
            .then(() => {
              setUsers([...users]);
            });
        }
      });
      const data = snapshot.val();
      updateStarCount(postElement, data);
    });
  }, [db, user.uid, storage]);
  const handleFriendRequest = (data) => {
    set(push(ref(db, "friendRequest")), {
      senderName: user.displayName,
      senderId: user.uid,
      senderProfile: user.photoURL ?? "/src/assets/man_avatar.png",
      receiverName: data.username,
      reveiverId: data.id,
      receiverProfile: data.photoURL ?? "/src/assets/man_avatar.png",
    });
  };
  //show friend request
  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      let reqArr = [];
      let cancelReq = [];
      snapshot.forEach((item) => {
        reqArr.push(item.val().reveiverId + "" + item.val().senderId);
        cancelReq.push({ ...item.val(), id: item.key });
      });
      setFriendReqList(reqArr);
      setCancelReq(cancelReq);
    });
  }, [db]);
  const handleCancelReq = (itemId) => {
    const reqToCancel = cancelReq.find(
      (req) => req.receiverId == itemId && req.senderId == user.uid
    );
    if (reqToCancel) {
      remove(ref(db, "friendRequest/" + reqToCancel.id));
    }
  };
  return (
    <>
      <div className="px-8 pt-3 bg-[#FBFBFB] h-[700px]">
        <h1 className="font-fontBold text-black text-xl">All Users</h1>
        {users.map((item, i) => {
          <div className="flex items-center justify-between mt-5" key={i}>
            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={item.photoURL || avatarImage}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-fontRegular text-black text-lg">
                {item.username}
              </h3>
            </div>
            {friendReqList.includes(item.id + "" + user.uid) ||
            friendReqList.includes(user.uid + "" + item.id) ? (
              <button
                className="bg-red-500 px-4 py-2 rounded-md text-white font-fontRegular"
                onClick={() => handleCancelReq(item.id)}
              >
                Cancel Request
              </button>
            ) : (
              <div
                className="text-black cursor-pointer"
                onClick={() => handleFriendRequest(item)}
              >
                <AddFriendIcon />
              </div>
            )}
          </div>;
        })}
      </div>
    </>
  );
};

export default UserList;
