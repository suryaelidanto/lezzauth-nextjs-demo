import * as React from 'react';
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
    chldren?: React.ReactNode;
}
export declare function PasswordLabel({ htmlFor, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
