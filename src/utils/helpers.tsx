import { DropdownOption, TypeGeneralObj } from "@src/types/common";

export const dropDownMapper = (
  data: Array<TypeGeneralObj>
): Array<DropdownOption> => {
  return (
    data?.map((element: TypeGeneralObj) => ({
      label: element.name,
      value: element.id,
    })) || []
  );
};
