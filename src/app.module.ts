import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chat/chat.module';
import { PostModule } from './modules/post/post.module';
import { NewsFeedModule } from './modules/news-feed/news-feed.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [UserModule, ChatModule, PostModule, NewsFeedModule, UploadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
