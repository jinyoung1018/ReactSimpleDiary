import './App.css';

import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author: "백진영",
    content: "하이 1",
    emotion:5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author: "박하영",
    content: "하이 2",
    emotion:3,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author: "변영무",
    content: "하이 4",
    emotion:5,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummyList}></DiaryList>
    </div>
  );
}

export default App;
