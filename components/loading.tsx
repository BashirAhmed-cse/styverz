export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Simple spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          লোড হচ্ছে...
        </h2>
        
        <p className="text-gray-600">
          অনুগ্রহ করে অপেক্ষা করুন
        </p>
      </div>
    </div>
  );
}