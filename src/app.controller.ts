import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')  // Decorator (user is base route)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()                  //decorator get
  getUser(): string {
    return 'User data fetched successfully!!!'
  }                    // If user go on user route and hit get request then this method will run
}
