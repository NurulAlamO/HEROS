import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function ReviewChart({ ratings }) {
  const data = ratings.map((item) => ({
    name: item.name.replace(' star', '★'),
    count: item.count,
  }));

  return (
    <div className="h-64 w-full sm:h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          layout="vertical"
          data={data} 
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis 
            type="number" 
            tick={{ fontSize: 12 }} />
          <YAxis 
            dataKey="name"
            type="category"
            tick={{ fontSize: 12 }} 
            reversed
            />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
          <Bar 
            dataKey="count" 
            fill="#6366f1" 
            radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
