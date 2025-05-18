export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-24 h-24">
        {/* Main Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/50 animate-[spin_3s_linear_infinite]" />

        {/* Center Circle */}
        <div className="absolute inset-4 rounded-full bg-blue-600 shadow-md" />

        {/* Orbiting Element */}
        <div
          className="absolute h-3 w-3 rounded-full bg-white 
                     -top-1.5 left-1/2 -translate-x-1/2 
                     animate-[spin_2s_linear_infinite]"
        />
      </div>

      <p className="mt-4 text-gray-600 animate-pulse">Loading</p>
    </div>
  );
}
