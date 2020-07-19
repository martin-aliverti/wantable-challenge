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

  describe("getDetails", () => {
    it("should fetch and return an artrist details", async () => {
      const mockApiGet = (Api.get as jest.Mock).mockResolvedValueOnce(
        lastFmDetailsResponse
      );
      const expectedResult = {
        name: "Madonna",
        mbid: "79239441-bfd5-4981-a70c-55c3f15c1287",
        url: "https://www.last.fm/music/Madonna",
        bio: {
          links: {
            link: {
              "#text": "",
              rel: "original",
              href: "https://last.fm/music/Madonna/+wiki",
            },
          },
          published: "10 Feb 2006, 15:15",
          summary:
            'Often called the "Queen of Pop", Madonna is labeled by international authors as the greatest woman in music, as well as the most influential and successful female recording artist of all time,also the fourth best selling recording artist of all time. Madonna is considered by many to be a global cultural icon, and her impact is often compared with that of The Beatles and Elvis Presley. Madonna was born Madonna Louise Ciccone, on 16 August 1958 in Bay City, Michigan, USA). <a href="https://www.last.fm/music/Madonna">Read more on Last.fm</a>',
          content:
            'Often called the "Queen of Pop", Madonna is labeled by international authors as the greatest woman in music, as well as the most influential and successful female recording artist of all time,also the fourth best selling recording artist of all time. Madonna is considered by many to be a global cultural icon, and her impact is often compared with that of The Beatles and Elvis Presley. Madonna was born Madonna Louise Ciccone, on 16 August 1958 in Bay City, Michigan, USA).\n\nThroughout her career, many of her songs have hit number one on international music charts, including Like a Virgin, Papa Don\'t Preach, Like a Prayer, Vogue, Frozen, Music, Hung Up, and 4 Minutes (feat. Justin Timberlake & Timbaland). Madonna has been praised by critics for her diverse musical productions while at the same time serving as a lightning rod for religious controversy, specifically and especially with the Catholic Church.\n\nHer career has been further enhanced by film appearances, despite mixed reviews. She won critical acclaim and a Golden Globe Award for Best Actress in a Motion Picture Musical or Comedy for her role in Evita (1996), but has received harsh feedback for other film roles. Madonna\'s other ventures include being a fashion designer, children\'s book author, film director and producer. She has been acclaimed as a businesswoman, and signed an unprecedented US$120 million contract with Live Nation in 2007.\n\nMadonna has sold more than 300 million records worldwide and is recognized as the world\'s top-selling female recording artist of all time by the Guinness World Records. In 2008, Billboard magazine ranked Madonna number two (after The Beatles) on the Billboard Hot 100 All-Time Top Artists, making her the most successful solo artist in the history of the chart. Considered to be one of the "25 Most Powerful Women of the 20th Century" by Time for being an influential figure in contemporary music, Madonna is known for continuously reinventing both her music and image, and for retaining a standard of autonomy within the recording industry. She is recognized as an inspiration among numerous music artists.\n\nAfter signing to Sire Records in 1982, Madonna\'s debut single Everybody was released in October of the same year. One year later, her eponymous debut album followed, and since then hits such as Holiday, Like a Virgin, Papa Don’t Preach and Like a Prayer catapulted her to massive success. By the 1990s, her commercially successful albums, constantly reinvented image, groundbreaking music videos and controversial nature would earn her the title “Queen of Pop.”\n\nApart from achieving 12 No.1 singles, 38 top 10 singles and 49 top 40 hits on the U.S. Billboard Hot 100, Madonna also maintains the record for the most separate calendar weeks as a female artist with a charting single in any position (853+ weeks). She has also garnered 21 MTV Video Music Awards - the most by any artist (including the special Video Vanguard Award), eight Grammy Awards, as well as a Best Actress (Musical or Comedy) Golden Globe Award for her performance in “Evita”. Two soundtrack cuts performed by Madonna, "Sooner or Later" and "You Must Love Me", have been awarded with Academy Awards (Oscars). On the United World Chart, Madonna is the Most Successful Singles Artist of All Time and has a record of 22 number one singles. Madonna also holds the record of 50 #1 Hot Dance Club Play hits in the US, the most for any artist ever. Her 2008-2009 Sticky & Sweet Tour remains the two highest-grossing concert tour ever by a female solo artist, having grossed US$ 408 million.\n\nMadonna\'s 13th studio album, Rebel Heart, was released in March 2015. Initially scheduled for release in late April 2015, the release of the album was brought forward to early March 2015 following the leak of several early demo recordings in December 2014, while six tracks from the album were officially released into iTunes on 20 December 2014. On the same day, Living for Love was released as the album\'s lead single.Madonna is known for pushing the boundaries of songwriting in popular music and for the visuals she uses onstage and in music videos. She has frequently retooled her image while remaining completely in charge of every aspect of her career, and she is recognized for her versatility, having incorporated several genres into her music. Her works, which incorporate social, political, sexual, and religious themes, have generated both critical acclaim and controversy. Madonna is often cited as an influence by other artists. <a href="https://www.last.fm/music/Madonna">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
        },
      };
      const detailsResult = await ArtistService.getDetails("madonna");
      expect(mockApiGet).toHaveBeenCalledWith(
        "method=artist.getInfo&artist=madonna"
      );
      expect(detailsResult).toMatchObject(expectedResult);
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

const lastFmDetailsResponse = {
  artist: {
    name: "Madonna",
    mbid: "79239441-bfd5-4981-a70c-55c3f15c1287",
    url: "https://www.last.fm/music/Madonna",
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
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "",
      },
    ],
    streamable: "0",
    ontour: "0",
    stats: {
      listeners: "3262775",
      playcount: "171212560",
    },
    tags: {
      tag: [
        {
          name: "pop",
          url: "https://www.last.fm/tag/pop",
        },
        {
          name: "dance",
          url: "https://www.last.fm/tag/dance",
        },
        {
          name: "female vocalists",
          url: "https://www.last.fm/tag/female+vocalists",
        },
        {
          name: "80s",
          url: "https://www.last.fm/tag/80s",
        },
        {
          name: "electronic",
          url: "https://www.last.fm/tag/electronic",
        },
      ],
    },
    bio: {
      links: {
        link: {
          "#text": "",
          rel: "original",
          href: "https://last.fm/music/Madonna/+wiki",
        },
      },
      published: "10 Feb 2006, 15:15",
      summary:
        'Often called the "Queen of Pop", Madonna is labeled by international authors as the greatest woman in music, as well as the most influential and successful female recording artist of all time,also the fourth best selling recording artist of all time. Madonna is considered by many to be a global cultural icon, and her impact is often compared with that of The Beatles and Elvis Presley. Madonna was born Madonna Louise Ciccone, on 16 August 1958 in Bay City, Michigan, USA). <a href="https://www.last.fm/music/Madonna">Read more on Last.fm</a>',
      content:
        'Often called the "Queen of Pop", Madonna is labeled by international authors as the greatest woman in music, as well as the most influential and successful female recording artist of all time,also the fourth best selling recording artist of all time. Madonna is considered by many to be a global cultural icon, and her impact is often compared with that of The Beatles and Elvis Presley. Madonna was born Madonna Louise Ciccone, on 16 August 1958 in Bay City, Michigan, USA).\n\nThroughout her career, many of her songs have hit number one on international music charts, including Like a Virgin, Papa Don\'t Preach, Like a Prayer, Vogue, Frozen, Music, Hung Up, and 4 Minutes (feat. Justin Timberlake & Timbaland). Madonna has been praised by critics for her diverse musical productions while at the same time serving as a lightning rod for religious controversy, specifically and especially with the Catholic Church.\n\nHer career has been further enhanced by film appearances, despite mixed reviews. She won critical acclaim and a Golden Globe Award for Best Actress in a Motion Picture Musical or Comedy for her role in Evita (1996), but has received harsh feedback for other film roles. Madonna\'s other ventures include being a fashion designer, children\'s book author, film director and producer. She has been acclaimed as a businesswoman, and signed an unprecedented US$120 million contract with Live Nation in 2007.\n\nMadonna has sold more than 300 million records worldwide and is recognized as the world\'s top-selling female recording artist of all time by the Guinness World Records. In 2008, Billboard magazine ranked Madonna number two (after The Beatles) on the Billboard Hot 100 All-Time Top Artists, making her the most successful solo artist in the history of the chart. Considered to be one of the "25 Most Powerful Women of the 20th Century" by Time for being an influential figure in contemporary music, Madonna is known for continuously reinventing both her music and image, and for retaining a standard of autonomy within the recording industry. She is recognized as an inspiration among numerous music artists.\n\nAfter signing to Sire Records in 1982, Madonna\'s debut single Everybody was released in October of the same year. One year later, her eponymous debut album followed, and since then hits such as Holiday, Like a Virgin, Papa Don’t Preach and Like a Prayer catapulted her to massive success. By the 1990s, her commercially successful albums, constantly reinvented image, groundbreaking music videos and controversial nature would earn her the title “Queen of Pop.”\n\nApart from achieving 12 No.1 singles, 38 top 10 singles and 49 top 40 hits on the U.S. Billboard Hot 100, Madonna also maintains the record for the most separate calendar weeks as a female artist with a charting single in any position (853+ weeks). She has also garnered 21 MTV Video Music Awards - the most by any artist (including the special Video Vanguard Award), eight Grammy Awards, as well as a Best Actress (Musical or Comedy) Golden Globe Award for her performance in “Evita”. Two soundtrack cuts performed by Madonna, "Sooner or Later" and "You Must Love Me", have been awarded with Academy Awards (Oscars). On the United World Chart, Madonna is the Most Successful Singles Artist of All Time and has a record of 22 number one singles. Madonna also holds the record of 50 #1 Hot Dance Club Play hits in the US, the most for any artist ever. Her 2008-2009 Sticky & Sweet Tour remains the two highest-grossing concert tour ever by a female solo artist, having grossed US$ 408 million.\n\nMadonna\'s 13th studio album, Rebel Heart, was released in March 2015. Initially scheduled for release in late April 2015, the release of the album was brought forward to early March 2015 following the leak of several early demo recordings in December 2014, while six tracks from the album were officially released into iTunes on 20 December 2014. On the same day, Living for Love was released as the album\'s lead single.Madonna is known for pushing the boundaries of songwriting in popular music and for the visuals she uses onstage and in music videos. She has frequently retooled her image while remaining completely in charge of every aspect of her career, and she is recognized for her versatility, having incorporated several genres into her music. Her works, which incorporate social, political, sexual, and religious themes, have generated both critical acclaim and controversy. Madonna is often cited as an influence by other artists. <a href="https://www.last.fm/music/Madonna">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
    },
  },
};
