import { Moon, Sun } from "../icons";

export const ToggleTheme = () => {
  return (
    <button className="ml-auto">
      <label className="text-[17px] relative inline-block w-20 h-[2.125rem]">
        <span>
          <Sun className="absolute top-[5px] right-1 z-[1] w-6 h-6 animate-rotate" />
        </span>
        <span>
          <Moon className="fill-[#38aaca] absolute top-[8px] left-[5px] z-[1] w-6 h-6 animate-bounce" />
        </span>
        <input type="checkbox" className="w-0 h-0 opacity-0 peer" />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#3a98e6] transition delay-500 rounded-[1.875rem] before:absolute before:w-[30px] before:h-[30px] before:rounded-[1.25rem] before:left-[2px] before:bottom-[2px] before:z-[2] before:bg-[#e8e8e8] before:transition before:delay-500 peer-checked:bg-[#0e1d33] peer-focus:shadow-[0 0 1px #0e1d33] peer-checked:before:translate-x-11" />
      </label>
    </button>
  );
};
