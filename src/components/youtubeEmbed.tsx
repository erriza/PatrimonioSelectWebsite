// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// import React, { useRef, useEffect } from 'react';
// interface YoutubeEmbedProps {
//   videoId: string;
// }

// const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId }) => {
//   const youtubeRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createPlayer = () => {
//       const player = new window.YT.Player(youtubeRef.current!, {
//         height: '100%', // Adjust height as needed
//         width: '100vh', // Adjust width as needed
//         videoId,
//       });
//     };

//     // Load the YouTube iframe API script asynchronously
//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

//     // Create the player when the script loads
//     if (typeof window.YT !== 'undefined') {
//       createPlayer();
//     } else {
//       // Handle the case where the script hasn't loaded yet
//       const onYouTubeIframeAPIReady = () => {
//         createPlayer();
//       };
//       window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
//     }

//     return () => {
//       // Cleanup function to avoid memory leaks when the component unmounts
//       window.onYouTubeIframeAPIReady = null;
//     };
//   }, [videoId]); // Re-run useEffect only if videoId changes

//   return (
//     <div ref={youtubeRef} />
//   );
// };

// export default YoutubeEmbed;

interface YouTubeEmbedProps {
    videoId: string;
  }
  
  const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {

    return (
      <div className="aspect-w-16 aspect-h-9 m-4">
        <iframe
          className="w-full h-64"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeEmbed;