import mongoose, { Document, Model } from 'mongoose' // import가 최신 표준 문법. 안 되면 require 사용

interface IUser extends Document {
  username: string;
  password: string;
  isLoggedIn: boolean;
  isActive: boolean;
  failedLoginAttempts: number;
  lastLoginAttempt: Date;
  ipAddress: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
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

const User: Model<IUser> = mongoose.model('User', userSchema);

module.exports = User;
