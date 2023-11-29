import {ApiProperty} from "@nestjs/swagger";

interface Comment {
  id: string,
  "createdAt": Date,
  author: { firstName: string, secondName: string, likesCount: number }
}

export class GetFeedResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  text: "text";

  @ApiProperty()
  likesCount: number;

  @ApiProperty()
  "comments": Comment[];

  @ApiProperty()
  "shareCount": number;

  @ApiProperty()
  "viewedCount": number;

  @ApiProperty()
  attachments: [{}];

  @ApiProperty()
  media: {
    fileName: string,
    type: string
  };
}