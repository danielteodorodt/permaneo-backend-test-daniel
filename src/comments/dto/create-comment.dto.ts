import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ description: 'User name comment' })
  user: string;

  @ApiProperty({ description: 'Comment text' })
  text: string;

  @ApiProperty({ description: 'Comment date' })
  date: Date;
}
