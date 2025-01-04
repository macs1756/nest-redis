import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsRemindersService } from './events-reminders.service';
import { CreateEventsReminderDto } from './dto/create-events-reminder.dto';
import { UpdateEventsReminderDto } from './dto/update-events-reminder.dto';

@Controller('events-reminders')
export class EventsRemindersController {
  constructor(private readonly eventsRemindersService: EventsRemindersService) {}

  @Post()
  create(@Body() createEventsReminderDto: CreateEventsReminderDto) {
    return this.eventsRemindersService.create(createEventsReminderDto);
  }

  @Get()
  findAll() {
    return this.eventsRemindersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsRemindersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventsReminderDto: UpdateEventsReminderDto) {
    return this.eventsRemindersService.update(+id, updateEventsReminderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsRemindersService.remove(+id);
  }
}
