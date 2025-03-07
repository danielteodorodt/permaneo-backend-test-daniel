import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  findAllByCourse(courseId: number) {
    return this.lessonRepository.find({
      where: { courseId },
      relations: ['comments'],
    });
  }

  create(courseId: number, createLessonDto: CreateLessonDto) {
    const lesson = this.lessonRepository.create({
      ...createLessonDto,
      courseId,
    });
    return this.lessonRepository.save(lesson);
  }

  async findOne(courseId: number, lessonId: number) {
    const lesson = await this.lessonRepository.findOne({
      where: { id: lessonId, courseId },
      relations: ['comments'],
    });
    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }
    return lesson;
  }

  async update(
    courseId: number,
    lessonId: number,
    updateLessonDto: UpdateLessonDto,
  ) {
    const lesson = await this.findOne(courseId, lessonId);
    Object.assign(lesson, updateLessonDto);
    return this.lessonRepository.save(lesson);
  }

  async remove(courseId: number, lessonId: number) {
    const lesson = await this.findOne(courseId, lessonId);
    return this.lessonRepository.remove(lesson);
  }
}
