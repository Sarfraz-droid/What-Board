import { DrawState} from './Datahandler/ToolData';
const turf = require('@turf/turf');
export function SmoothCurves(point:Array<number>){
  const pts:any = [];
  const n = point.length;
  for(let i = 0; i < point.length; i+= 12) {
    const pt: any = [];
    pt.push(point[i]);

    if (i + 1 < point.length) {
      pt.push(point[i + 1]);
    }
    pts.push(pt);
  }

  const pt:any = [];
  pt.push(point[n - 2]);
  pt.push(point[n - 1]);

  pts.push(pt);

  console.log(pts);

  if(pts.length <= 2){
    return point;
  }
  // console.log(turf.lineString(pts));
  // const Simplified:any = turf.bezierSpline(turf.lineString(
  //   pts));
  //
  // console.log("Simplified");
  // console.log(Simplified);
  const coordinates = pts;

  const newPoints:any = [];



  for(let i = 0; i < coordinates.length; i++){
    newPoints.push(coordinates[i][0]);
    newPoints.push(coordinates[i][1]);
  }

  console.log(newPoints);

  return newPoints as Array<number>;
}
