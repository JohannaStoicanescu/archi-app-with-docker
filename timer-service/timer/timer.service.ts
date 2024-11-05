import Timer from "./timer.model";

export class TimerService {
  constructor() {}

  async getTimer(user_id: string) {
    return await Timer.findOne({ user_id });
  }

  async addTimer(timerData: { user_id: string; time: number }) {
    const newTimer = new Timer(timerData);
    return await newTimer.save();
  }
}
