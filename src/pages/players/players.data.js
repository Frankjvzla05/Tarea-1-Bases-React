const PLAYERS_DATA = [
    {
        id: 1,
        title: "Valoración jugadores FIFA 22",
        routeName: "players",
        items: [
            {
                id: 1,
                league: "Ligue 1 Uber Eats",
                name: "Lionel Messi",
                average: 93,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-messi.png.adapt.crop16x9.png",
                club: "Paris Saint-Germain"
            },
            {
                id: 2,
                league: "Bundesliga",
                name: "Robert Lewandowski",
                average: 92,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-lewandowski.png.adapt.crop16x9.png",
                club: "FC Bayern"
            },            
            {
                id: 3,
                league: "Premier League",
                name: "Cristiano Ronaldo",
                average: 91,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-cristiano-ronaldo.png.adapt.crop16x9.png",
                club: "Manchester United"
            },     
            {
                id: 4,
                league: "Premier League",
                name: "Kevin De Bruyne",
                average: 91,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-de-bruyne-kevin.png.adapt.crop16x9.png",
                club: "Manchester City"
            },
            {
                id: 5,
                league: "Ligue 1 Uber Eats",
                name: "Kylian Mbappé",
                average: 91,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-mbapp-kylian.png.adapt.crop16x9.png",
                club: "Paris Saint-Germain"
            },
            {
                id: 6,
                league: "Ligue 1 Uber Eats",
                name: "Neymar Jr",
                average: 91,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-neymar-jr.png.adapt.crop16x9.png",
                club: "Paris Saint-Germain"
            },
            {
                id: 7,
                league: "LaLiga Santanter",
                name: "Jan Oblak",
                average: 91,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-oblak-jan.png.adapt.crop16x9.png",
                club: "Atlético de Madrid"
            },
            {
                id: 8,
                league: "Premier League",
                name: "Harry Kane",
                average: 90,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-kane-harry.png.adapt.crop16x9.png",
                club: "Tottenham"
            },
            {
                id: 9,
                league: "Premier League",
                name: "N'Golo Kanté",
                average: 90,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-kant-n-golo.png.adapt.crop16x9.png",
                club: "Chelsea"
            },
            {
                id: 10,
                league: "Bundesliga",
                name: "Manuel Neuer",
                average: 90,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-neuer-manuel.png.adapt.crop16x9.png",
                club: "FC Bayern"
            },  
            {
                id: 11,
                league: "LaLiga Santanter",
                name: "Marc-André ter Stegen",
                average: 90,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-ter-stegen-marc-andr-.png.adapt.crop16x9.png",
                club: "FC Barcelona"
            },
            {
                id: 12,
                league: "Premier League",
                name: "Mohamed Salah",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-salah-mohamed.png.adapt.crop16x9.png",
                club: "Liverpool"
            },
            {
                id: 13,
                league: "LaLiga Santanter",
                name: "Karin Benzema",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-benzema-karim.png.adapt.crop16x9.png",
                club: "Real Madrid"
            },
            {
                id: 14,
                league: "Bundesliga",
                name: "Joshua Kimmich",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-kimmich-joshua.png.adapt.crop16x9.png",
                club: "FC Bayern"
            }, 
            {
                id: 15,
                league: "Premier League",
                name: "Heung-Min Son",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-son-heung-min.png.adapt.crop16x9.png",
                club: "Tottenham"
            },
            {
                id: 16,
                league: "LaLiga Santanter",
                name: "Casemiro",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-casemiro.png.adapt.crop16x9.png",
                club: "Real Madrid"
            },
            {
                id: 17,
                league: "Premier League",
                name: "Sadio Mané",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-man-sadio.png.adapt.crop16x9.png",
                club: "Liverpool"
            },
            {
                id: 18,
                league: "LaLiga Santanter",
                name: "Thibaut Courtois",
                average: 89,
                imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/rating-collective-assets/common/top-players-stream/top-22-courtois-thibaut.png.adapt.crop16x9.png",
                club: "Real Madrid"
            }          
            
        ]
    }
]

export default PLAYERS_DATA;
