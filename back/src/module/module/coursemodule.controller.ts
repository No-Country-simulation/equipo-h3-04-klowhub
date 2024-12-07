import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-coursemodule.dto';
import { ModuleService } from './coursemodule.service';
import { UpdateModuleDto } from './dto/update-coursemodule.dto';

@Controller('module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  async createModule(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.createModule(createModuleDto);
  }

  @Patch(':id')
  async updateModule(
    @Param('id') id: string,
    @Body() updateModuleDto: UpdateModuleDto,
  ) {
    return this.moduleService.updateModule(id, updateModuleDto);
  }
}
