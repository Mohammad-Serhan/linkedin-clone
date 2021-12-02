import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from "./InputOption";
import Post from "./Post";
// import { db } from "./firebase";

function Feed() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection("posts").onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map(doc => {
    //             {
    //                 id: doc.id;
    //                 data: doc.data()
    //             }
    //         }))
    //     })
    // }, []);


    const sendPost = (e) => {
        e.preventDefault();
    }; 

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit" onClick={sendPost} >Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
        <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
        <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
        <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
         
        </div>
      </div>


      {/* Posts */}
      {/* {posts.map((post) => {
          <Post />
      })} */}
    <Post name="Mohamad Serhan" description="This is a test" message="Wow this  worked"/>

    </div>
  );
}

export default Feed;
