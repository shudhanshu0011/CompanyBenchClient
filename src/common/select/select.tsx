import Select from "react-select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StateManagerProps } from "node_modules/react-select/dist/declarations/src/stateManager";
import "./select.scss";

export const SelectDropdown = (
  { components, options, ...rest }: StateManagerProps,
  size?: string
) => {
  const dropdownIndicator = () => {
    return (
      <div>
        <ArrowDropDownIcon />
      </div>
    );
  };

  const defaultComponents = {
    IndicatorSeparator: () => null,
    DownChevron: () => {
      return dropdownIndicator();
    },
  };

  return (
    <div className={`select-wrapper size-${size}`}>
      <Select
        {...rest}
        options={options}
        components={{
          ...defaultComponents,
          ...components,
        }}
      />
    </div>
  );
};
