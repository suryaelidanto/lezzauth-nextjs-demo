import { AuthEntity, SignInAttemptDto, SignInDto, SignUpDto } from "nextjs/types/api";
export declare const signIn: (dto: SignInDto) => Promise<AuthEntity>;
export declare const signInAttempt: (dto: SignInAttemptDto) => Promise<AuthEntity>;
export declare const signUp: (dto: SignUpDto) => Promise<AuthEntity>;
