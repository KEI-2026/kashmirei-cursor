import GetInvolvedPhotos from "../GetInvolvedPart/GetInvolvedPhotos/GetInvolvedPhotos";
import GetInvolvedWays from "../GetInvolvedPart/GetInvolvedWays/GetInvolvedWays";
import GetInvolvedSupport from "../GetInvolvedPart/GetInvolvedSupport/GetInvolvedSupport";

const GetInvolved = () => {
  return (
    <>
      
      <GetInvolvedWays />
      <GetInvolvedPhotos />
      <GetInvolvedSupport />
    </>
  );
};

export default GetInvolved;
