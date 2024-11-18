import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
  Response,
  Req,
  Get,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local.guards';
import { GenericResponse } from 'src/common/dto/generic.response';
import { TokenService } from 'src/common/service/jwt/jwt.service';
import {
  AuthCredetials,
  LoginCredentials,
} from 'src/common/interface/logincredential.interface';
import { Request as ExpressRequest } from 'express';
import { User } from 'src/entity/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req,
    @Response({ passthrough: true }) res,
  ): Promise<GenericResponse<LoginCredentials>> {
    try {
      const credential = await this.tokenService.genareteCredential({
        profile: req.user,
        id: req.id,
      });

      res.cookie('refreshToken', credential.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
      });

      return new GenericResponse({
        code: 201,
        message: 'User logged in success',
        data: {
          profile: req.user,
          access: credential.access,
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

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<GenericResponse<User>> {
    try {
      const existingUser = await this.userService.findOneByparams({
        email: createUserDto.email,
      });

      if (existingUser) {
        throw new HttpException(
          'User with this email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newUser = await this.userService.create(createUserDto);

      return new GenericResponse({
        code: 201,
        message: 'Registration successful. Please login to continue.',
        data: newUser,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        error.message || 'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('refresh')
  async refresh(
    @Req() req: ExpressRequest,
    @Response({ passthrough: true }) res,
  ): Promise<GenericResponse<LoginCredentials>> {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new HttpException(
        'Refresh token not found',
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      const payload = await this.tokenService.verifyToken(refreshToken);
      if (!payload) {
        throw new HttpException('Invalid refresh token', HttpStatus.FORBIDDEN);
      }
      const credentials = await this.tokenService.genareteCredential({
        id: payload.id,
        profile: payload.profile,
      });
      //return { access: credentials.access };
      console.log({ payload });
      return new GenericResponse({
        code: 201,
        message: 'Token refreshed',
        data: {
          profile: payload.profile,
          access: credentials.access,
        },
      });
    } catch (err) {
      throw new HttpException('Invalid refresh token', HttpStatus.FORBIDDEN);
    }
  }
}
