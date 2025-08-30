export const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (videoId && videoId[1]) {
        return `https://www.youtube.com/embed/${videoId[1]}?autoplay=1`;
    }
    return url;
};

export const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};
