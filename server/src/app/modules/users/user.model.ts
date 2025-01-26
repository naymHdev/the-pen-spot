import { model, Schema } from 'mongoose';
import { TUser, UserPassHas } from './user.interface';
import { Role, Status } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserPassHas>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: {
      values: Role,
      message: '{VALUE} is not supported',
    },
    default: 'user',
  },
  status: {
    type: String,
    enum: {
      values: Status,
      message: '{VALUE} is not supported',
    },
    required: true,
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Password hashed
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post '' after save middleware in db
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
  return await UserModel.findOne({ email }).select('+password');
};

userSchema.statics.isUserPasswordMatch = async function (
  plainTextPass,
  hasPass,
) {
  return await bcrypt.compare(plainTextPass, hasPass);
};

export const UserModel = model<TUser, UserPassHas>('UserModel', userSchema);
