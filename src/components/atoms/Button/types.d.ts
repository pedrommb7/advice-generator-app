export interface ButtonProps {
    className?: string;
    text: string | number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
}