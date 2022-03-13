import { Text, TextProps, HeaderProps, SpanProps, PProps } from "./Text";

export const H1: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h1" {...props} />
);
export const H2: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h2" {...props} />
);
export const H3: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h3" {...props} />
);
export const H4: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h4" {...props} />
);
export const H5: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h5" {...props} />
);
export const H6: React.FC<Omit<HeaderProps, "type">> = (props) => (
  <Text type="h6" {...props} />
);

export const Span: React.FC<Omit<SpanProps, "type">> = (props) => (
  <Text type="span" {...props} />
);
export const P: React.FC<Omit<PProps, "type">> = (props) => (
  <Text type="p" {...props} />
);
