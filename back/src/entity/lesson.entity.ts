import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module.entity';

@Index(['title'])
@Entity('lesson')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  video?: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  translation?: string;

  @ManyToOne(() => Module, (module) => module.lessons)
  module: Module;

  constructor(partial?: Partial<Lesson>) {
    Object.assign(this, partial);
  }
}
