import { getYouTubeEmbedUrl } from "@src/utils";
import React, { useRef } from "react";

type Props = {
    videoUrl: string;
    handleClose: () => void;
};

// Тег відео не може відтворити відео з ютуба, тому заюзав iframe

const ViewModal: React.FC<Props> = ({ videoUrl, handleClose }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        handleClose();
    };

    return (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleCloseModal}>
                    <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                <div className="video-container">
                    <iframe
                        src={getYouTubeEmbedUrl(videoUrl)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="modal-video"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
