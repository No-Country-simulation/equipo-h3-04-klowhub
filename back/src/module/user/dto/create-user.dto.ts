import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  @MaxLength(100, {
    message: 'El correo electrónico no puede tener más de 100 caracteres',
  })
  email: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(50, {
    message: 'La contraseña no puede tener más de 50 caracteres',
  })
  password: string;
}
