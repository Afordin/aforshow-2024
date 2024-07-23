type TagProps = {
  children: string;
};

export const Tag = ({ children }: TagProps) => {
  return (
    <div className="bg-gradient-to-br from-caPrimary-500/50 to-caSecondary-500 text-white font-semibold rounded-full p-1">
      <span className="flex w-full bg-gray-900 text-white rounded-full px-4 p-2">
        {children}
      </span>
    </div>
  );
};
