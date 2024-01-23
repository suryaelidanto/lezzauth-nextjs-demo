import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    label?: string;
}
export declare function PasswordInput({ onChange, id, name, label, style, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
