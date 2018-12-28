"use strict";

self.addEventListener("message",(ev)=>{
    if(ev.data["type"] === "start") {
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
        self.postMessage({"type":"add", "value":(all-sosuuCount-1)});
    }
});
