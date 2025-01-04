import { PartialType } from '@nestjs/swagger';
import { CreateEventsReminderDto } from './create-events-reminder.dto';

export class UpdateEventsReminderDto extends PartialType(CreateEventsReminderDto) {}
