import { forwardRef } from "react";
import s from "./LiveResume.module.scss";

const LiveResume = forwardRef((props, ref) => {
  return <section className={s.liveResume} ref={ref}></section>;
});

export default LiveResume;
