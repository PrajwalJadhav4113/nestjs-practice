import { Controller, Post,Body } from '@nestjs/common';
import { UppercasePipe } from 'src/comman/pipes/uppercase/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body('name',new UppercasePipe())name:string){


        return{message:`Recived name: ${name}`}
    }
    
}
