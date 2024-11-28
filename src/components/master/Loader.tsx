const Loader = ({ open }: { open: boolean }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center flex-col"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
    >
      <img src="/logo.png" className="max-w-[200px] animate-pulse" alt="" />
    </div>
  );
};

export default Loader;
