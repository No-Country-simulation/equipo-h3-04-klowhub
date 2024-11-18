import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  Index,
} from 'typeorm';
import { Module } from './module.entity';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Module, (module) => module.lessons)
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  @Index()
  title: string;

  @Column({
    type: 'varchar',
    length: 600,
    nullable: true,
  })
  content: string;
}
