import React from 'react';

interface Video {
  date: string;
  title: string;
  embed?: string;
  description: string;
  time?: string;
  image?: string;
  info?: string;
  location: string;
}

interface VideosListProps {
  videos: Video[];
}

function isSafeEmbedUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function VideosList({ videos }: VideosListProps) {
  return (
    <div className="mx-auto mt-8">
      {videos.map((video, index) => (
        <div key={index} className="mission-container">
          <div className="mission-description">
            <div className='flex justify-between mb-2'>
              <div className='text-xs'>
                {video.date}
              </div>
              <div className='text-xs'>
                {video.location}
              </div>
            </div>
            <div className="font-bold text-base mb-4">
              {video.title}
            </div>
            {video.embed && isSafeEmbedUrl(video.embed) && (
              <>
                <div className="flex place-items-center justify-center items-center rounded-sm mx-auto mb-4">
                  <iframe
                    src={video.embed}
                    width="512"
                    height="256"
                    title={video.title}
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm mb-4">
                  <p><strong>{video.time}</strong> - <span>{video.description}</span></p>
                </div>
              </>
            )}
            {video.image && (
              <>
                <div className="flex place-items-center justify-center items-center rounded-sm mx-auto mb-4">
                  <img
                    src={video.image}
                    alt={video.title}
                    width="512"
                    height="256"
                  />
                </div>
                <div className="text-sm mb-4">
                  <p>{video.description}</p>
                </div>
              </>
            )}
            {video.info && (
              <div className="text-sm mb-4">
                <p>{video.info}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};