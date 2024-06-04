import React from 'react'

const App2 = () => {
    
    const bysum = () => {
    let by = 1;
       let num2 = parseInt(prompt("배수 입력")) 
       let num3 = 0;
       let addnum = 0;
       do{
            console.log(num3)
            num3 = num2 * by++
            if(num3<100){addnum += num3}
       }while(num3<100)
       console.log("배수의 합 : ", addnum)
    }
    const school = () => {
        document.write("<table style={{'border='1px''}}>")
        for(let i=1;i<=6;i++){
            document.write("<tr>")
            document.write("<td>")
            for(let j=1;j<=12;j++){
                document.write(i+"학년"+j+"반 ")
            }
            document.write("</td>")
            document.write("</tr>")
        }
        document.write("<table>")
    }
  return (
    <div>
        <button onClick={(bysum)}>합계 구하기</button>
        <button onClick={(school)}>학교 정보</button>
    </div>
  )
}

export default App2
