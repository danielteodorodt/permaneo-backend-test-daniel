import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonDto {
  @ApiProperty({ description: 'Lesson title' })
  title?: string;

  @ApiProperty({ description: 'Lesson description' })
  description?: string;
}
