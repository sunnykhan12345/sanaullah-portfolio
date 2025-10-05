export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Hey Alisha,</h2>
      <p className="text-gray-500 mb-6">Good to see you back</p>

      {/* Stats Boxes */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            title: "Visit duration",
            value: "5m 8s",
            change: "-7.85%",
            color: "red",
          },
          {
            title: "Total visits",
            value: "325k",
            change: "+18.25%",
            color: "green",
          },
          {
            title: "Realtime users",
            value: "635",
            change: "+21.01%",
            color: "blue",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
          >
            <div className="text-sm text-gray-500">{stat.title}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className={`text-sm mt-2 text-${stat.color}-500`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Graph + Tabs */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold">Sales 2022</h3>
            <p className="text-green-600 font-medium">
              $12.7k{" "}
              <span className="text-sm text-gray-400">↑ 9.3% VS LAST YEAR</span>
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">
              Daily
            </button>
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">
              Weekly
            </button>
            <button className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
              Annually
            </button>
          </div>
        </div>
        <div className="h-40 bg-green-50 rounded-lg flex items-center justify-center text-gray-400">
          [Sales Chart Placeholder]
        </div>
      </div>
    </div>
  );
}
