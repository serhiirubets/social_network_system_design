import {Controller, Get, Param} from '@nestjs/common';
import {ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {GetChatResponseDto} from "./dto/get-chat.response.dto";

@ApiTags('Chats')
@Controller({
  version: '1',
  path: "chat",
})
export class ChatController {
  @Get(":chatId")
  @ApiCreatedResponse({
    description: 'Get chat by id.',
    type: GetChatResponseDto,
  })
  getChatById(@Param() chatId: string): Promise<GetChatResponseDto> {
    return null;
  }

  @Get(":userId")
  @ApiCreatedResponse({
    description: 'Get all chats by user id.',
    type: GetChatResponseDto,
  })
  getChatsByUserId(@Param() userId: string): Promise<GetChatResponseDto[]> {
    return null;
  }
}
