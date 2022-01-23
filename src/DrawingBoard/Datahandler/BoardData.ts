import {Pen} from './ToolData';

export interface BoardData {
    type: string;
    id: string;
    Pen: {
        data : Pen;
        points: Array<number>;
    };
}