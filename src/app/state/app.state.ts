import { User } from '../core/services/data.service';

export interface AppState {
  auth: {
    user: User | null;
  };
  student: {
    selectedSubjects: string[];
  };
  sessions: {
    activeSessionId: string | null;
  };
}
