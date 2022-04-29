import axios from "axios";
import { AlbumTypes, PhotoTypes } from "../types/types";

const https = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAllAlbums: async (): Promise<AlbumTypes[]> => {
    return (await https.get("/albums")).data;
  },
  getAllAlbumPhotos: async (
    albumNumber: string | undefined
  ): Promise<PhotoTypes[]> => {
    return (await https.get(`/albums/${albumNumber}/photos`)).data;
  },
  getBigPhoto: async (photoNumber: string | undefined): Promise<PhotoTypes> => {
    return (await https.get(`/photos/${photoNumber}`)).data;
  },
};
