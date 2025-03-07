import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { LessonsService } from '../lessons/lessons.service';
import { CommentsService } from '../comments/comments.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateLessonDto } from '../lessons/dto/create-lesson.dto';
import { UpdateLessonDto } from '../lessons/dto/update-lesson.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly lessonsService: LessonsService,
    private readonly commentsService: CommentsService,
  ) {}

  // Courses

  @Post()
  @ApiOperation({ summary: 'Create a new course' })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Return all courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return details of a specific course' })
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific course' })
  update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a specific course' })
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }

  // Lessons

  @Get(':id/lessons')
  @ApiOperation({ summary: 'List lessons of a course' })
  findLessons(@Param('id') courseId: number) {
    return this.lessonsService.findAllByCourse(courseId);
  }

  @Post(':id/lessons')
  @ApiOperation({ summary: 'Create a new lesson for a course' })
  createLesson(
    @Param('id') courseId: number,
    @Body() createLessonDto: CreateLessonDto,
  ) {
    return this.lessonsService.create(courseId, createLessonDto);
  }

  @Get(':id/lessons/:lessonId')
  @ApiOperation({
    summary: 'Details of a specific lesson',
  })
  findLesson(
    @Param('id') courseId: number,
    @Param('lessonId') lessonId: number,
  ) {
    return this.lessonsService.findOne(courseId, lessonId);
  }

  @Put(':id/lessons/:lessonId')
  @ApiOperation({ summary: 'Update a lesson' })
  updateLesson(
    @Param('id') courseId: number,
    @Param('lessonId') lessonId: number,
    @Body() updateLessonDto: UpdateLessonDto,
  ) {
    return this.lessonsService.update(courseId, lessonId, updateLessonDto);
  }

  @Delete(':id/lessons/:lessonId')
  @ApiOperation({ summary: 'Remove a lesson' })
  removeLesson(
    @Param('id') courseId: number,
    @Param('lessonId') lessonId: number,
  ) {
    return this.lessonsService.remove(courseId, lessonId);
  }

  // Comments

  @Post(':id/lessons/:lessonId/comments')
  @ApiOperation({ summary: 'Add a comment to a lesson' })
  createCommentLesson(
    @Param('lessonId') lessonId: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(lessonId, createCommentDto);
  }
}
