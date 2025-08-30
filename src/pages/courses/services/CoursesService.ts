import { courses } from "@src/constants/courses";
import { Course } from "@src/types/course";

class CoursesService {
    get(): Course[] {
        return courses;
    }
}

const coursesService = new CoursesService();

export default coursesService;
