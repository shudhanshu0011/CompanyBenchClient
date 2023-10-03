import { DropdownOption, TypeGeneralObj } from "@src/types/common";
import { JobLocList, JobStatus, Technology } from "@src/types/components";

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

export const dropDownMapperLocations = (
  data: Array<JobLocList>
): Array<DropdownOption> => {
  return (
    data?.map((element: JobLocList) => ({
      label: element.cityName,
      value: element.cityId,
    })) || []
  );
};

export const getMappedLocations = (
  location: Array<string>,
  data: Array<JobLocList>
) => {
  
  const defaultData = data?.filter((element: JobLocList) => {
    return location?.includes(element.cityId.toString());
  });

  return dropDownMapperLocations(defaultData);
};

export const dropdownMapperTechnologies = (
  technologiesData: Array<Technology>
): DropdownOption[] =>
  technologiesData?.map((tmp: Technology) => ({
    value: tmp.technologyId,
    label: tmp.technologyName,
  }));

export const getMappedTechnologies = (
  technology: Array<string>,
  data: Array<Technology>
) => {
  const defaultData = data?.filter((element: Technology) => {
    return technology?.includes(element.technologyName);
  });

  return dropdownMapperTechnologies(defaultData);
};

export const dropdownMapperJobStatus = (
  jobStatusData: Array<JobStatus>
): DropdownOption[] =>
  jobStatusData?.map((el: JobStatus) => ({
    value: el.statusId,
    label: el.statusName,
  }));

export const getMappedJobStatus = (
  status: string,
  data: Array<JobStatus>
) => {
  const defaultData = data?.filter((element: JobStatus) => {
    return element.statusId === status?.toString();
  });

  return defaultData ? dropdownMapperJobStatus(defaultData)[0] : status;
};


export const getDate = (timestamp:string) => {
  if(timestamp){
    
    return new Date(timestamp).toISOString().split('T')[0];
  }
 
}