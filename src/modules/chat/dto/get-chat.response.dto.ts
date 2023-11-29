interface Message {
  id: string;
  text: string;
  author: { firstName: string; lastName: string; id: string }
}
export class GetChatResponseDto {
  id: string;
  createdAt: Date;
  title: string;
  messages: Message[]
}