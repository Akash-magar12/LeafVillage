const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background">
      <img src="/loading.gif" alt="Loading..." className="w-32 h-32 mb-4" />
      <p className="text-2xl font-heading font-medium text-muted-foreground animate-pulse">
        Summoning Characters...
      </p>
    </div>
  );
};

export default Loader;
