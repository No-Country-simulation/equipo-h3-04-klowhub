import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';
import { IApplication } from 'src/common/interface/db/application.interface';

@Entity('application')
export class Application implements IApplication {
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
