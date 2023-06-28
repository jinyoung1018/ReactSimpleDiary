import React, {useEffect, useState} from "react";

const UnmountTest = () =>{

    useEffect(()=> {
        console.log("mount")

        return() =>{
            //unmount되는 시점에 실행되게 됨
            console.log("Unmount");
        }
    },[]);

    return <div>Unmount Testing Component</div>
}

const LifeCycle = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    
    return (
        <div style={{padding:20}}>
            <button onClick={toggle}>on/off</button>
            {isVisible && <UnmountTest></UnmountTest>} 
            {/* isVisible이 true면 unmountTest 컴포넌트 렌더링, false면 렌더링 안함 */}
        </div>
    )

}

export default LifeCycle;

