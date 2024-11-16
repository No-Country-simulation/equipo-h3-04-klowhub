import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('platform_and_tool')
export class PlatformAndTool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  @Index()
  name: string;
}
