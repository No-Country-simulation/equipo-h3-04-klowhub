import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local.guards';
import { GenericResponse } from 'src/common/dto/generic.response';
import { TokenService } from 'src/common/service/jwt/jwt.service';
import { LoginCredentials } from 'src/common/interface/logincredential.interface';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly tokenService: TokenService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<GenericResponse<LoginCredentials>> {
    try {
      const credential = await this.tokenService.genareteCredential({
        email: req.user,
        id: req.id,
      });
      return new GenericResponse({
        code: 201,
        message: 'User created success',
        data: {
          profile: req.user,
          credential,
        },
      });
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
