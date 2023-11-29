import {ApiProperty} from "@nestjs/swagger";

export class AddMediaRequestDto {
  @ApiProperty()
  fileId: string;
}