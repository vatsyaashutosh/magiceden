import React, { useEffect } from "react";
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownItem,
} from "./styled";
interface Props {
  isActive: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setAnything: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({
  isActive,

  selected,
  setSelected,
  setAnything,
}: Props) => {
  const options = [
    "Last 5 minutes",
    "Last 15 minutes",
    "Last 1 hour",
    "Last 6 hours",
    "Last 24 hours",
    "Last 7 days",
    "Last 30 days",
  ];
  const obj: any = {
    "Last 5 minutes": "top5m",
    "Last 15 minutes": "top15m",
    "Last 1 hour": "top1h",
    "Last 6 hours": "top6h",
    "Last 24 hours": "top24h",
    "Last 7 days": "top7d",
    "Last 30 days": "top30d",
  };
  useEffect(() => {
    setAnything(obj[selected]);
  }, [selected]);
  return (
    <DropDown>
      <DropDownButton>{selected}</DropDownButton>
      {isActive && (
        <DropDownContent>
          {options.map((ele, i) => (
            <DropDownItem
              key={i}
              onClick={(e: any) => {
                setSelected(e.target.textContent);
              }}
            >
              {ele}
            </DropDownItem>
          ))}
        </DropDownContent>
      )}
    </DropDown>
  );
};
