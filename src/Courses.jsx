const stats = [
  { icon: "📊", label: "Average Grade", value: "88%" },
  { icon: "📚", label: "Courses", value: "3" },
  { icon: "⏰", label: "Study Hours", value: "45h" },
  { icon: "✏️", label: "Assignments", value: "12" },
];

const courses = [
  { name: "React Fundamentals", progress: 75, next: "Components & Props", instructor: "Sarah Wilson" },
  { name: "JavaScript Advanced", progress: 45, next: "Async/Await", instructor: "Mike Johnson" },
  { name: "UI/UX Design", progress: 90, next: "Color Theory", instructor: "Emily Chen" },
];

const assignments = [
  { title: "Build a Todo App", course: "React Fundamentals", status: "pending", due: "Due 2024-03-20" },
  { title: "API Integration", course: "JavaScript Advanced", status: "completed", due: "Due 2024-03-18" },
  { title: "Design System", course: "UI/UX Design", status: "in-progress", due: "Due 2024-03-25" },
];

// Maps each status to its badge colors, kept in one place so it's easy to extend
const statusStyles = {
  pending: "bg-red-50 text-red-500",
  completed: "bg-green-50 text-green-600",
  "in-progress": "bg-yellow-50 text-yellow-600",
};

const announcements = [
  { title: "New Course Available", body: "Check out our new TypeScript course!", time: "2 hours ago" },
  { title: "Maintenance Notice", body: "Platform updates scheduled for tonight", time: "5 hours ago" },
];

function Courses() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Welcome back, Student!</h1>
            <p className="text-sm text-gray-500 mt-1">Here's what's happening with your courses today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative text-xl">
              🔔
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium text-sm">
              S
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-3">
              <span className="text-xl">{stat.icon}</span>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Course progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-5">Course Progress</h2>
            <div className="flex flex-col gap-6">
              {courses.map((course) => (
                <div key={course.name}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{course.name}</p>
                    <p className="text-sm font-medium text-gray-900">{course.progress}%</p>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-800 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500">Next: {course.next}</p>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">

            {/* Upcoming assignments */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-5">Upcoming Assignments</h2>
              <div className="flex flex-col gap-5">
                {assignments.map((item) => (
                  <div key={item.title} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.course}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-1 ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                      <p className="text-xs text-gray-400">{item.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-5">Announcements</h2>
              <div className="flex flex-col gap-4">
                {announcements.map((item) => (
                  <div key={item.title} className="border-l-2 border-blue-500 pl-4">
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.body}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
