import React, { Component } from "react";
import CarItem from "./CarItem";

export class Cars extends Component {
  artices = [
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "PA Staff",
      title:
        "Football rumours: Leicester too ‘cash-strapped’ to sack boss Brendan Rodgers",
      description:
        "“Cash-strapped” Leicester are calculating the cost of sacking Brendan Rodgers after the club suffered its sixth consecutive defeat, plummeting them to the bottom of the Premier League, according t",
      url: "https://www.fourfourtwo.com/news/football-rumours-leicester-too-cash-strapped-to-sack-boss-brendan-rodgers-1663651904000",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/9HN22kEPoWRSHpsNNMeLGd-1200-80.jpg",
      publishedAt: "2022-09-20T05:31:44Z",
      content:
        "What the papers say\r\n“Cash-strapped” Leicester are calculating the cost of sacking Brendan Rodgers after the club suffered its sixth consecutive defeat, plummeting them to the bottom of the Premier L… [+2194 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "FOX Sports",
      title: "Penn State, Washington among teams with 'quiet statement wins'",
      description:
        "FOX Sports college football analyst Joel Klatt dives into three programs that notched statement wins during Week 3 of the season.",
      url: "http://www.foxsports.com/stories/college-football/penn-state-washington-among-teams-with-quiet-statement-wins",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/09.12.22-Sean-Clifford.png?ve=1&tl=1",
      publishedAt: "2022-09-20T00:28:32Z",
      content:
        "Penn State running back Nick Singleton is on an ascending path to college football stardom.\r\nThe Nittany Lions freshman back ran all over Auburn in a dominant 41-12 victory Saturday. He totaled 124 y… [+5341 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title: "Beyond Meat exec accused of biting man's nose outside a game",
      description:
        "Officials say a vegan food products company executive has been charged with felony battery and making a terroristic after a fracas outside a football game in which he's accused of biting a man's nose",
      url: "https://abcnews.go.com/US/wireStory/meat-exec-accused-biting-mans-nose-game-90180880",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2022-09-19T23:23:00Z",
      content:
        "FAYETTEVILLE, Ark. -- An executive of a vegan food products company has been charged with felony battery and making a terroristic threat after a fracas outside a football game in which hes accused of… [+1187 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "National Football League\n     \n        49ers QB Trey Lance has successful surgery on broken ankle\n       \n      22 mins ago",
      description:
        "Niners quarterback Trey Lance had successful surgery on his broken ankle Monday, thanking fans for their support on Twitter.",
      url: "http://www.foxsports.com/stories/nfl/49ers-qb-trey-lance-suffers-broken-ankle-out-for-season",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/Lance-1.png?ve=1&tl=1",
      publishedAt: "2022-09-19T22:52:29.8416535Z",
      content:
        'San Francisco 49ers quarterback Trey Lance had successful surgery Monday after suffering a fractured ankle against the Seattle Seahawks in Week 2.\r\n"Truly appreciate all of the messages and prayers,"… [+2761 chars]',
    },
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "PA Staff",
      title:
        "Callum O’Dowda has ‘unfinished business’ ahead of Ireland’s Nations League games",
      description:
        "Callum O’Dowda does not want to be remembered as a footballer who could have had a great international career.",
      url: "https://www.fourfourtwo.com/news/callum-odowda-has-unfinished-business-ahead-of-irelands-nations-league-games-1663624828000",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/CWZYN7WRvmYGPjpYsEhiwQ-1200-80.jpg",
      publishedAt: "2022-09-19T22:00:28Z",
      content:
        "Callum O’Dowda does not want to be remembered as a footballer who could have had a great international career.\r\nThe Cardiff midfielder only just missed out on a place in the Republic of Ireland squad… [+2236 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Bill ConnellyESPN Staff Writer ",
      title: "Ranking college football's 33 unbeaten teams after three weeks",
      description:
        "And then there were 33. Bill Connolly ranks the remaining undefeated teams, from CFP contenders to stunning turnarounds.",
      url: "http://espn.go.com/college-football/insider/story/_/id/34617518/ranking-college-football-33-unbeaten-teams-three-weeks",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0918%2Fr1063924_1296x729_16%2D9.jpg",
      publishedAt: "2022-09-19T02:00:00Z",
      content:
        "Week 3 of the college football season did little to disrupt the sport's on-field hierarchy. The top eight teams in the AP poll won their games by an average score of 57-12, and the only two ranked te… [+32342 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];

  constructor() {
    console.log("Hello I am a constructor from News component");
    super();
    this.state = {
      artices: this.artices,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2> Football- Top Headlines</h2>
        <div className="row my-4">
          <div className="col-md-4">
            <CarItem
              title="Aston Martin DB5 1964"
              description="Brand: Aston Martin"
              imageUrl="https://cdn.mos.cms.futurecdn.net/9HN22kEPoWRSHpsNNMeLGd-1200-80.jpg"
            />
          </div>{" "}
          <div className="col-md-4">
            <CarItem
              title="Aston Martin DB5 1964"
              description="Brand: Aston Martin"
              // imageUrl="https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif"
            />
          </div>
          <div className="col-md-4">
            <CarItem
              title="Aston Martin DB5 1964"
              description="Brand: Aston Martin"
              // imageUrl="https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
