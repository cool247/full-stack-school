const Loading = () => {
  return (
    <div className="flex h-screen animate-pulse">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-200 h-full p-4">
        {/* Sidebar items */}
        <div className="bg-gray-300 h-8 w-3/4 mb-6 rounded"></div>
        <div className="bg-gray-300 h-8 w-1/2 mb-6 rounded"></div>
        <div className="bg-gray-300 h-8 w-2/3 mb-6 rounded"></div>
        <div className="bg-gray-300 h-8 w-3/4 mb-6 rounded"></div>
        <div className="bg-gray-300 h-8 w-1/2 mb-6 rounded"></div>
        <div className="bg-gray-300 h-8 w-2/3 mb-6 rounded"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 space-y-6 bg-gray-100">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-24 rounded-lg"></div>
        </div>

        {/* Graph Section */}
        <div className="bg-gray-300 h-64 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Loading;
