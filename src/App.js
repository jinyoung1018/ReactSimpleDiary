import { useRef, useState } from 'react';
import './App.css';

import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';
import LifeCycle from './Lifecycle';

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

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`)
    const newDiaryList  = data.filter((it) => it.id !== targetId); //id가 targetId와 같지 않은 요소들만 새로운 배열로 반환
    setData(newDiaryList);
  }

  const onEdit = (targetId,newContent) =>{
    setData(
      data.map((it)=> 
      it.id ===targetId ? { ...it, content: newContent} : it
      )
    )

  }

  return (
    <div className="App">
      <LifeCycle></LifeCycle>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
