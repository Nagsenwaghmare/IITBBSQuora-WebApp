
import React from 'react'
import './../StyleSheet/Post.css';
import {Avatar} from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
            <div className="post_info">
            <h2>Nagsen Waghmare</h2>
            <p>Descriptoion</p>
            </div>
        </div>
        <div className="post_body">
            <p>Message goes here</p>
        </div>
        <div className="post_button">
            <ThumbUpAltOutlinedIcon title="Like"/>
            <MessageOutlinedIcon title="Comment"/>
            <ShareOutlinedIcon title="Share"/>
   
                  </div>
        </div>
    )
}

export default post
