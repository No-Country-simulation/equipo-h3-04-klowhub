import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';
import { Module } from './module.entity';
import { ContentPillar } from './content-pillar.entity';
import { Sector } from './sector.entity';
import { Functionality } from './funcionality.entity';
import { Platform } from './platform.entity';
import { PlatformAndTool } from './plantform_and_tool.entity';
import { ICourse } from 'src/common/interface/db/course.interface';

export enum CourseLevel {
  BASIC = 'basic',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export enum CourseLanguage {
  ENGLISH = 'english',
  SPANISH = 'spanish',
}

export enum CoursePlatform {
  APPSHEET = 'AppSheet',
  POWERAPPS = 'Power Apps',
}

export enum CourseType {
  COURSE = 'course',
  LESSON = 'lesson',
}

@Index(['title', 'description', 'level', 'language'])
@Index(['language'])
@Index(['type', 'level', 'language'])
@Index(['isFree', 'price'])
@Index(['language', 'level'])
@Entity('course')
export class Course implements ICourse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  title: string;

  @Column({ type: 'varchar', length: 600, nullable: true })
  @Index()
  description: string;

  @Column({ type: 'varchar', length: 600, nullable: true })
  @Index()
  image: string;

  @Column({ type: 'boolean', default: true })
  isFree: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'enum', enum: CourseType, default: CourseType.COURSE })
  @Index()
  type: CourseType;

  @Column({
    type: 'enum',
    enum: CourseLevel,
    default: CourseLevel.BASIC,
  })
  @Index()
  level: CourseLevel;

  @Column({ type: 'enum', enum: CourseLanguage })
  language: CourseLanguage;

  @ManyToMany(() => ContentPillar)
  @JoinTable({ name: 'course_content_pillar' })
  contentPillars: ContentPillar[];

  @ManyToMany(() => Sector)
  @JoinTable({
    name: 'course_sector',
  })
  sectors: Sector[];

  @ManyToMany(() => Functionality)
  @JoinTable({
    name: 'course_functionality',
  })
  functionalities: Functionality[];

  // @ManyToMany(() => Platform)
  // @JoinTable({
  //   name: 'course_platform',
  // })
  // platforms: Platform[];
  @Column({ type: 'enum', enum: CoursePlatform })
  platform: CoursePlatform;

  @ManyToMany(() => PlatformAndTool)
  @JoinTable({
    name: 'course_platform_and_tool',
  })
  platformsAndTool: PlatformAndTool[];

  @ManyToOne(() => VendorProfile, (vendor) => vendor.courses)
  @JoinColumn({ name: 'owner_id' })
  owner: VendorProfile;

  @OneToMany(() => Module, (module) => module.course)
  modules: Module[];

  constructor(partial?: Partial<Course>) {
    Object.assign(this, partial);
  }
}
