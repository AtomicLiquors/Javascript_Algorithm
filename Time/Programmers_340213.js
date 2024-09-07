function solution(video_len, pos, op_start, op_end, commands) {
    
    function parseTime(string) {
        const mmss = string.split(':').map(Number);
        return mmss[0] * 60 + mmss[1];
    }
    
    function skipOpeningResult(pos, start, end) {
        if (pos >= start && pos <= end)
            return end;
        else
            return pos;
    }
    
    function getTwoDigitNum(num){
        return num.toString().padStart(2, 0);
    }
    
    const lengthInSec = parseTime(video_len);
    const movement = 10;
    
    let posInSec = parseTime(pos);
    
    const opStartInSec = parseTime(op_start);
    const opEndInSec = parseTime(op_end);
    
    
    commands.forEach((cmd) => {
        switch(cmd){
            case "prev":
                posInSec = Math.max(0, posInSec - movement);
                posInSec = skipOpeningResult(posInSec, opStartInSec, opEndInSec);
                break;
            case "next":
                posInSec = skipOpeningResult(posInSec, opStartInSec, opEndInSec);
                posInSec = Math.min(lengthInSec, posInSec + movement);                
                posInSec = skipOpeningResult(posInSec, opStartInSec, opEndInSec);
                break;
        }
        
    });
    
    return `${getTwoDigitNum(Math.floor(posInSec / 60))}:${getTwoDigitNum(posInSec % 60)}`;

}

