import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sector')
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index({
    unique: true,
  })
  name: string;
}
