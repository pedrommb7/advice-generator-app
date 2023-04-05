import { FC, SVGProps } from 'react';

export interface ISvgProps {
    icon: FC<SVGProps<SVGSVGElement>>;
    className?: string;
}