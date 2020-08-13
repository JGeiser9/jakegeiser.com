import React from "react";
import { SvgIcon } from "@material-ui/core";

// Images
import { Wolf } from "components/svg";

function Logo(props) {
  return (
    <SvgIcon {...props}>
      <Wolf />
    </SvgIcon>
  );
}

export default Logo;
