export declare class UserDto {
    readonly username: string;
    readonly name: string;
    readonly admin: boolean;
    readonly password: string;
    readonly reg_time: Date;
    readonly login_fail: number;
    readonly locked: boolean;
    readonly permissions: string[];
}
export declare class PermissionsDto {
    readonly permissions: string[];
}
