import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })
    
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    const handleChangeState = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
        alert("저장 성공")
    }

    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
              <input 
                name= "author"
                value={state.author} 
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
            name="content"
            value={state.content} 
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

export default DiaryEditor;