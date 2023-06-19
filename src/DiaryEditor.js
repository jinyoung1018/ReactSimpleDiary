import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
    })
    
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
              <input 
                value={author} 
                onChange={(e)=>{
                 setAuthor(e.target.value)
                }}></input>
        </div>

        <div>
            <textarea value={content} onChange={(e)=>{
                setContent(e.target.value)
            }}></textarea>
        </div>
    </div>
    );
};

export default DiaryEditor;