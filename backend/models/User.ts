import mongoose, { Model } from 'mongoose' // import가 최신 표준 문법. 안 되면 require 사용
import { ISchemaUser } from '../types/user'

const userSchema = new mongoose.Schema<ISchemaUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      select: false, // 조회 시 쿼리에서 제외
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },
    lastLoginAttempt: {
      type: Date,
    },
    ipAddress: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const User: Model<ISchemaUser> = mongoose.model('User', userSchema);

export default User;