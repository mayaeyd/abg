import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const examData = [
    { date: "04 Apr", success: 50, fail: 38, absent: 30 },
    { date: "05 Apr", success: 67, fail: 6, absent: 20 },
    { date: "06 Apr", success: 80, fail: 18, absent: 24 },
    { date: "07 Apr", success: 95, fail: 27, absent: 60 },
    { date: "08 Apr", success: 30, fail: 11, absent: 24 },
    { date: "09 Apr", success: 53, fail: 18, absent: 43 },
  ];

  const studentDistribution = [
    { name: "الصف الأول", value: 17.0, color: "#FFA726" },
    { name: "الصف الثاني", value: 15.0, color: "#42A5F5" },
    { name: "الصف الثالث", value: 10.0, color: "#66BB6A" },
    { name: "الصف الرابع", value: 8.0, color: "#FF7043" },
    { name: "الصف الخامس", value: 5.0, color: "#AB47BC" },
    { name: "الصف السادس", value: 10.0, color: "#26C6DA" },
    { name: "الصف السابع", value: 10.0, color: "#66BB6A" },
    { name: "الصف الثامن", value: 5.0, color: "#AB47BC" },
    { name: "الصف التاسع", value: 8.0, color: "#FF7043" },
    { name: "الصف العاشر", value: 7.0, color: "#42A5F5" },
    { name: "الصف الحادي عشر", value: 4.0, color: "#26C6DA" },
  ];

  const subjectAverages = [
    { name: "الكيمياء", percentage: 57.52, color: "#FF7043" },
    { name: "علم الأحياء", percentage: 84.52, color: "#42A5F5" },
    { name: "الإنجليزية", percentage: 54.52, color: "#AB47BC" },
    { name: "الفيزياء", percentage: 67.23, color: "#26C6DA" },
    { name: "الرياضيات", percentage: 84.52, color: "#FFA726" },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const CircularProgress = ({
    percentage,
    color,
    size = 120,
  }: {
    percentage: number;
    color: string;
    size?: number;
  }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r="45"
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold" style={{ color }}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Student Distribution Pie Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            عدد الطلاب حسب الصف
          </h2>
          <div className="h-50">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={studentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {studentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Exam Results Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            نتائج الامتحانات
          </h2>
          <div className="h-50">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={examData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <Bar dataKey="success" fill="#66BB6A" radius={[4, 4, 0, 0]} />
                <Bar dataKey="absent" fill="#42A5F5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fail" fill="#AB47BC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">نجح</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">رسب</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-gray-600">غائب</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Averages */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
          متوسط درجة الموضوع
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {subjectAverages.map((subject, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <CircularProgress
                  percentage={subject.percentage}
                  color={subject.color}
                  size={120}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
