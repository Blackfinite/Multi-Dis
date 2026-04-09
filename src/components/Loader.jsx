const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-6 space-y-3 font-[Inter]">

      {/* Loader Text */}
      <p className="text-blue-600 font-semibold text-lg md:text-xl leading-relaxed animate-pulse">
        Analyzing your data...
      </p>

      {/* Animated Dots */}
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-75"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></span>
      </div>

    </div>
  );
};

export default Loader;