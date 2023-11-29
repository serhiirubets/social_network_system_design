import {ApiProperty} from "@nestjs/swagger";

export class UploadFileResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fileName: string;

  @ApiProperty()
  fileUrl: string;
}