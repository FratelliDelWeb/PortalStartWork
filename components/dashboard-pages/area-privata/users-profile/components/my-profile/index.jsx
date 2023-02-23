import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = ({user}) => {
  console.log(user)
  return (
    <div className="widget-content">
 {/*      <LogoUpload /> */}
      {/* End logo and cover photo components */}

      <FormInfoBox user={user} />
      {/* compnay info box */}
    </div>
  );
};

export default index;
