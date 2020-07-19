import Api from "../utils/Api";
import ArtistService from "./ArtistService";

jest.mock("../utils/Api", () => ({
  get: jest.fn(),
}));

describe("ArtistService", () => {
  describe("search", () => {
    it("should return an array of artists", async () => {
      const mockApiGet = (Api.get as jest.Mock).mockResolvedValueOnce(
        lastFmSearchResponse
      );
      const expectedResult = [
        {
          name: "Madonna",
          listeners: "3263626",
          mbid: "79239441-bfd5-4981-a70c-55c3f15c1287",
        },
      ];
      const searchResult = await ArtistService.search("madonna");
      expect(mockApiGet).toHaveBeenCalledWith(
        "method=artist.search&artist=madonna"
      );
      expect(searchResult).toMatchObject(expectedResult);
    });
  });
});

const lastFmSearchResponse = {
  results: {
    "opensearch:Query": {
      "#text": "",
      role: "request",
      searchTerms: "madonna",
      startPage: "1",
    },
    "opensearch:totalResults": "33213",
    "opensearch:startIndex": "0",
    "opensearch:itemsPerPage": "30",
    artistmatches: {
      artist: [
        {
          name: "Madonna",
          listeners: "3263626",
          mbid: "79239441-bfd5-4981-a70c-55c3f15c1287",
          url: "https://www.last.fm/music/Madonna",
          streamable: "0",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
          ],
        },
      ],
    },
  },
};
