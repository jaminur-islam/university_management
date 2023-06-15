import { Model } from 'mongoose';

export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type ITitle = 'Autumn' | 'Summer' | 'Fall';

export type ICode = '01' | '02' | '03';

export type IAcademicSemester = Document & {
  title: ITitle;
  year: number;
  code: ICode;
  startMonth: IMonth;
  endMonth: IMonth;
};

// type AcademicSemesterMethod = {
//     fullName(): string;
// }

export type IAcademicSemesterModel = Model<
  IAcademicSemester,
  Record<string, never>
>;
