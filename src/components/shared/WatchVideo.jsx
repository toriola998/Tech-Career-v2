function WatchVideo({ videoSrc}) {
   return (
      <>
         <p className="mb-2 font-medium">Watch a video</p>
         <iframe
            className="w-full h-[200px] md:h-[300px]"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         ></iframe>
      </>
   );
}

export default WatchVideo;
