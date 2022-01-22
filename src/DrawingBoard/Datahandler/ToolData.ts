export interface Pen{
    color:string;
    width:number;
    isEraser:boolean;
}

export interface DrawState{
    currentPen: string;
    Pen: Pen
}


export const Default_Pen:Pen = {
    color: '#000000',
    width: 5,
    isEraser: false,
}

export const Default_DrawState:DrawState = {
    currentPen: 'pen',
    Pen: Default_Pen
}