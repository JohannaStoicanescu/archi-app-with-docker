import mongoose, { Schema } from "mongoose";

export interface Timer extends Document {
  user_id: string;
  time: number;
}

const TimerSchema: Schema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model<Timer>("Timer", TimerSchema);
