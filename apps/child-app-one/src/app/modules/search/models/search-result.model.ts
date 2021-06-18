export interface SearchResult {
  title: string;
  mediaType: SearchType;
  platform: string;
  year: number;
}

export type SearchType = 'movie' | 'series' | 'episode' | 'game';
