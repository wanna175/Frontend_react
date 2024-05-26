import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  update: (event: MouseEvent<HTMLButtonElement>) => void;
  submit: (event: MouseEvent<HTMLButtonElement>) => void;
  writer: (event: ChangeEvent<HTMLInputElement>) => void;
  title: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: (event: ChangeEvent<HTMLInputElement>) => void;
  data: any;
}
export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
