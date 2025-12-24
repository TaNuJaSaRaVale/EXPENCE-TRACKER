const PublicLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* SAME glass background you already use */}
      <div className="glass-world fixed inset-0 -z-10">
        <div className="shine-blob blob-indigo"></div>
        <div className="shine-blob blob-rose"></div>
        <div className="shine-blob blob-sky"></div>
      </div>

      {children}
    </div>
  );
};

export default PublicLayout;
