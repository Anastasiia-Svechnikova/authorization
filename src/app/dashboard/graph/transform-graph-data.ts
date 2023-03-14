import {
  IGraphData,
  GraphDataForChart,
} from 'src/app/_core/models/assessments.model';
/** Takes an object with graph data of type IGraphData
 * and returns the same data as type IGraphDataForChart with capitalized name values */
export const transformGraphData = (data: IGraphData): GraphDataForChart => {
  const modifiedData = [];
  for (const key of Object.keys(data)) {
    const title = `${key[0].toUpperCase()}${key.slice(1)}`;
    modifiedData.push({ name: title, value: data[key as keyof IGraphData] });
  }
  return modifiedData;
};
