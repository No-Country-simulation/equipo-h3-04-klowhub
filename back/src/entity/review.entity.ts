import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Application } from './application.entity';
import { Course } from './course.entity';
import { User } from './user.entity';
import { Max, Min } from 'class-validator';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Course, { nullable: true })
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @ManyToOne(() => Application, { nullable: true })
  @JoinColumn({ name: 'app_id' })
  app: Application;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'int',
    nullable: false,
  })
  @Min(1, { message: 'Rating must be at least 1' })
  @Max(5, { message: 'Rating must be at most 5' })
  rating: number;

  @Column('text')
  comment: string;

  @Column({ type: 'timestamp' })
  review_date: Date;
}
