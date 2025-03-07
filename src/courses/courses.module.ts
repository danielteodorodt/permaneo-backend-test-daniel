import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { LessonsModule } from '../lessons/lessons.module';
import { CommentsModule } from '../comments/comments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), LessonsModule, CommentsModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
