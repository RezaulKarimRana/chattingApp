import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import avatarImage from "../../assets/man_avatar.png";
const Friends = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const user = useSelector((user) => user.login.loggedIn);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    let frndArr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (
          user.uid == item.val().senderId ||
          user.uid == item.val().receiverId
        ) {
          frndArr.push({ ...item.val(), id: item.key });
        }
      });
      setFriends(frndArr);
    });
  }, [db, user.uid]);
  return (
    <>
      <div className="shadow-md rounded-md bg-white p-5 h-[700px] overflow-y-auto">
        <h1 className="font-fontBold text-black text-xl">All Friends</h1>
        {friends?.map((item) => (
          <div className="flex items-center justify-between mt-3" key={item.id}>
            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                {user.uid == item.receiverId ? (
                  <img
                    src={item.currentProfile || avatarImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.receiverProfile || avatarImage}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-fontRegular text-black text-lg">
                {user.uid == item.senderId
                  ? item.receiverName
                  : item.senderName}
              </h3>
            </div>
            {location.pathname == "/" && (
              <button
                onClick={() => navigate("/message")}
                className="px-4 py-2 font-fontRegular bg-[#6CD0FB] text-white rounded-md"
              >
                Message
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Friends;
