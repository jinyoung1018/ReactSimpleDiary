import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const getData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()); //api호출

    const initData= res.slice(0,20).map((it)=>{
      return{
        author : it.email,
        content: it.body,
        emotion: Math.floor(Math.random()*5)+1, //1-5까지 랜덤으로
        created_date: new Date().getTime(),
        id: dataId.current++
      }

    });

    setData(initData);

  };

  useEffect(()=> {
    getData();
  },[])

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };
    dataId.current += 1;
    setData((data)=>[newItem, ...data]);

  },[]);

  // const onRemove = (targetId) => {
  //   const newDiaryList  = data.filter((it) => it.id !== targetId); //id가 targetId와 같지 않은 요소들만 새로운 배열로 반환
  //   setData(newDiaryList);
  // } 최적화 하기 전

  const onRemove = useCallback((targetId) => {
    setData(data => data.filter((it) => it.id !== targetId));
  },[])

  const onEdit = useCallback((targetId,newContent) =>{
    setData(data=>
      data.map((it)=> 
      it.id ===targetId ? { ...it, content: newContent} : it
      )
    )
  }, []);

  const getDiaryAnalysis = useMemo(() =>{//useMemo를 사용하게 되면 getDiaryAnalysis는 더이상 함수가 아님, 하나의 값암

    const goodCount = data.filter((it)=> it.emotion >=3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount,badCount,goodRatio};
  },[data.length]); //data.length의 값이 바뀔 때만 함수 실행
  

  const {goodCount,badCount,goodRatio} = getDiaryAnalysis;

  return ( 
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <div>전체 일기 개수: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
