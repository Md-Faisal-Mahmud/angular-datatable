

export enum SortOrderType {
  Ascending = 1,
  Descending = 2
}

export interface SortOrder {
  name: string;
  order: SortOrderType
}
