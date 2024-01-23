import * as React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}
export declare function Button({ children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
