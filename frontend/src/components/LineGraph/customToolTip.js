import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

function CustomTooltip(props) {
  const { active, range } = props;
  if (active) {
    const { payload, label } = props;
    return (
      <div>
        <p>{`${label}`}</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
