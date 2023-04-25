export interface IBaseRepository<T> {
  replaceList: (data: T[]) => void;
  appendList: (data: T[]) => void;
  create: (data: T) => void;
  append: (data: T) => void;
  update: (id: number | string, data: T) => void;
  destroy: (id: number | string) => void;
}
