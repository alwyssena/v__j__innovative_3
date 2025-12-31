export default function LoginPopup({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
      onClick={onClose}   // click outside closes
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // prevent close on form click
      >
        {/* ❌ close */}
        <button
          className="absolute top-3 right-4 text-xl"
          onClick={onClose}
        >
          ❌
        </button>

        {children}
      </div>
    </div>
  );
}
