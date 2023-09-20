
export const initiaBoardlState = [];

for(let i=0;i<10;i++){
    const column =[]
    for(let j=0;j<20;j++){
        column.push({ isfull: false, color: "black" })
    }
    initiaBoardlState.push(column)
}
