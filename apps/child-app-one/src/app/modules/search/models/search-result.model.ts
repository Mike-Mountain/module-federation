export interface SearchResult {
  title: string;
  mediaType: 'movie' | 'series' | 'episode' | 'game';
  platform: string;
  year: number;
}
