import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto {
  @ApiProperty({ description: 'Course name' })
  name?: string;

  @ApiProperty({ description: 'Course category' })
  category?: string;
}
