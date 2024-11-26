'use client'
import CourseCard from '@/components/cards/course.card';
import { courseService } from '@/services/course.service';
import { Button, Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Course } from "@/interfaces/course";

type ServiceType = 'course' | 'app';

interface CardMoreProps {
    service: ServiceType; // Prop para el tipo de servicio
}

export default function CardMore({ service }: CardMoreProps) {
    if (service == "app") {
        var visible = 4;
    } else {
        visible = 3;
    }
    const [courses, setCourses] = useState<Course[]>([]);
    const [visibleCount, setVisibleCount] = useState(visible);
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                let data: Course[] = [];
                if (service === "course") {
                    data = await courseService({
                        relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
                    });
                } else if (service === "app") {
                    data = await courseService({
                        relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
                    });
                }
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError("No se pudieron cargar los cursos. Intenta de nuevo más tarde."); // Mensaje de error
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [service]);

    const handleToggleCourses = () => {
        if (isExpanded) {
            setVisibleCount(visible);
        } else {
            setVisibleCount(courses.length);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spinner size="lg" />
                </div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <>
                    <div className={`grid gap-4 pt-6 ${service === "app" ? "grid-cols-4" : "grid-cols-3"}`}>
                        {courses.slice(0, visibleCount).map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                    {courses.length > (service === "app" ? 4 : 3) && ( // Solo mostrar el botón si hay más cursos
                        <div className="flex w-full mt-4 justify-center">
                            <Button
                                onClick={handleToggleCourses}
                                className="w-40 border border-primario-200 text-primario-200 text-xl bg-transparent hover:bg-primario-400"
                            >
                                {isExpanded ? 'Ver menos' : 'Ver más'}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </>
    );
}