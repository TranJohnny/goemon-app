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

function CustomTooltip() {
  const { active, range } = this.props;
  if (active) {
    const { payload, label } = this.props;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
