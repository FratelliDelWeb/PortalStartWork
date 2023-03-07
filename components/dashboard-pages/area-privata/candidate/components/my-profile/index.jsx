import FormInfoBox from "./FormInfoBox";
const index = ({
  candidate,
  candidateView,
  setCandidate,
  setCandidateView,
}) => {
  return (
    <div className="widget-content">
      {/*  <LogoUpload /> */}
      {/* End logo and cover photo components */}
      <FormInfoBox
        candidate={candidate}
        candidateEdit={candidateView}
        setCandidate={setCandidate}
        setCandidateView={setCandidateView}
      />
      {/* compnay info box */}
    </div>
  );
};

export default index;
