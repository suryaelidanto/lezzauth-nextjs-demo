import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    label?: string;
    touched?: boolean;
    error?: string;
}
export declare function TextInput({ onChange, id, name, label, touched, error, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
