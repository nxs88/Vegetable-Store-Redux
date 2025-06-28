
import { Button as MantineButton} from '@mantine/core';

type ButtonProps = {
    variant?:string;
    color?:string;
    radius?:string;
    size?:string;
    className?:string;
    children:React.ReactNode;
    onClick?:()=>void
}

export default function Button({children,...props}:ButtonProps) {
  return <MantineButton {...props}>{children}</MantineButton>;
}