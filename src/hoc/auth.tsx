import {FC} from "react";
import {useNavigate} from "react-router-dom";

export default (SpecificComponent: FC, option: boolean | null) => {
  /*
    option
      T = true  - login
      F = false - not login
      N = null  - anyone
  */
  const Component = () => {
    const navigate = useNavigate();
    if (option === true) {
      return <SpecificComponent />;
    } else if (option === false) {
      return <SpecificComponent />;
    } else {
      return <SpecificComponent />;
    }
  };
  return <Component />;
};
