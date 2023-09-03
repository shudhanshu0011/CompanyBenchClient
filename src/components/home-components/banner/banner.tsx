import { Tab, Tabs } from "react-bootstrap";
import Select from "react-select";
import { ClearIndicatorProps, GroupBase, components } from "react-select";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SearchIcon from '@mui/icons-material/Search';
import { DropdownOption } from "@srctypes/common";
import "./styles.scss";

export const Banner = () => {
  const options: Array<DropdownOption> = [
    { value: ".NET", label: ".NET" },
    { value: "Android", label: "Android" },
    { value: "Angular", label: "Angular" },
    { value: "Apttus CPQ", label: "Apttus CPQ" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Automation Anywhere", label: "Automation Anywhere" },
  ];

  const ClearIndicator = (
    props: React.JSX.IntrinsicAttributes &
      ClearIndicatorProps<unknown, boolean, GroupBase<unknown>>
  ) => {
    return (
      <components.ClearIndicator {...props}>
        <div className="crossIcon">
          <CloseSharpIcon />
        </div>
      </components.ClearIndicator>
    );
  };

  const contractorTabContent = () => {
    return (
      <>
        <div
          className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          Explore 1000s of immediately available candidates for your project
          needs
        </div>
        <div className="search-box">
          <div className="search-form reactive-form">
            <div
              data-wow-delay=".2s"
              className="form-find mt-60 wow animate__animated animate__fadeIn home_autocomplete_search"
            >
              <form className="ng-untouched ng-pristine ng-valid ng-invalid">
                <div className="autocomplete-container">
                  <div className="input-container">
                    <Select
                      options={options}
                      isClearable={true}
                      placeholder="Search Candidates by Technology..."
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused
                            ? "transparent"
                            : "transparent",
                          "&:hover, &:focus": {
                            borderColor: "transparent",
                          },
                        }),
                      }}
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        ClearIndicator: (
                          props: React.JSX.IntrinsicAttributes &
                            ClearIndicatorProps<
                              unknown,
                              boolean,
                              GroupBase<unknown>
                            >
                        ) => ClearIndicator(props),
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-default btn-find font-sm"
                >
                  <SearchIcon />
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="banner-hero hero-2 hero-3">
      <div className="banner-inner">
        <div className="block-banner">
          <div className="tabs-block">
            <Tabs defaultActiveKey="profile" className="mb-40" variant="pills">
              <Tab eventKey="home" title="I want to hire contractors">
                <h1 className="text-42 color-white wow animate__animated animate__fadeInUp mt-30">
                  Hire #<span className="color-green">Remote Developers</span>
                  <br className="d-none d-lg-block" />
                  Within 24 hrs
                </h1>
                {contractorTabContent()}
              </Tab>
              <Tab eventKey="profile" title="I want to deploy my bench">
                <h1 className="text-42 color-white wow animate__animated animate__fadeInUp mt-30">
                  Get your #<span className="color-green">Bench Resources</span>
                  <br className="d-none d-lg-block" />
                  Billed Instantly
                </h1>
                {contractorTabContent()}
              </Tab>
            </Tabs>
          </div>

          <div
            className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp popular_searches"
            data-wow-delay=".3s"
          >
            <strong>Popular Searches:</strong>
            <a href="#">.NET</a>
            <a href="#">Android</a>
            <a href="#">Angular</a>
            <a href="#">Apttus CPQ</a>
            <a href="#">Artificial Intelligence</a>
            <a href="#">Automation Anywhere</a>
          </div>
        </div>
      </div>
    </div>
  );
};