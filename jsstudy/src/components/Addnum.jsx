import React from 'react'

const Addnum = () => {
    
    
    const addnum = () =>{
        let addnum = 0;
        while(true){
            let num = prompt("숫자를입력하세요")
            addnum += parseInt(num);
            if(num===0){
                console.log("덧셈종료")
                break;
            }
            console.log("더한숫자 :"+ addnum)
        }
        }
    

  return (
    <div>
        {addnum}
    </div>
  )
}

export default Addnum
