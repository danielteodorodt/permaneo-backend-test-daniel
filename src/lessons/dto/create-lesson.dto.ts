import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty({ description: 'Lesson title' })
  title: string;

  @ApiProperty({ description: 'Lesson description' })
  description: string;
}
