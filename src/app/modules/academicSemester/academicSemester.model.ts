import { Schema, model } from 'mongoose';
import {
  IAcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import { codes, months, titles } from './academicSemester.constant';
import { ApiError } from '../../../errors/ApiError';
import httpStatus from 'http-status';

const semesterSchema = new Schema<IAcademicSemester, IAcademicSemesterModel>(
  {
    title: {
      type: String,
      required: true,
      enum: titles,
    },
    year: { type: Number, required: true },
    code: {
      type: String,
      required: true,
      enum: codes,
    },
    startMonth: { type: String, required: true, enum: months },
    endMonth: { type: String, required: true, enum: months },
  },
  {
    timestamps: true,
  }
);

semesterSchema.pre('save', async function (next) {
  const result = await AcademicSemester.findOne({
    title: this?.title,
    year: this.year,
  });
  if (result) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exit'
    );
  }

  next();
});

export const AcademicSemester = model<
  IAcademicSemester,
  IAcademicSemesterModel
>('AcademicSemester', semesterSchema);

// // define a instance method
// function getUserByEmail(this: IUser, email: string) {
//     console.log(this.name, this.email);
//     return this.$model("user").find({ email })
// }

// userSchema.method("getUserByEmail", getUserByEmail)

// userSchema.static("getUserById", function (email) {
//     return this.find({ email })
// })
