"use strict";

{
    let output = document.getElementById("output");
    let demo1 = document.getElementById("demo1");

    demo1.addEventListener("click", ()=>{
        // UIを触る処理
        while(output.firstChild) output.removeChild(output.firstChild);
        // 時間のかかる処理
        let all = 100000
        let sosuuCount = 0;
        for(let i = 2; i <= all; i++) {
            for(let j = 2; j < i; j++){
                if(i % j === 0){
                    sosuuCount++;
                    break;
                }
            }
        }
        // UIを触る処理
        let div = document.createElement("div");
        div.appendChild(document.createTextNode((all-sosuuCount-1)));
        output.appendChild(div);
    }, false);
    
}



