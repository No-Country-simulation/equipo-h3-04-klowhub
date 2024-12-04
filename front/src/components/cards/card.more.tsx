'use client'
import CourseCard from '@/components/cards/course.card';
import { Course } from '@/interfaces/course';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

type ServiceType = 'course' | 'app';

interface CardMoreProps {
    service: ServiceType; // Prop para el tipo de servicio
    initialCourses: Course[]; // Cursos cargados en el servidor
}

export default function CardMore({ service, initialCourses }: CardMoreProps) {
    const visibleCountInitial = service === "app" ? 4 : 3; // Número inicial de cursos visibles
    const [visibleCount, setVisibleCount] = useState(visibleCountInitial);
    const [courses] = useState(initialCourses); // Cursos cargados desde el servidor

    const handleToggleCourses = () => {
        setVisibleCount((prevCount) => (prevCount === visibleCountInitial ? courses.length : visibleCountInitial));
    };

    return (
        <>
            <div className={`grid gap-4 pt-6 ${service === "app" ? "grid-cols-4" : "grid-cols-3"}`}>
                {courses.slice(0, visibleCount).map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <div className="flex w-full mt-4 justify-center">
                <Button
                    onClick={handleToggleCourses}
                    className="w-40 border border-primario-200 text-primario-200 text-xl bg-transparent hover:bg-primario-400"
                >
                    {visibleCount === visibleCountInitial ? 'Ver más' : 'Ver menos'}
                </Button>
            </div>

        </>
    );
}

