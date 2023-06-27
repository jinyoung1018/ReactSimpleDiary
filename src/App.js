import { useRef, useState } from 'react';
import './App.css';

import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);

  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`)
    const newDiaryList  = data.filter((it) => it.id !== targetId); //id가 targetId와 같지 않은 요소들만 새로운 배열로 반환
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onDelete={onDelete} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
