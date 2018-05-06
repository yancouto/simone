// @flow
import type { Contest } from '../types';

export function filterContests(contests: Array<Contest>, from?: Date, to?: Date): Array<Contest> {
  contests = contests.filter((contest) => {
    if (from instanceof Date && contest.startTime instanceof Date)
      return contest.startTime >= from;
    else return false;
  });
  contests = contests.filter((contest) => {
    if (to instanceof Date && contest.startTime instanceof Date)
      return contest.startTime <= to;
    else return false;
  });
  return contests;
}