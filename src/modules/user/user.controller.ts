import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {ApiCreatedResponse, ApiExtraModels, ApiTags} from "@nestjs/swagger";
import {UserProfileResponseDto} from "./dto/user-profile.response.dto";
import {SendUserInvitationRequestDto} from "./dto/send-user-invitation.request.dto";

@ApiTags('Users')
@Controller({
  version: '1',
  path: "users",
})
export class UserController {
  @Get()
  @ApiCreatedResponse({
    description: 'Get all users.',
    type: [UserProfileResponseDto],
  })
  getAll(): UserProfileResponseDto[] {
    return [{
      id: "1",
      firstName: "Max",
      secondName: "Petrov",
      avaSrc: "http://",
      shortDescription: "I'm a cool guy",
      location: "USA",
      lastSeen: new Date(2023, 1, 24)
    }];
  }

  @Get(":userId/profile")
  @ApiCreatedResponse({
    description: 'Get user profile by id.',
    type: UserProfileResponseDto,
  })
  getById(@Param('userId') id: string): UserProfileResponseDto {
    return {
      id: id,
      firstName: "Max",
      secondName: "Petrov",
      avaSrc: "http://",
      shortDescription: "I'm a cool guy",
      location: "USA",
      lastSeen: new Date(2023, 1, 24)
    };
  }

  @Get(":userId/friends")
  @ApiCreatedResponse({
    description: 'Get user friends by user id',
    type: UserProfileResponseDto,
  })
  getFriendsById(@Param('userId') id: string): UserProfileResponseDto[] {
    return [{
      id: id,
      firstName: "Max",
      secondName: "Petrov",
      avaSrc: "http://",
      shortDescription: "I'm a cool guy",
      location: "USA",
      lastSeen: new Date(2023, 1, 24)
    }];
  }

  @Post(":userId/invite_friend")
  inviteFriend(@Param('userId') id: string, @Body() body: SendUserInvitationRequestDto): void {
    console.log("userId: " + id);
    console.log("inviteeId " + body.inviteeId);
  }

  @Delete(":userId/delete_friend/:friendId")
  deleteFriend(
    @Param('userId') id: string,
    @Param('friendId') friendId: string
  ) {
    console.log("userId: " + id);
    console.log("inviteeId " + friendId);
  }

}
