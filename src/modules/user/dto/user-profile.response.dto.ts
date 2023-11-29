import {ApiProperty} from "@nestjs/swagger";

export class UserProfileResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  secondName: string;

  @ApiProperty()
  avaSrc: string;

  @ApiProperty()
  shortDescription: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  lastSeen: Date;
}