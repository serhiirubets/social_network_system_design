import {ApiProperty} from "@nestjs/swagger";

export class SendUserInvitationRequestDto {
  @ApiProperty()
  inviteeId: string;
}