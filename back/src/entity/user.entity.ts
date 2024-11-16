import { Exclude } from 'class-transformer';
// import { Role } from 'src/common/enums/role.enum';
import {
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { VendorProfile } from './vendor-profile.entity';

export enum RoleType {
  ADMIN = 'admin',
  USER = 'user',
  VENDEDOR = 'vendedor',
}

@Entity({ name: 'user', schema: 'public' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ unique: true, type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  picture: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  rol: RoleType;

  @OneToOne(() => VendorProfile, (vendorProfile) => vendorProfile.user)
  vendorProfile?: VendorProfile;
}
