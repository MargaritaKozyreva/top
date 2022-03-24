import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

import cn from "classnames";

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const { className, children, ...attr } = props;
  return (
    <textarea className={cn(className, styles.textarea)} {...attr}>
      {children}
    </textarea>
  );
};
