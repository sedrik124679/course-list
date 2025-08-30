import { ModalTypes } from "@src/components/ModalRoot";
import { useModal } from "@src/contexts/ModalContext";
import { useSelector } from "@src/redux/store";
import { Course } from "@src/types/course";
import { getYouTubeThumbnail } from "@src/utils";
import React from "react";

type Props = {
    course: Course;
};

const CourseCard: React.FC<Props> = ({ course }) => {
    const { openModal } = useModal();

    const { purchasedCourses } = useSelector((state) => state.courses.root);

    const { title, videoUrl, description, price } = course;

    const openVideoModal = () => openModal(ModalTypes.VIEW_MODAL, { videoUrl: videoUrl });

    const openEnrollModal = () => openModal(ModalTypes.ENROLL_MODAL, { course });

    const isPurchased = purchasedCourses.find((c) => c.id === course.id);

    return (
        <div className="course-card">
            <div className="course-video-preview" onClick={openVideoModal}>
                <img src={getYouTubeThumbnail(videoUrl)} alt={title} className="video-thumbnail" />
                <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                {isPurchased && (
                    <div className="purchased-badge">
                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        Purchased
                    </div>
                )}
            </div>

            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <p className="course-description">{description}</p>
                <div className="course-footer">
                    {isPurchased ? (
                        <div className="purchased-status">
                            <span className="purchased-text">Already Purchased</span>
                        </div>
                    ) : (
                        <>
                            <span className="course-price">${price.toFixed(2)}</span>
                            <button className="enroll-button" onClick={openEnrollModal}>
                                Enroll Now
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
