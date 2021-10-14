import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

function MyWonderfulComponent({ id, options, other, str, color, children }) {
  const { count } = other;
  const [summ, setSumm] = useState(count);

  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
      setSumm((summ) => summ + 1);
    }
  }, [id, options]);

  console.log(str);

  return (
    <>
      <h1 className={color}>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>{children}</Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  );
}

export default MyWonderfulComponent;