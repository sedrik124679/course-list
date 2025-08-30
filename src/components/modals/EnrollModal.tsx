import * as actions from "@src/redux/actions";
import { useDispatch } from "@src/redux/store";
import { Course } from "@src/types/course";
import React from "react";

type Props = {
    course: Course;
    handleClose: () => void;
};

const EnrollModal: React.FC<Props> = ({ course, handleClose }) => {
    const dispatch = useDispatch();

    const handlePurchase = () => {
        dispatch(actions.courses.purchase(course));

        handleClose();
    };

    return (
        <div className="enroll-modal-overlay" onClick={handleClose}>
            <div className="enroll-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="enroll-modal-close" onClick={handleClose}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>

                <div className="enroll-modal-header">
                    <h2>Enroll in Course</h2>
                    <p className="course-title">{course.title}</p>
                </div>

                <div className="enroll-modal-body">
                    <div className="price-section">
                        <span className="price-label">Total:</span>
                        <span className="price">${course.price.toFixed(2)}</span>
                    </div>

                    <p className="enroll-description">
                        Click the button below to complete your enrollment in this course.
                    </p>
                </div>

                <div className="enroll-modal-footer">
                    <button className="cancel-btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="enroll-btn" onClick={handlePurchase}>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnrollModal;
