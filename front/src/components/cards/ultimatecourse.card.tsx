import Image from "next/image";
import { Course } from "@/interfaces/course";
import { Button, Chip, Progress, Card, CardBody } from "@nextui-org/react";
import { courseService } from "@/services/course.service";

export default async function UltimateCourseCard() {
    let courses: Course[]; // Asegúrate de que el tipo de datos sea correcto
    try {
        courses = await courseService({
            take: 1,
            relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        return <div>Error loading courses</div>; // Manejo de errores
    }

    if (!courses || courses.length === 0) return <></>; // Verifica si courses es undefined o vacío

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 "
            shadow="sm"
        >
            <CardBody className="p-0 w-full h-full">
                <div className="grid grid-cols-6 p-0 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative  col-span-3 ">
                        <Image
                            src="/imgs/DALL·E 2024-09-04 01.44.37.webp"
                            alt="Imagen del curso de Automatización de flujos de trabajo"
                            width={400}
                            height={250}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-full justify-center h-full col-span-9 ">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="text-lg font-bold">Automatización de flujos de trabajo con AppSheet</h3>
                                <p className="m-2 ml-0 text-sm text-gray-400">
                                    Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos.
                                </p>
                                <div className="flex m-4 ml-0 gap-2 flex-wrap">
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
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}