import {ApiProperty} from "@nestjs/swagger";

export class AddFeedRequestDto {
  @ApiProperty()
  PostId: string;
}