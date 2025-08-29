"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import useGlobalStore from "@/stores/global.store/global.store";
import s from "./ResumeFrameLayer.module.scss";

const ResumeFrameLayer = ({ resumeName }) => {
  const { updateGlobalState, showResumePreview } = useGlobalStore((s) => s);

  function handleOnChange() {
    updateGlobalState({ selectedResume: resumeName });
  }

  function handlePreviewClick() {
    showResumePreview(resumeName)
  }

  return (
    <div className={s.layer} data-type="layer">
      <div className={s.buttons}>
        <button type="button" title="Select resume">
          <input
            type="radio"
            name="resume"
            value={resumeName}
            onChange={handleOnChange}
          />
          <SvgIcon name="checked" />
        </button>

        <button
          type="button"
          title="Preview resume"
          onClick={handlePreviewClick}
          className={s.previewButton}
        >
          <SvgIcon name="eye" />
        </button>
      </div>
    </div>
  );
};

export default ResumeFrameLayer;
