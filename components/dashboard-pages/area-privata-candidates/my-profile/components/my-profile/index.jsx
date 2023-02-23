import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = ({user,cookie }) => {
  return (
    <div className="widget-content">
      <LogoUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox user={user}  cookie={cookie}/>
      {/* compnay info box */}
    </div>
  );
};

export default index;
