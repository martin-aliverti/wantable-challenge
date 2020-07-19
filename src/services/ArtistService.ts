import Api from "../utils/Api";

export type Artist = {
  name: string;
  listeners: string;
  mbid: string;
};

export default {
  search: async (artistName: string): Promise<Artist[]> => {
    const response = await Api.get(`method=artist.search&artist=${artistName}`);
    return response.results.artistmatches.artist;
  },
};
