import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type ButtonprimaryfullWidthType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
};

const ButtonprimaryfullWidth: NextPage<ButtonprimaryfullWidthType> = ({
  className = "",
  propFlex,
  propHeight,
}) => {
  const buttonprimaryfullWidthStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <Button
      className={`self-stretch flex-1 ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "14",
        background: "#355dff",
        borderRadius: "0px 0px 0px 0px",
        "&:hover": { background: "#355dff" },
      }}
      style={buttonprimaryfullWidthStyle}
    >
      Sign in
    </Button>
  );
};

export default ButtonprimaryfullWidth;
