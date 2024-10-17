// JavaScript code to load videos dynamically
const videosContainer = document.getElementById('videos-container');

// Video data (you can replace it with your own data or fetch from a database)
const videos = [
  {
    title: 'Video 1',
    thumbnail: 'thumbnail1.jpg',
    videoUrl: 'video1.mp4'
  },
  {
    title: 'Video 2',
    thumbnail: 'thumbnail2.jpg',
    videoUrl: 'video2.mp4'
  },
  {
    title: 'Video 3',
    thumbnail: 'thumbnail3.jpg',
    videoUrl: 'video3.mp4'
  }
];

// Load videos
videos.forEach(video => {
  const videoElement = document.createElement('div');
  videoElement.classList.add('video');
  videoElement.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}">
    <h2>${video.title}</h2>
    <p>${video.videoUrl}</p>
  `;
  videosContainer.appendChild(videoElement);
});
