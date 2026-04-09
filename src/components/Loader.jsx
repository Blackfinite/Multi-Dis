const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-4 sm:mt-6 space-y-2 sm:space-y-3 font-[Inter]">

      {/* Loader Text */}
      <p className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl leading-relaxed animate-pulse text-center">
        Analyzing your data...
      </p>

      {/* Animated Dots */}
      <div className="flex space-x-2 sm:space-x-2.5">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce delay-75"></span>
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce delay-150"></span>
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce delay-300"></span>
      </div>

    </div>
  );
};

export default Loader;