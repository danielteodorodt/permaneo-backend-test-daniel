import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ description: 'Course name' })
  name: string;

  @ApiProperty({ description: 'Course category' })
  category: string;
}
