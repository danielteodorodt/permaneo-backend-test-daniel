import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find({ relations: ['lessons'] });
  }

  create(course: CreateCourseDto): Promise<Course> {
    return this.coursesRepository.save(course);
  }

  findOne(id: number): Promise<Course | null> {
    return this.coursesRepository.findOne({
      where: { id },
      relations: ['lessons'],
    });
  }

  async update(id: number, course: UpdateCourseDto): Promise<Course | null> {
    await this.coursesRepository.update(id, course);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
