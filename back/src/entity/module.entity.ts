import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Course } from './course.entity';
import { Lesson } from './lesson.entity';

@Entity('module')
export class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Course, (course) => course.modules)
  @JoinColumn({ name: 'course_id' })
  course: Course;

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
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.module)
  lessons: Lesson[];
}
