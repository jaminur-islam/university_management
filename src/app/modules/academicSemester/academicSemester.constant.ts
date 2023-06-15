import { ICode, ITitle, IMonth } from './academicSemester.interface';

export const titles: ITitle[] = ['Autumn', 'Summer', 'Fall'];

export const codes: ICode[] = ['01', '02', '03'];

export const months: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Sumer: '02',
  Fall: '03',
};
