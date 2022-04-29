export type AlbumTypes = {
  userId: number;
  id: number;
  title: string;
};

export type PhotoTypes = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
