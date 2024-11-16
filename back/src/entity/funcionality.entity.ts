import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('functionality')
export class Functionality {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index()
  name: string;
}
