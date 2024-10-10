import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema(
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

const Timer = mongoose.model("Timer", TimerSchema);
export default Timer;
