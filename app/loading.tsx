export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">লোড হচ্ছে</h3>
          <p className="mt-2 text-sm text-gray-600">অনুগ্রহ করে একটু অপেক্ষা করুন...</p>
        </div>
      </div>
    </div>
  );
}