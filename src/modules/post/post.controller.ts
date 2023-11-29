import {Body, Controller, Param, Post} from '@nestjs/common';
import {CreatePostRequestDto} from "./dto/create-post.request.dto";
import {ApiTags} from "@nestjs/swagger";
import {CreatePostResponseDto} from "./dto/create-post.response.dto";
import {AddMediaRequestDto} from "./dto/add-media.request.dto";

@ApiTags('Posts')
@Controller({
  version: '1',
  path: "posts",
})
export class PostController {
  @Post()
  createPost(@Body() createPostDto: CreatePostRequestDto): Promise<CreatePostResponseDto> {
    console.log(createPostDto);
    return Promise.resolve({
      id: "1",
      createdAt: new Date(2023, 5, 4)
    })
  }

  @Post(":postId/add-media")
  addMedia(@Param('postId') id: string, @Body() addMediaRequestDto: AddMediaRequestDto) {

  }
}
