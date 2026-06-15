import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, tag, description }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-pink-accent to-pink-soft text-white px-6 py-5 flex items-center justify-between">
          <h5 className="font-bold text-lg pr-4">{title}</h5>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/90 hover:text-white text-2xl leading-none flex-shrink-0"
          >
            &times;
          </button>
        </div>
        <div className="px-8 py-8 text-gray-600 leading-relaxed">
          <p>
            <strong className="text-pink-accent">{tag}</strong> — {description}
          </p>
        </div>
        <div className="px-8 pb-6 pt-2">
          <button
            onClick={onClose}
            className="bg-pink-accent hover:bg-pink-hot text-white font-semibold px-8 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-accent/40"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
