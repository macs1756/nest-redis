import { Module } from '@nestjs/common';
import { EventsRemindersService } from './events-reminders.service';
import { EventsRemindersController } from './events-reminders.controller';

@Module({
  controllers: [EventsRemindersController],
  providers: [EventsRemindersService],
})
export class EventsRemindersModule {}
