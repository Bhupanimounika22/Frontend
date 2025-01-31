// Sample songs
const songs = [
    { title: 'Song 1', source: 'song1.mp3' },
    { title: 'Song 2', source: 'song2.mp3' },
    { title: 'Song 3', source: 'song3.mp3' },
];

// Initialize variables
let playlist = songs.slice(); // Copy the songs array to create a playlist
let currentIndex = 0;
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const skipForwardButton = document.getElementById('skip-forward');
const skipBackwardButton = document.getElementById('skip-backward');
const shuffleButton = document.getElementById('shuffle');
const playlistContainer = document.getElementById('playlist');

// Function to display the playlist
function displayPlaylist() {
    playlistContainer.innerHTML = '';
    playlist.forEach((song, index) => {
        const listItem = document.createElement('div');
        listItem.innerText = `${index + 1}. ${song.title}`;
        listItem.addEventListener('click', () => playSong(index));
        playlistContainer.appendChild(listItem);
    });
}

// Function to play a song by index
function playSong(index) {
    if (index >= 0 && index < playlist.length) {
        currentIndex = index;
        audio.src = playlist[currentIndex].source;
        audio.play();
    }
}

// Event listeners
playButton.addEventListener('click', () => audio.play());
pauseButton.addEventListener('click', () => audio.pause());
skipForwardButton.addEventListener('click', () => playSong(currentIndex + 1));
skipBackwardButton.addEventListener('click', () => playSong(currentIndex - 1));
shuffleButton.addEventListener('click', () => {
    playlist.sort(() => Math.random() - 0.5); // Shuffle the playlist
    displayPlaylist();
});

// Initial playlist display
displayPlaylist();
playSong(currentIndex); // Play the first song on page load
