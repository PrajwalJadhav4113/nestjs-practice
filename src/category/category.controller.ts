import { Controller,Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}  // this is instane= categoryService
    @Get()
    getAllCategories(){
         return this.categoryService.getCategories();   // this instance call here and write sevice method
    }
}
