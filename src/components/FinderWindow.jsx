function FinderWindow({ title, onClose, children }) {
    return (
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[850px]
          h-[520px]
          rounded-2xl
          bg-white
          shadow-2xl
          overflow-hidden
          z-50
        "
      >
        {/* Title Bar */}
        <div className="h-12 bg-[#f6f6f6] border-b flex items-center px-4">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500"
            />
  
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
  
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
  
          <p className="absolute left-1/2 -translate-x-1/2 text-sm font-medium">
            {title}
          </p>
        </div>
  
        {/* Window Content */}
        <div className="p-8 h-full">
          {children}
        </div>
      </div>
    );
  }
  
  export default FinderWindow;