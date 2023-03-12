export interface IAssessment {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}
export type AssessmentsList = IAssessment[];
export interface IGraphApiResponse {
  data: IGraphData;
  type: string;
}
export interface IGraphData {
  agreeableness: number;
  drive: number;
  luck: number;
  openness: number;
}

interface IGraphItem {
  name: string;
  value: number;
}
export type IGraphDataForChart = IGraphItem[];

export interface IUser {
  name: string;
  lastName: string;
  dateOfBirth: string;
  education: string;
  role: string;
  position: string;
}
export type UsersList = IUser[];
