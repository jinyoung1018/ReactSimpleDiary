import React, {useEffect, useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

    useEffect(()=> {
        console.log("DiaryEditor 렌더")
    });

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const authorInput = useRef();
    const contentInput = useRef();//dom요소 접근
    
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    const handleChangeState = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        console.log(state.author, state.content, state.emotion)

        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion: 1,

        }); // 값 초기화
        
    }

    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
              <input
                ref={authorInput} 
                name= "author"
                value={state.author} 
                placeholder="작성자"
                onChange={handleChangeState}
                // onChange={(e)=>{
                //  setState({
                //     ...state,
                //     author: e.target.value,
                //     // content: state.content,
                //  });
                // }}
                ></input>
        </div>

        <div>
            <textarea 
            ref={contentInput}
            name="content"
            value={state.content} 
            placeholder="일기"
            onChange={handleChangeState}
            // onChange={(e)=>{
            //     setState({
            //         ...state,
            //         content: e.target.value,
            //         // author: state.author,
            //     });
            // }}
            ></textarea>
        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};

export default React.memo(DiaryEditor);