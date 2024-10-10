import Timer from "./timer.model";

interface TimerData {
  user_id: string;
  time: number;
}

export class TimerService {
  constructor() {}

  async getTimer(user_id: string): Promise<TimerData | null> {
    try {
      return await Timer.findOne({ user_id });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addTimer(timerData: TimerData) {
    try {
      const newTimer = new Timer(timerData);
      return await newTimer.save();
    } catch (error) {
      console.error("Error saving new timer to DB:", error);
      throw error;
    }
  }
}
