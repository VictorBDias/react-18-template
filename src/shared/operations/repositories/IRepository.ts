import { type SetState } from 'shared/interfaces';

import { type IBaseRepository } from '../interfaces/IBaseRepository';

export interface IRepository<T> extends IBaseRepository<T> {
  state: T[];
  entity?: T;
  setState: SetState<T[]>;
  setEntity: SetState<T | undefined>;
}
