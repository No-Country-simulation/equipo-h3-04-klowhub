import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Plan } from './plan.entity';
import { User } from './user.entity';
import { Application } from './application.entity';
import { Course } from './course.entity';

@Entity('vendor_profile')
export class VendorProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.vendorProfile)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Plan, (plan) => plan.vendorProfiles)
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @OneToMany(() => Application, (application) => application.owner)
  applications: Application[];

  @OneToMany(() => Course, (course) => course.owner)
  courses: Course[];
}
