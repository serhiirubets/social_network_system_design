import {ApiProperty} from "@nestjs/swagger";
import {POST_VISIBILITY} from "../post.enum";

export class CreatePostRequestDto {
  @ApiProperty()
  authorId: string;

  @ApiProperty()
  text: string;

  @ApiProperty({ name: "Attachments ids"})
  attachments?: string[];

  @ApiProperty({
    enum: Object.values(POST_VISIBILITY),
  })
  visibility?: POST_VISIBILITY;
}