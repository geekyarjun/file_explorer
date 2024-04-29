const MenuItem = ({
  meta,
  onClick,
  children,
}: {
  meta: unknown;
  children: React.ReactNode;
  onClick: (meta: unknown) => void;
}) => {
  return (
    <li
      className="contextMenuItem"
      onClick={(e) => {
        e?.preventDefault();
        onClick(meta);
      }}
    >
      {children}
    </li>
  );
};

export default MenuItem;
