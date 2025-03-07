import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  create(lessonId: number, comment: CreateCommentDto): Promise<Comment> {
    const newComment = this.commentsRepository.create({
      ...comment,
      lessonId,
    });
    return this.commentsRepository.save(newComment);
  }
}
