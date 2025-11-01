import { useState } from "react";
import assignmentsData from "../data/mockData";
import ConfirmationModal from "../components/ConfirmationModal";

// Admin dashboard for managing assignments
function AdminDashboard() {
  const [assignments, setAssignments] = useState(assignmentsData);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open modal when delete is clicked
  const handleDeleteClick = (assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  // confirm deletion and remove the assignment
  const handleConfirmDelete = () => {
    setAssignments((prev) =>
      prev.filter((item) => item.id !== selectedAssignment.id)
    );
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white p-4 rounded-lg shadow-sm mb-3 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{assignment.title}</h2>
              <p className="text-gray-600 text-sm">Due on: {assignment.dueDate}</p>
            </div>

            <button
              onClick={() => handleDeleteClick(assignment)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No assignments available.</p>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message={
          selectedAssignment
            ? `Are you sure you want to delete "${selectedAssignment.title}"?`
            : ""
        }
      />
    </div>
  );
}

export default AdminDashboard;
