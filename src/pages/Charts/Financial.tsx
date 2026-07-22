import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import {
  Zoom,
  Inject,
  Tooltip,
  DateTime,
  Crosshair,
  HiloSeries,
  Logarithmic,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import ChartsHeader from "../../components/ChartsHeader";
import { useStateContext } from "../../contexts/useStateContext";

interface FinancialData {
  x: Date;
  high: number;
  low: number;
  open?: number;
  close?: number;
}

const date1 = new Date("2017-01-01");

const filterValue = (value: FinancialData): boolean => {
  return value.x >= date1;
};

const returnValue = (financialChartData as FinancialData[]).filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg">
      <ChartsHeader category="Financial" title="APPLE Historical" />

      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: true,
          }}
          crosshair={{
            enable: true,
            lineType: "Vertical",
            line: { width: 0 },
          }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              low="low"
              high="high"
              name="Apple Inc"
              type="Hilo"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
