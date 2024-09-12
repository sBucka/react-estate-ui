import "./profilePage.scss";

import { userData } from "../../lib/dummyData";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div class="details">
        <div class="wrapper">
          <div class="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div class="info">
            <span>
              Avatar: <img src={userData.img} alt="" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
          </div>
          <div class="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List>
            <div class="title">
              <h1>Saved List</h1>
            </div>
          </List>
        </div>
      </div>
      <div class="chatContainer">
        <div class="wrapper">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
