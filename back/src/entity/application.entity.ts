import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';

@Entity('application')
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => VendorProfile, (vendor) => vendor.applications)
  @JoinColumn({ name: 'owner_id' })
  owner: VendorProfile;

  @Column({
    type: 'varchar',
    length: 600,
    nullable: true,
  })
  description: string;
}
