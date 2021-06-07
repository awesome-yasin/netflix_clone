const sliderData2 = [
    {
        id: "1",
        img : 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png',
     title : 'Wonder Woman 1984',
     category : '2020 ‧ Adventure ‧ 2h 31m',
     likes : '5.4',
     desc : 'Wonder Woman finds herself battling two opponents, Maxwell Lord, a shrewd entrepreneur, and Barbara Minerva, a friend-turned-foe. Meanwhile, she also ends up crossing paths with her love interest.',
     
    },
    {
        id: "2",
        img : 'https://lumiere-a.akamaihd.net/v1/images/p_thenewmutants_19999_9ae6e819.jpeg',
     title : 'The New Mutants',
     category : '2020 ‧ Horror ‧ 1h 39m',
     likes : '5.3',
     desc : 'Five teenage mutants -- Mirage, Wolfsbane, Cannonball, Sunspot and Magik -- undergo treatments at a secret institution that will cure them of their dangerous powers. Invited by Dr. Cecilia Reyes to share their stories, their memories soon turn into terrifying realities as they start to question why theyre being held and whos trying to destroy them.',
     
    },
    {
        id: "3",
        img : 'https://m.media-amazon.com/images/M/MV5BYjA5OTRmODQtY2Y2Ni00Nzk2LTlkNjEtM2E1OWNkMjQzZjE4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
     title : 'Monster Hunter',
     category : '2020 ‧ Action/Fantasy ‧ 1h 44m',
     likes : '5.3',
     desc : 'Captain Artemis and her group of soldiers are pulled into a world where dangerous monsters and humans co-exist. Grappled by danger, they must find a way to escape with help from a mysterious hunter.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "4",
        img : 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Mulan_%282020_film%29_poster.jpg/220px-Mulan_%282020_film%29_poster.jpg',
     title : 'Mulan',
     category : '2020 ‧ Action ‧ 2 hours',
     likes : '5.7',
     desc : 'Acclaimed filmmaker Niki Caro brings the epic tale of Chinas legendary warrior to life in Disneys "Mulan," in which a fearless young woman risks everything out of love for her family and her country to become one of the greatest warriors China has ever known.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "5",
        img : 'https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
     title : 'Dolittle',
     category : '2020 ‧ Adventure ‧ 1h 41m',
     likes : '5.6',
     desc : 'A physician, who can speak with animals, is summoned by the queen to find a cure for her life-threatening disease. Soon, he embarks on a journey with his furry friends in search of a healing tree.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/The_Gentlemen_poster.jpg/220px-The_Gentlemen_poster.jpg',
     title : 'The Gentlemen',
     category : '2019 ‧ Crime ‧ 1h 53m',
     likes : '7.3',
     desc : 'Mickey Pearson is an American expatriate who became rich by building a highly profitable marijuana empire in London. When word gets out that hes looking to cash out of the business',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "7",
        img : 'https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg',
     title : 'Enola Holmes',
     category : '2020 ‧ Mystery ‧ 2h 3m',
     likes : '6.7',
     desc : 'While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "8",
        img : 'https://upload.wikimedia.org/wikipedia/en/2/2e/Ma_Rainey%27s_Black_Bottom_film_poster.jpg',
     title : 'Ma Raineys Black Bottom',
     category : '2020 ‧ Drama ‧ 1h 34m',
     likes : '7',
     desc : 'Tensions rise when trailblazing blues singer Ma Rainey and her band gather at a recording studio in Chicago in 1927.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "9",
        img : 'https://m.media-amazon.com/images/M/MV5BMDNlNmVlNDItMjE3Yi00ZTA3LWIyOTktNDhhMGFlZjk5ZDQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
     title : 'News of the World',
     category : '2020 ‧ Western ‧ 1h 59m',
     likes : '8.4',
     desc : 'Five years after the end of the Civil War, Capt. Jefferson Kyle Kidd crosses paths with a 10-year-old girl taken by the Kiowa people. Forced to return to her aunt and uncle, Kidd agrees to escort the child across the harsh and unforgiving plains of Texas.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg',
     title : 'Another Round',
     category : '2020 ‧ Drama ‧ 1h 57m',
     likes : '7.8',
     desc : 'Four high school teachers consume alcohol on a daily basis to see how it affects their social and professional lives.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/e/ea/Breakthrough_%282019_film%29.png',
     title : 'Breakthrough',
     category : '2019 ‧ Drama ‧ 1h 56m',
     likes : '6.3',
     desc : 'John Smith, a 14-year-old boy, falls into an icy lake and does not regain consciousness. His mother, Joyce, however, refuses to give up hope and prays for his recovery.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg',
     title : 'Jumanji: The Next Level',
     category : ' 2019 ‧ Adventure ‧ 2h 3m',
     likes : '6.5',
     desc : 'When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the worlds most dangerous game.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BMjE3OTI1MTU0OV5BMl5BanBnXkFtZTgwNTg1MzkzNTM@._V1_.jpg',
     title : 'Leave No Trace',
     category : '2018 ‧ Drama ‧ 1h 59m',
     likes : '7.1',
     desc : 'A father and his daughter lead a peaceful life in the woods in Portland, Oregon. However, their fate changes after an incident derail their lives.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    }
    
    
]






export default sliderData2