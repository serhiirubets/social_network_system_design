import {ApiProperty} from "@nestjs/swagger";

export class CreatePostResponseDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  createdAt: Date;
}