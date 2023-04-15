import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { DonneeGraphService } from './donneeGraph.service';
import { DonneeGraphDto } from './Dto/donneeGraphDto';

@Controller('donneeGraph')
export class DonneeGraphController {
    constructor(private readonly donneeGraphService : DonneeGraphService) {}

    @Post('/donnee')
    async postChartCreate(@Body() body : DonneeGraphDto){
        try{
            return this.donneeGraphService.postDonneeGraph(body);
        }
        catch(error){
            throw new BadRequestException(`Failed to create chart.Reason ${error}`)
        }
    }  
}
