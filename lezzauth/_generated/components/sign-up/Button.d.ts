import * as React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onSubmit?: () => void;
}
export declare function Button({ children, type, onSubmit, style, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
