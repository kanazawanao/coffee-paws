export type SearchResult<Record> = {
  records: Record[];
  nextPageToken: string | null;
};
