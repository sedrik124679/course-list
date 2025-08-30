import { queryKeysCourses } from "@src/pages/courses/hooks/queryKeysCourses";
import coursesService from "@src/pages/courses/services/CoursesService";
import { Course } from "@src/types/course";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type QueryOptions<TData> = Omit<UseQueryOptions<TData, Error>, "queryFn" | "queryKey">;

export const useQueryCourses = (options?: QueryOptions<Course[]>) => {
    return useQuery({
        queryKey: queryKeysCourses.get(),
        queryFn: () => coursesService.get(),
        ...options
    });
};
