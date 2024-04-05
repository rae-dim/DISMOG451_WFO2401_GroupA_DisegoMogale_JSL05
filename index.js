// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Pocket full og=f sunshine", artist: "Natasha Bedingfield", genre: "Pop" },
    { title: "fafo", artist: "Zach Fox", genre: "Rap" },
    { title: "Middle Child", artist: "J Cole", genre: "Rap" },
    { title: "All this and heavan too", artist: "Florence and the Machine", genre: "Indie"},
    { title: "Breath Again", artist: "Toni Braxton", genre: "R&B" },
    { title: "Humble", artist: "Kendrick Lamar", genre: "Rap" },
    { title: "Cold", artist: "Aqualung", genre: "Indie" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Rap",
    "Rocket": "R&B",
    "Groot": "Indie"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistContainer = document.getElementById("playlists");
    for (const guardian in guardians) {
        const favoriteGenre = guardians[gaurdian];

        const playlistSongs = songs.filter(song => song.genre === favoriteGenre);

        const playlistCard = document.createElement("div");
        playlistCard.classList.add("playlist");
        
        const playlistTitle = document.createElement("h1");
        playlistTitle.textContent = `${guardian}'s Playlist`;
        playlistCard.appendChild(playlistTitle);
        
        const songsList = document.createElement("ul");

        playlistSongs.forEach(song => {
            const songItem = document.createElement("li");
            songItem.textContent = `${song.title} by ${song.artist}`;
            songsList.appendChild(songItem)
        });
        playlistCard.appendChild(songsList);

        playlistContainer.appendChild(playlistCard);
    }
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


