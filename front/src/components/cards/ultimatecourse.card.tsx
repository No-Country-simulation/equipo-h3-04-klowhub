import { Course } from "@/interfaces/course";
import { courseService } from "@/services/course.service";
import { Card, CardBody, Chip, Progress } from "@nextui-org/react";
import Image from "next/image";
import TextTitleSub from "../text/titlesubtitle";
import { Button } from "../ui/Button";

export default async function UltimateCourseCard() {
  let courses: Course[];
  try {
    courses = await courseService({
      take: 1,
      relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return <div>Error loading courses</div>;
  }

  if (!courses || courses.length === 0) return <></>;

  return (
    <>
      <div>
        <TextTitleSub title="Continua tu aprendizaje" subtitle="Retomá donde lo dejaste. Volvé a ver tu último video y seguí aprendiendo sin perder el ritmo." />
      </div>
      <Card
        isBlurred
        className="border-none bg-background/60 mt-4"
        shadow="sm"
      >
        <CardBody className="p-0 w-full h-full">
          <div className="grid grid-cols-6 p-0 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-9 md:col-span-4 xl:col-span-3 h-80">
              <Image
                src="/imgs/DALL·E 2024-09-04 01.44.37.webp"
                alt="Imagen del curso de Automatización de flujos de trabajo"
                fill
                className="object-fill"
              />
            </div>
            <div className="flex flex-col w-full  h-full overflow-hidden col-span-9 md:col-span-8 xl:col-span-9">
              <div className="flex justify-around items-start h-full">
                <div className="flex flex-col gap-0 w-full h-full m-4">
                  <TextTitleSub title="Automatización de flujos de trabajo con AppSheet" subtitle="                                        Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos.
"/>

                  <div className="flex m-4 ml-0 gap-2 flex-wrap">
                    {
                      courses[0].sectors.map((sector) => (
                        <Chip color="secondary" key={sector.id} size="md" variant="flat" className="text-white">
                          {sector.name}
                        </Chip>
                      ))
                    }
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span>Mi progreso</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="bg-purple-600" />
                    <Button className="">Continuar viendo</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}