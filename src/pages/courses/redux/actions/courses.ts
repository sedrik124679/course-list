import { createAction } from "@reduxjs/toolkit";
import { Course } from "@src/types/course";

export const purchase = createAction<Course>("courses/purchase");
