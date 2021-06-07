const sliderData = [
    {
        id: "1",
        img : 'https://upload.wikimedia.org/wikipedia/en/0/02/A_Quiet_Place_Part_II.jpg',
     title : 'A Quiet Place II',
     category : '2020 ‧ Horror ‧ 1h 37m',
     likes : '8',
     desc : 'Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
     cast : 'Matthew McConaughey, Anne Hathaway',
     link: 'href = https://www.sitepoint.com/how-to-create-an-ecommerce-site-with-react/'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
     title : 'Parasite',
     category : '2019 ‧ Thriller ‧ 2h 12m',
     likes : '8.6',
     desc : 'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "3",
        img : 'https://upload.wikimedia.org/wikipedia/en/6/60/Birds_of_Prey_%28and_the_Fantabulous_Emancipation_of_one_Harley_Quinn%29.jpg',
     title : 'Birds of Prey',
     category : '2020 ‧ Action ‧ 1h 49m',
     likes : '6.1',
     desc : 'After being thrown out in the streets by Joker, Harley struggles to pick herself up. However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "4",
        img : 'https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg',
     title : 'Bloodshot',
     category : ' 2020 ‧ Action/Adventure ‧ 1h 49m',
     likes : '5.7',
     desc : 'Ray Garrison, an elite soldier killed in battle, is resurrected and given superhuman abilities. As he sets out to get revenge, he uncovers secrets about his life and the people supposedly helping him.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "5",
        img : 'https://m.media-amazon.com/images/M/MV5BMjQxNzIzMjAtNjUzNy00N2EzLWIxMDgtMzI4YjU0YzJiODJjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
     title : 'The Avengers',
     category : 'PG-13/ Sci-Fi/ 2012',
     likes : '8.6',
     desc : 'A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNPj2bgqy8zGbvRUZPOpXvF58dwGwGk_1-GX1P_m7yHnj-8Ebd',
     title : 'Tom and Jerry',
     category : '2021 ‧ Family ‧ 1h 41m',
     likes : '5.3',
     desc : 'A legendary rivalry reemerges when Jerry moves into New York Citys finest hotel on the eve of the wedding of the century, forcing the desperate event planner to hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "7",
        img : 'https://upload.wikimedia.org/wikipedia/en/2/2a/The_Vast_of_Night_poster.jpg',
     title : 'The Vast of Night',
     category : '2019 ‧ Sci-fi ‧ 1h 31m',
     likes : '6.7',
     desc : 'In the 1950s, two children search for the source of a mysterious frequency that has descended on their town.',
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
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
     title : 'The Joker',
     category : '2019 ‧ Crime ‧ 2h 2m',
     likes : '8.4',
     desc : 'A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "6",
        img : 'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
     title : 'Dunkirk',
     category : '2017 ‧ War ‧ 1h 47m',
     likes : '7.8',
     desc : 'During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsllnPup34EYMWwC0f6HzAHGV-bicr6fnt4VmZga5vxkLcSFh1',
     title : 'Sucide Squad',
     category : '2016 ‧ Action ‧ 2h 17m',
     likes : '6.1',
     desc : 'Annn group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png',
     title : 'La La Land',
     category : '2016 ‧ Musical ‧ 2h 8m',
     likes : '8.5',
     desc : 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair',
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
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png',
     title : 'Once Upon A Time In Hollywood',
     category : '2019 ‧ Drama ‧ 2h 40m',
     likes : '7.6',
     desc : 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://m.media-amazon.com/images/M/MV5BYmIzNjUxZGQtYjg0OS00MmE0LTgwZDAtMzVmODQ2MGI5MTQ5XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg',
     title : 'Rocketman',
     category : '2019 ‧ Musical ‧ 2h 2m',
     likes : '7.4',
     desc : 'After completing his studies, Reginald begins to perform rock music at local pubs. Later, he meets John Reid, a music manager, who helps him rise to fame, but also creates chaos in his life.',
     cast : 'Matthew McConaughey, Anne Hathaway'
    },
    {
        id: "2",
        img : 'https://upload.wikimedia.org/wikipedia/en/c/c2/TrialChicago7poster.jpeg',
     title : 'The Trial of the Chicago',
     category : '2016 ‧ Action ‧ 2h 17m',
     likes : '7.8',
     desc : 'The film is based on the infamous 1969 trial of seven defendants charged by the federal government with conspiracy and more, arising from the countercultural protests in Chicago at the 1968 Democratic National Convention. ',
     cast : 'Matthew McConaughey, Anne Hathaway'
    }
    
    
]






export default sliderData