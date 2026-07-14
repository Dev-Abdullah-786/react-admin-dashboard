import {
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import type { ChartDataPoint } from "../data/dummy";
import { useStateContext } from "../contexts/useStateContext";

interface PieChartProps {
  id: string;
  data: ChartDataPoint[];
  legendVisiblity: boolean;
  height: string;
}

const PieChart = ({ id, data, legendVisiblity, height }: PieChartProps) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        visible: legendVisiblity,
        background: "white",
      }}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          radius="70%"
          startAngle={0}
          endAngle={360}
          explode={true}
          explodeIndex={2}
          explodeOffset="10%"
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
