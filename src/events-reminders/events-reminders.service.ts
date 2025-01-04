import { Injectable } from '@nestjs/common';
import { CreateEventsReminderDto } from './dto/create-events-reminder.dto';
import { UpdateEventsReminderDto } from './dto/update-events-reminder.dto';

@Injectable()
export class EventsRemindersService {
  create(createEventsReminderDto: CreateEventsReminderDto) {
    return 'This action adds a new eventsReminder';
  }

  findAll() {
    return `This action returns all eventsReminders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventsReminder`;
  }

  update(id: number, updateEventsReminderDto: UpdateEventsReminderDto) {
    return `This action updates a #${id} eventsReminder`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventsReminder`;
  }
}
