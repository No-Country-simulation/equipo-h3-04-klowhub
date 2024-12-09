import { Injectable } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';

@Injectable()
export class GenericService {
  constructor(private readonly dataSource: DataSource) {}

  async findEntityById(
    id: string,
  ): Promise<{ entityName: string; record: any } | null> {
    const entities = this.dataSource.entityMetadatas;

    for (const entityMetadata of entities) {
      const repository: Repository<any> = this.dataSource.getRepository(
        entityMetadata.target as EntityTarget<any>,
      );

      try {
        // Intenta encontrar el registro por ID
        const record = await repository.findOneBy({ id }); // Asegúrate de usar una clave primaria compatible
        if (record) {
          return { entityName: entityMetadata.name, record };
        }
      } catch (error) {
        // Si falla, ignora y continúa con la siguiente entidad
        console.error(
          `Error buscando en ${entityMetadata.name}:`,
          error.message,
        );
      }
    }

    // Si no se encuentra en ninguna entidad
    return null;
  }
}
