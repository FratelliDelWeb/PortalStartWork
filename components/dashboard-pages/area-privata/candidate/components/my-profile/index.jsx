import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = ({dataCL}) => {
  return (
    <div className="widget-content">
      <LogoUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox dataCL={dataCL} />
      {/* compnay info box */}
    </div>
  );
};

export default index;
