import { memo, useEffect } from "react";

function FnComp(props) {
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []); // only once

  useEffect(() => {
    console.log("update");
  }, [props.name]);

  useEffect(() => {}, []);
  return <div>FnComp</div>;
}

export default memo(FnComp);
