import { useState } from "react";

 const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const searchGrabber = () => {
    setState(!state);
  };
  return [state, searchGrabber];
};
export default useToggle;