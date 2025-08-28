import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ResumeFrameLayer.module.scss";

const ResumeFrameLayer = () => {
  return (
    <div className={s.layer} data-type="layer">
      <div className={s.buttons}>
        <button type="button" title="Select resume">
          <SvgIcon name="checked" />
        </button>

        <button type="button" title="Preview resume">
          <SvgIcon name="eye" />
        </button>
      </div>
    </div>
  );
};

export default ResumeFrameLayer;
