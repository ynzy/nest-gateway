import { Controller, Get, Post, Body, Patch, Param, Delete, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'src/enum/config.enum';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {}

  @Post()
  @ApiOperation({
    summary: '添加用户' // 接口描述信息
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: '获取user列表'
  })
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    return this.userService.findAll();
  }
  // @Get()
  // @Version(['2'])
  // findAll2() {
  //   return 'user findAll 2';
  // }

  @Get(':id')
  @ApiOperation({
    summary: '根据id获取user'
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '根据id修改user'
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '根据id删除user'
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    console.log(a.b.c);
    return this.userService.findAll();
  }
  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return this.userService.findAll();
  }
  @Get('getTestName')
  getTestName() {
    console.log('测试热重载');
    return this.configService.get('TEST_VALUE').name;
  }
}
