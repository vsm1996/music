export type Artist = {
  id: number;
  name: string;
  genre: string;
  [key: string]: any; // Allows for adding other properties
}

export type Album = {
  id: number;
  artistId: number;
  title: string;
  releaseYear: number;
  albumArtUrl: string;
  genre: string;
  tracklist: string[];
  [key: string]: any; // Allows for adding other properties
}

const LOCAL_HOST = "http://localhost:3000/images/album-art";

let DATA: {
  artists: Artist[];
  albums: Album[];
} = {
  "artists": [
    {
      "id": 1,
      "name": "Michael Jackson",
      "genre": "Pop, Rock, R&B"
    },
    {
      "id": 2,
      "name": "Madonna",
      "genre": "Pop, Dance"
    },
    {
      "id": 3,
      "name": "Prince",
      "genre": "Pop, R&B, Rock"
    },
    {
      "id": 4,
      "name": "Bruce Springsteen",
      "genre": "Rock"
    },
    {
      "id": 5,
      "name": "U2",
      "genre": "Rock"
    },
    {
      "id": 6,
      "name": "Whitney Houston",
      "genre": "Pop, R&B"
    },
    {
      "id": 7,
      "name": "Tina Turner",
      "genre": "Rock, Pop"
    }
  ],
  "albums": [
    {
      "id": 1,
      "title": "Thriller",
      "artistId": 1,
      "releaseYear": 1982,
      "genre": "Pop, Rock, R&B",
      "tracklist": [
        "Wanna Be Startin' Somethin'",
        "Baby Be Mine",
        "The Girl Is Mine",
        "Thriller",
        "Beat It",
        "Billie Jean",
        "Human Nature",
        "P.Y.T. (Pretty Young Thing)",
        "The Lady in My Life"
      ],
      "albumArtUrl": `${LOCAL_HOST}/thriller.jpeg`
    },
    {
      "id": 2,
      "title": "Like a Virgin",
      "artistId": 2,
      "releaseYear": 1984,
      "genre": "Pop, Dance",
      "tracklist": [
        "Material Girl",
        "Angel",
        "Like a Virgin",
        "Over and Over",
        "Love Don't Live Here Anymore",
        "Dress You Up",
        "Shoo-Bee-Doo",
        "Pretender",
        "Stay"
      ],
      "albumArtUrl": `${LOCAL_HOST}/like_a_virgin.jpeg`
    },
    {
      "id": 3,
      "title": "Purple Rain",
      "artistId": 3,
      "releaseYear": 1984,
      "genre": "Pop, R&B, Rock",
      "tracklist": [
        "Let's Go Crazy",
        "Take Me with U",
        "The Beautiful Ones",
        "Computer Blue",
        "Darling Nikki",
        "When Doves Cry",
        "I Would Die 4 U",
        "Baby I'm a Star",
        "Purple Rain"
      ],
      "albumArtUrl": `${LOCAL_HOST}/purple_rain.jpeg`
    },
    {
      "id": 4,
      "title": "Born in the U.S.A.",
      "artistId": 4,
      "releaseYear": 1984,
      "genre": "Rock",
      "tracklist": [
        "Born in the U.S.A.",
        "Cover Me",
        "Darlington County",
        "Working on the Highway",
        "Downbound Train",
        "I'm on Fire",
        "No Surrender",
        "Bobby Jean",
        "I'm Goin' Down",
        "Glory Days",
        "Dancing in the Dark",
        "My Hometown"
      ],
      "albumArtUrl": `${LOCAL_HOST}/born_in_the_usa.jpeg`
    },
    {
      "id": 5,
      "title": "The Joshua Tree",
      "artistId": 5,
      "releaseYear": 1987,
      "genre": "Rock",
      "tracklist": [
        "Where the Streets Have No Name",
        "I Still Haven't Found What I'm Looking For",
        "With or Without You",
        "Bullet the Blue Sky",
        "Running to Stand Still",
        "Red Hill Mining Town",
        "In God's Country",
        "Trip Through Your Wires",
        "One Tree Hill",
        "Exit",
        "Mothers of the Disappeared"
      ],
      "albumArtUrl": `${LOCAL_HOST}/the_joshua_tree.jpeg`
    },
    {
      "id": 6,
      "title": "Whitney Houston",
      "artistId": 6,
      "releaseYear": 1985,
      "genre": "Pop, R&B",
      "tracklist": [
        "You Give Good Love",
        "Thinking About You",
        "Someone for Me",
        "Saving All My Love for You",
        "Nobody Loves Me Like You Do",
        "How Will I Know",
        "All at Once",
        "Take Good Care of My Heart",
        "Greatest Love of All",
        "Hold Me"
      ],
      "albumArtUrl": `${LOCAL_HOST}/whitney_houston.jpeg`
    },
    {
      "id": 7,
      "title": "Private Dancer",
      "artistId": 7,
      "releaseYear": 1984,
      "genre": "Rock, Pop",
      "tracklist": [
        "I Might Have Been Queen",
        "What's Love Got to Do with It",
        "Show Some Respect",
        "I Can't Stand the Rain",
        "Private Dancer",
        "Let's Stay Together",
        "Better Be Good to Me",
        "Steel Claw",
        "Help!",
        "1984"
      ],
      "albumArtUrl": `${LOCAL_HOST}/private_dancer.jpeg`
    },
    {
      "id": 8,
      "title": "Bad",
      "artistId": 1,
      "releaseYear": 1987,
      "genre": "Pop, Rock, R&B",
      "tracklist": [
        "Bad",
        "The Way You Make Me Feel",
        "Speed Demon",
        "Liberian Girl",
        "Just Good Friends",
        "Another Part of Me",
        "Man in the Mirror",
        "I Just Can't Stop Loving You",
        "Dirty Diana",
        "Smooth Criminal",
        "Leave Me Alone"
      ],
      "albumArtUrl": `${LOCAL_HOST}/bad.jpeg`
    },
    {
      "id": 9,
      "title": "True Blue",
      "artistId": 2,
      "releaseYear": 1986,
      "genre": "Pop, Dance",
      "tracklist": [
        "Papa Don't Preach",
        "Open Your Heart",
        "White Heat",
        "Live to Tell",
        "Where's the Party",
        "True Blue",
        "La Isla Bonita",
        "Jimmy Jimmy",
        "Love Makes the World Go Round"
      ],
      "albumArtUrl": `${LOCAL_HOST}/true_blue.jpeg`
    },
    {
      "id": 10,
      "title": "Sign o' the Times",
      "artistId": 3,
      "releaseYear": 1987,
      "genre": "Pop, R&B, Rock",
      "tracklist": [
        "Sign o' the Times",
        "Play in the Sunshine",
        "Housequake",
        "The Ballad of Dorothy Parker",
        "It",
        "Starfish and Coffee",
        "Slow Love",
      ],
      "albumArtUrl": `${LOCAL_HOST}/sign_o_the_times.jpeg`
    },
  ]
}


export default DATA;