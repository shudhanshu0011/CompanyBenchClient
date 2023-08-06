import React from "react";
import Select from "react-select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./select.scss";

export const SelectDropdown = ({ components, size, ...props }: any) => {
  const dropdownIndicator = () => {
    return <div><ArrowDropDownIcon /></div>;
  };

  const defaultComponents = {
    IndicatorSeparator: () => null,
    DownChevron: () => {
      return dropdownIndicator();
    }
  };

  return (
    <div className={`select-wrapper size-${size}`}>
      <Select
        {...props}
        components={{
          ...defaultComponents,
          ...components,
        }}
      />
    </div>
  );
};
