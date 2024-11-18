import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    length: 50,
  })
  name: string;

  @Column({ type: 'decimal' })
  price: number;

  @OneToMany(() => VendorProfile, (vendorProfile) => vendorProfile.plan)
  vendorProfiles: VendorProfile[];
}
