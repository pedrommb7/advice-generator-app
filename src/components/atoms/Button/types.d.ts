export interface ButtonProps {
    className?: string;
    children?: JSX.Element | string | number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'button';
    disabled?: boolean;
    ariaLabel?: string;
}