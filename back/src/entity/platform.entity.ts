import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('platform')
export class Platform {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index()
  name: string;
}
