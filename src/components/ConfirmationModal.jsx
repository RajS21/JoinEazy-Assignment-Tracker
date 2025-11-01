// Reusable confirmation popup for delete actions
function ConfirmationModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-80 p-6 rounded-lg shadow-md">
        <p className="mb-4 text-gray-700">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1 rounded"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
