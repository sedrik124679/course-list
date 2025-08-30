import CourseCard from "@src/pages/courses/components/CourseCard";
import { useQueryCourses } from "@src/pages/courses/hooks";
import React, { useState, useMemo } from "react";

import "../../styles/courses.css";

const CourseList = () => {
    const { data: courses = [], isLoading } = useQueryCourses();
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState("all");

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchesSearch =
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase());

            let matchesPrice = true;
            switch (priceFilter) {
                case "free":
                    matchesPrice = course.price === 0;
                    break;
                case "under50":
                    matchesPrice = course.price > 0 && course.price < 50;
                    break;
                case "50-100":
                    matchesPrice = course.price >= 50 && course.price <= 100;
                    break;
                case "over100":
                    matchesPrice = course.price > 100;
                    break;
                default:
                    matchesPrice = true;
            }

            return matchesSearch && matchesPrice;
        });
    }, [courses, searchTerm, priceFilter]);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="courses-container">
            <h1 className="courses-title">Our Courses</h1>

            <div className="courses-filters">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search courses by title or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <svg className="search-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </div>

                <div className="filter-container">
                    <select
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                        className="price-filter"
                    >
                        <option value="all">All Prices</option>
                        <option value="free">Free</option>
                        <option value="under50">Under $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="over100">Over $100</option>
                    </select>
                </div>
            </div>

            <div className="results-info">
                <p>
                    Found {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
                </p>
            </div>

            <div className="courses-grid">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {filteredCourses.length === 0 && !isLoading && (
                <div className="no-results">
                    <h3>No courses found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
};

export default CourseList;
