import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { ExceptionController } from './exception/exception.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule,ConfigModule.forRoot(),MongooseModule.forRoot(process.env.MONGO_URI!)],
  controllers: [AppController, UserController, ProductController, MynameController, ExceptionController],
  providers: [AppService, ProductService],
})
export class AppModule {}


