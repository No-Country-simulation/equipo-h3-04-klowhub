import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';
import { Module } from './module.entity';
import {
  ContentType,
  CourseLevel,
  CreationType,
  DicountType,
  DiscountOption,
  Platform,
} from 'src/common/interface/db/course.interface';

@Index(['title', 'description', 'skillLevel', 'language'])
@Entity('course')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  title: string;

  @Column({ type: 'enum', enum: ContentType })
  contentType: ContentType;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'enum', enum: Platform })
  platform: string;

  @Column({ type: 'text', nullable: true })
  toolsAndPlatforms: string;

  @Column({ type: 'text', enum: CreationType })
  creationType: CreationType;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'enum', enum: CourseLevel })
  skillLevel: CourseLevel;

  @Column({ type: 'varchar', length: 50 })
  language: string;

  @Column({ type: 'simple-array', nullable: true })
  labels: string[];

  @Column({ type: 'enum', enum: DiscountOption })
  hasDiscount: DiscountOption;

  @Column({ type: 'uuid', nullable: true })
  discountProductId: string;

  @Column({ type: 'text', nullable: false })
  learningOutcomes: string;

  @Column({ type: 'simple-array', nullable: true })
  sector: string[];

  @Column({ type: 'simple-array', nullable: true })
  contentPillar: string[];

  @Column({ type: 'simple-array', nullable: true })
  functionalities: string[];

  @Column({ type: 'simple-array', nullable: true })
  prerequisites: string[];

  @Column({ type: 'text', nullable: false })
  detailedDescription: string;

  @Column({ type: 'float', nullable: true })
  discountPercentage?: number;

  @Column({ type: 'enum', enum: DicountType, nullable: true })
  discountTypeProduct?: DicountType;

  @Column({ type: 'varchar', nullable: true })
  coverImage?: string;

  @ManyToOne(() => VendorProfile, (vendor) => vendor.courses)
  @JoinColumn({ name: 'owner_id' })
  owner: VendorProfile;

  @OneToMany(() => Module, (module) => module.course)
  modules: Module;

  constructor(partial?: Partial<Course>) {
    Object.assign(this, partial);
  }
}
