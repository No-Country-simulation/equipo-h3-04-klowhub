import { Course } from '@/interfaces/course';
import { create } from 'zustand';

interface CartStore {
  courses: Course[];
}

interface CartStoreActions {
  addCourse: (course: Course) => void;
  removeCourse: (id: Course['id']) => void;
}

export const useCartStore = create<CartStore & CartStoreActions>((set) => ({
  courses: [],
  addCourse(course) {
    set((prevState) => ({
      ...prevState,
      courses: [...prevState.courses, course],
    }));
  },
  removeCourse(id) {
    set((prevState) => ({
      ...prevState,
      courses: prevState.courses.filter((course) => course.id !== id),
    }));
  },
}));
