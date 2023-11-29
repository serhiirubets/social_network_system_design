import {Controller, Post} from '@nestjs/common';
import {ApiBody, ApiConsumes, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {UploadFileResponseDto} from "./dto/upload-file.response.dto";

@ApiTags('Upload')
@Controller({
  version: '1',
  path: "upload",
})
export class UploadController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Upload file.',
    type: [UploadFileResponseDto],
  })
  uploadFile(): Promise<UploadFileResponseDto> {
    return Promise.resolve(null);
  }
}
