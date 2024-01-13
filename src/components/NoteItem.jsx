import React from "react";

import { showFormattedDate } from "../../utils";

function NoteItem({title, body, createdAt}) {
    //console.log("title:", title);
    //console.log("body:", body);
    //console.log("createdAt:", createdAt);
    
    return (
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <h6 className="note-item__created-at">{showFormattedDate(createdAt)}</h6>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItem;