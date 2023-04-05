export interface InputProps {
    type: 'text' | 'number';
    placeholder?: string;
    className?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}