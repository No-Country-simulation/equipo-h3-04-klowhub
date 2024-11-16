import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('tool')
export class Tool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index()
  name: string;
}
