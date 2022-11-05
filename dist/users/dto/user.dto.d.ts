export declare class UserDto {
    readonly email: string;
    readonly role: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly phone: string;
    readonly reg_time: Date;
    readonly login_fail: number;
    readonly locked: boolean;
    readonly verified: boolean;
    readonly permissions: string[];
    readonly status: string;
    readonly sections: string[];
    readonly modules: string[];
    toJSON(): Record<string, any>;
}
export declare class PermissionsDto {
    readonly permissions: string[];
}
