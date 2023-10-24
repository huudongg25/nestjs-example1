import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDTO {
  @MinLength(10, {
    message: 'UserName is too short',
  })
  @MaxLength(50, {
    message: 'UserName is too long',
  })
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  address: string
}
