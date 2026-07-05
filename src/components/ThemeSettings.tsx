import { BsCheck } from "react-icons/bs";
import { themeColors } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/useStateContext";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

interface ThemeColor {
  name: string;
  color: string;
}

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        {/* Header */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>

          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{
              color: "rgb(153, 171, 180)",
              borderRadius: "50%",
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Theme Mode */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>

          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>

          <div className="flex gap-3">
            {themeColors.map((item: ThemeColor) => (
              <TooltipComponent
                key={item.name}
                content={item.name}
                position="TopCenter"
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer mt-2"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === currentColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
