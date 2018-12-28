"use strict";

{
    let output = document.getElementById("output");
    let demo1 = document.getElementById("demo2");
    let worker = new Worker("demo2.worker.js");

    demo1.addEventListener("click", ()=>{
        // UIを触る処理
        while(output.firstChild) output.removeChild(output.firstChild);
        // 時間のかかる処理をバックグラウンドで処理
        worker.postMessage({"type":"start"});
    }, false);

    worker.addEventListener("message",(ev)=>{
        // UIを触る処理
        let div = document.createElement("div");
        div.appendChild(document.createTextNode(ev.data.value));
        output.appendChild(div);
    });
    
}



