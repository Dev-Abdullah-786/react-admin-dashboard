import { useRef } from "react";
import {
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  WorkWeek,
  DragAndDrop,
  ViewDirective,
  ViewsDirective,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import type { ReactNode } from "react";
import Header from "../components/Header";
import { scheduleData } from "../data/dummy";
import type { DragEventArgs } from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import type { ChangedEventArgs } from "@syncfusion/ej2-react-calendars";

interface PropertyPaneProps {
  children: ReactNode;
}

const PropertyPane = ({ children }: PropertyPaneProps) => (
  <div className="mt-5">{children}</div>
);

const Scheduler = () => {
  const scheduleRef = useRef<ScheduleComponent | null>(null);

  const change = (args: ChangedEventArgs) => {
    if (scheduleRef.current && args.value) {
      scheduleRef.current.selectedDate = args.value as Date;
      scheduleRef.current.dataBind();
    }
  };

  const onDragStart = (args: DragEventArgs) => {
    if (args.navigation) {
      args.navigation.enable = true;
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        ref={scheduleRef}
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {(["Day", "Week", "WorkWeek", "Month", "Agenda"] as const).map(
            (view) => (
              <ViewDirective key={view} option={view} />
            ),
          )}
        </ViewsDirective>

        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>

      <PropertyPane>
        <table
          style={{
            width: "100%",
            background: "white",
          }}
        >
          <tbody>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100%" }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
