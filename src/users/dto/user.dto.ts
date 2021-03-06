import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly name: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly admin: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly reg_time: Date;

  @ApiModelProperty()
  readonly login_fail: number;

  @ApiModelProperty()
  readonly locked: boolean;

  @ApiModelProperty()
  readonly permissions: string[];
}

export class PermissionsDto {
  @ApiModelProperty()
  readonly permissions: string[];
}