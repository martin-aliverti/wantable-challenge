import Api from "../utils/Api";

export type Artist = {
  name: string;
  listeners: string;
  mbid: string;
};

export type ArtistDetail = {
  name: string;
  url: string;
  bio: {
    published: string;
    summary: string;
    content: string;
  };
};

export default {
  search: async (artistName: string): Promise<Artist[]> => {
    const response = await Api.get(`method=artist.search&artist=${artistName}`);
    return response.results.artistmatches.artist;
  },

  getDetails: async (artistName: string): Promise<ArtistDetail> => {
    const response = await Api.get(
      `method=artist.getInfo&artist=${artistName}`
    );
    return response.artist;
  },
};
