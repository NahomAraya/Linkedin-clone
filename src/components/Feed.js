import React, { useState, useEffect } from 'react';
import "./Feed.css";
import InputOptions from './InputOptions';
import Post from './Post';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Create } from '@material-ui/icons';
import { db } from '../firebase/firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                    id: doc.id,
                    data : doc.data(),
                }))
            )
        );
        
    }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,//user.description..get from registrationS
            message: input,
            photoUrl: user.photoURL || user.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)}  type="text"/>
                        <button type="submit" onClick={sendPost}>Post</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="orange"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="blue"/>
                    <InputOptions Icon={EventIcon} title="Events" color="red"/>
                    <InputOptions Icon={CalendarTodayIcon} title="Date" color="yellow"/>
                </div>
                

            </div>
            <FlipMove>
            {posts.map(({id, data:{name, description, message, photoUrl}}) =>(
                <Post
                    key = {id}
                    name= {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}
            </FlipMove>
           
        </div>
    )
}

export default Feed;
