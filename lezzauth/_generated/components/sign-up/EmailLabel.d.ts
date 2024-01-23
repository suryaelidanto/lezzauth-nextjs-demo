import * as React from 'react';
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
    label?: string;
}
export declare function EmailLabel({ htmlFor, label, style, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
