import ProgressBar from "./ProgressBar";

// Simple card component to display each assignment's details
function AssignmentCard({ assignment }) {
  const { title, dueDate, progress } = assignment;

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">Due on: {dueDate}</p>

      {/* progress bar */}
      <ProgressBar progress={progress} />

      <p className="text-sm text-gray-600 mt-2">
        {progress}% completed
      </p>
    </div>
  );
}

export default AssignmentCard;
