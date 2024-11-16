import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('content_pillar')
export class ContentPillar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index()
  name: string;
}
