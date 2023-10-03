import "./paper.scss";

interface Props {
  children?: React.ReactNode;
  title?: string | React.ReactElement;
  titleRight?: string | React.ReactElement;
  className?: string;
}

export const Paper = ({ title, titleRight, children, className }: Props) => {
  return (
    <div className={`panel-white ${className}`}>
      {(title || titleRight) && (
        <div className="mb-15">
          <div className="panel_header flex-box justify-content-space-between">
            <h5 className="pb-15">{title}</h5>
            <h6>{titleRight}</h6>
          </div>
          <div className="divider-text-center"></div>
        </div>
      )}
      {children}
    </div>
  );
};
