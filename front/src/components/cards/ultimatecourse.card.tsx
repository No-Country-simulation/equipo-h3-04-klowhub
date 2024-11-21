import Image from "next/image"
import { Course } from "@/interfaces/course"
import { Button, Chip, Progress } from "@nextui-org/react"
import { courseService } from "@/services/course.service"



export default async function UltimateCourseCard() {
    let courses;
    try {
        courses = await courseService({
            take: 1,
            relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return <div>Error loading courses</div>; // Manejo de errores
    }

    if (courses.length === 0) return <></>;

    return (
        <div className="flex bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
            <Image
                src="/imgs/DALL·E 2024-09-04 01.44.37.webp"
                alt="Imagen del curso de Automatización de flujos de trabajo"
                width={400}
                height={250}
                className="object-cover"
            />
            <div className="p-4 flex-1">

                <h3 className="text-lg font-bold">Automatización de flujos de trabajo con AppSheet</h3>
                <p className="m-2 ml-0 text-sm text-gray-400">
                    Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos.
                </p>
                <div className="flex m-4 ml-0  gap-2 flex-wrap">
                    {
                        courses[0].sectors.map((sector) => (
                            <Chip color="secondary" key={sector.id} size="sm" variant="flat" className="text-white">
                                {sector.name}
                            </Chip>
                        ))
                    }
                </div>
                <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <span>Mi progreso</span>
                        <span>30%</span>
                    </div>
                    <Progress value={30} className="bg-purple-600" />
                </div>
                <Button className="mt-4 bg-purple-700 hover:bg-purple-800">Continuar viendo</Button>
            </div>
        </div>
    );
}