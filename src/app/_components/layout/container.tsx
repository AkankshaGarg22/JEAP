type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 flex flex-col gap-4">{children}</div>;
};

export default Container;
