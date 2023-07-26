import Lottie from "lottie-react";
import error from "../../assets/errorpage.json";
const Unknownpage = () => {
    return (
        <div>
              <Lottie className="h-screen" animationData={error} />
        </div>
    );
};

export default Unknownpage;