import * as React from 'react';
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
    children?: React.ReactNode;
}
export declare function TextLabel({ htmlFor, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
