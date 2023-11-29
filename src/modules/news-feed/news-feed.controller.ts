import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {AddFeedRequestDto} from "./dto/add-feed.request.dto";
import {GetFeedResponseDto} from "./dto/get-feed.response.dto";

@ApiTags('News Feed')
@Controller({
  version: '1',
  path: "feed",
})
export class NewsFeedController {
  @Get(":userId")
  @ApiCreatedResponse({
    description: 'Get feed by user id',
    type: GetFeedResponseDto,
  })
  getFeedByUserId(
    @Param('userId') feedId: string,
  ): Promise<GetFeedResponseDto> {
    return Promise.resolve(null);
  }

  @Post(":feedId/add-post")
  addPost(
    @Param('feedId') feedId: string,
    @Body() addFeedRequestDto: AddFeedRequestDto
  ) {
  }

  @Delete(":feedId/delete-post/:postId")
  deletePost(
    @Param('feedId') feedId: string,
    @Param('postId') postId: string,
  ) {
  }
}
