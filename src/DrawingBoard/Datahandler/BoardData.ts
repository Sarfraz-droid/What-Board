import {Pen} from './ToolData';

export interface BoardData {
    type: string;
    id: number;
    Pen: {
        data : Pen;
        points: Array<number>;
    };
}