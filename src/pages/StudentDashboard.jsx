import assignmentsData from "../data/mockData";
import AssignmentCard from "../components/AssignmentCard";

// Student dashboard to view all assignments
function StudentDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assignmentsData.length > 0 ? (
          assignmentsData.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))
        ) : (
          <p className="text-gray-600">No assignments available.</p>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
