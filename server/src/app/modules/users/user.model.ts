import { model, Schema } from 'mongoose';
import { TUser, UserPassHas } from './user.interface';
import { UserStatus } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserPassHas>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  status: {
    type: String,
    enum: UserStatus,
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

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await UserModel.findOne({ id }).select('+password');
};

userSchema.statics.isUserPasswordMatch = async function (
  plainTextPass,
  hasPass,
) {
  return await bcrypt.compare(plainTextPass, hasPass);
};

export const UserModel = model<TUser, UserPassHas>('UserModel', userSchema);
