import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContexts";

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if(!user){
            history.push('/');

            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "acee97be-7aee-4170-8273-724d3e4cfdb4",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('usename', user.email);
            formData.append('secret', user.uid);

            getFile(user.photoURL)
            .then((avatar) => {
                formData.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users',
                formData,
                {headers: {"private-key": "0d72be4d-3f85-4bde-894a-30ad6e52ecd7"}}
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
            })
        })
    }, [user, history]);
    
    if(!user || loading) return 'Loading...';

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    WhatChat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
              height="calc(100vh - 66px)"
              projectID="acee97be-7aee-4170-8273-724d3e4cfdb4"
              userName={user.email}
              userSecret={user.uid}
              />
        </div>
    );
};

export default Chats;