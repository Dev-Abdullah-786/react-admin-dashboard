import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../data/dummy";
import {
  Inject,
  Legend,
  Category,
  Tooltip,
  ChartComponent,
  SeriesDirective,
  StackingColumnSeries,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../contexts/useStateContext";
import type { SeriesModel } from "@syncfusion/ej2-react-charts";

const StackedChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="stacked-chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        {(stackedCustomSeries as SeriesModel[]).map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;
