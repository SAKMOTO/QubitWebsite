import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/all-the-stars.mp3"; // Place your All the Stars audio file in public/all-the-stars.mp3

const MusicPlayerCard = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      // Also stop any active download click sound if it exists
      if (typeof window !== "undefined") {
        const w = window as any;
        const dlAudio = w.__qubitDownloadAudio as HTMLAudioElement | undefined;
        if (dlAudio) {
          dlAudio.pause();
          dlAudio.currentTime = 0;
        }
      }
    } else {
      audio
        .play()
        .then(() => {
          console.log("[MusicPlayerCard] Manual play succeeded");
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("[MusicPlayerCard] Manual play failed", err);
        });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="spotify-card relative w-64 h-32 rounded-xl bg-[#191414] p-3 shadow-lg text-white">
        <div className="flex gap-3 mb-4">
          <div className="relative h-10 w-10 rounded-md bg-neutral-300 flex items-center justify-center overflow-hidden">
            <div className="flex items-end gap-[2px] h-5 w-7">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`spotify-greenline line-${i}`} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold leading-tight">All the Stars</p>
            <p className="text-[11px] text-neutral-300">Qubit Playlist</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4 text-neutral-200">
          {/* Volume icon (static) */}
          <button className="hover:text-[#1db954] transition-colors" type="button" aria-label="Volume">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z"
              />
            </svg>
          </button>

          {/* Previous (static) */}
          <button className="hover:text-[#1db954] transition-colors" type="button" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z"
              />
            </svg>
          </button>

          {/* Play / pause */}
          <button
            className="hover:text-[#1db954] transition-colors"
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                />
              </svg>
            )}
          </button>

          {/* Heart icon (static) */}
          <button className="hover:text-[#1db954] transition-colors" type="button" aria-label="Like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              className="h-4 w-4"
            >
              <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z" />
            </svg>
          </button>
        </div>

        <div className="absolute left-[5%] right-[5%] bottom-3 h-[6px] rounded-full bg-[#5e5e5e] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#1db954]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerCard;
