import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lesson } from '../../lessons/entities/lesson.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];
}
