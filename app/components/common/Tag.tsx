type TagProps = {
  children: string;
};

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="gradiant-tag relative rounded-full bg-gradient-to-br from-caPrimary-500/20 to-caSecondary-500/20 p-2 px-4">
      {children}
    </div>
  );
};
