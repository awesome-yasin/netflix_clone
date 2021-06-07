const sliderData3 = [
    {
        id: "1",
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx',
     title : 'Breaking Bad',
     category : '2008 ‧ Crime ‧ 5 seasons',
     likes : '9.4',
     desc : 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.',
     
    },
    {
        id: "2",
        img : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiLzRKo-uluXxDzIINYpNUg7CtFDX-0FDdYBPFlPA2LHErvg79',
     title : 'Narcos',
     category : '2015 ‧ Crime ‧ 3 seasons',
     likes : '8.6',
     desc : 'Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late 80s in this raw, gritty original series. Also detailed are the actions taken by law enforcement as they battle in the war on drugs.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "3",
        img : 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
     title : 'Peaky Blinders',
     category : '2013 ‧ Crime ‧ 5 seasons',
     likes : '8.8',
     desc : 'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "4",
        img : 'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_.jpg',
     title : 'House of Cards',
     category : '2013 ‧ Drama ‧ 6 seasons',
     likes : '8.7',
     desc : 'Frank Underwood is a Democrat appointed as the secretary of state. Along with his wife, he sets out on a quest to seek revenge on the people who betrayed him while successfully rising to supremacy.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "5",
        img : 'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
     title : 'The Witcher',
     category : '2019 ‧ Fantasy ‧ 1 season',
     likes : '8.2',
     desc : 'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg',
     title : 'Lucifer',
     category : '2016 ‧ Mystery ‧ 5 seasons',
     likes : '8.1',
     desc : 'Based on characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg, this series follows Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. ',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "7",
        img : 'https://m.media-amazon.com/images/M/MV5BNjZkNzY4M2ItOWY0Ni00Y2ViLWE1NjItOTIyYzZjMzg5M2E1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
     title : 'Lock & Key',
     category : '2020 ‧ Drama ‧ 1 season',
     likes : '7.4',
     desc : 'Following their fathers murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "8",
        img : 'https://upload.wikimedia.org/wikipedia/en/2/2e/Vikings_Season_6_Volume_1.jpg',
     title : 'Vikings (Series)',
     category : '2013 ‧ Drama ‧ 5 seasons',
     likes : '8.5',
     desc : 'Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "9",
        img : 'https://m.media-amazon.com/images/M/MV5BODIyNzk5NDg5M15BMl5BanBnXkFtZTgwMTE5NjA5MjI@._V1_.jpg',
     title : 'Ozark',
     category : '2017 ‧ Drama ‧ 3 seasons',
     likes : '8.4',
     desc : 'Created by Bill Dubuque ("The Accountant," "The Judge"), this drama series stars Jason Bateman as Marty Byrde, a financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife Wendy and their two kids in tow, Marty is on the move after a money-launderin',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://m.media-amazon.com/images/M/MV5BOGIxMzE1MTEtMzViYi00MWI5LTllOTUtMmZkYzM3NmIyNTZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
     title : 'Titans',
     category : '2018 ‧ Action fiction ‧ 2 seasons',
     likes : '7.8',
     desc : 'This gritty take on the "Teen Titans" franchise follows young heroes from across the DC Universe as they come of age and find where they belong. Dick Grayson and Rachel Roth, a special girl possessed by a strange darkness',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BODc5ZDZmNTEtZDJjZC00ZmMzLWJlZWQtOWNiODI5YjE0YzBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
     title : 'Hollywood',
     category : '2020 ‧ Drama ‧ 1 season',
     likes : '7.5',
     desc : 'In post-World War II Hollywood, aspiring actors and filmmakers will do almost anything to make their showbiz dreams come true.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/0/01/Supernatural_Season_15.jpg',
     title : 'Supernatural',
     category : '2005 ‧ Mystery ‧ 15 seasons',
     likes : '8.5',
     desc : 'Brothers Dean and Sam follow in their fathers footsteps and set out to eliminate monsters, demons and other supernatural entities that exist on Earth.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_.jpg',
     title : 'Band of Brothers',
     category : '2001 ‧ War ‧ 1 season',
     likes : '9.4',
     desc : 'The story of Easy Company, 506th Regiment of the 101st Airborne Division from 1942 to the end of World War II. A collection of fifty portraits illustrated by archive footage and recounted in voice.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://images-na.ssl-images-amazon.com/images/I/41fnfs32mlL._SX308_BO1,204,203,200_.jpg',
     title : '13 Reasons Why',
     category : '2017 ‧ Drama ‧ 4 seasons',
     likes : '7.6',
     desc : 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_.jpg',
     title : 'The Umbrella Academy',
     category : '2019 ‧ Action ‧ 2 seasons',
     likes : '8',
     desc : 'On one day in 1989, 43 infants are inexplicably born to random, unconnected women who showed no signs of pregnancy the day before. Seven are adopted by billionaire industrialist Sir Reginald Hargreeves, who creates the Umbrella Academy',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_.jpg',
     title : 'Daredevil',
     category : '2015 ‧ Action fiction ‧ 3 seasons',
     likes : '8.8',
     desc : 'Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    }
    
    
]






export default sliderData3