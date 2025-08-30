export const queryKeysCourses = {
  base: () => "courses",
  get: () => [queryKeysCourses.base(), "courses"],
};
