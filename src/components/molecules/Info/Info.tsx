import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { SIZE_ICON_DEFAULT } from "@/utils/constant";
import { infoProps } from "@/interfaces";

function Info(props: infoProps) {
  const { location = "", job = "", name = "" } = props;
  return (
    <>
      <span className="tw-text-3xl tw-font-semibold	">{name}</span>
      <span className="tw-my-3 tw-text-2xl tw-font-light">{job}</span>
      <div className="tw-flex tw-items-center tw-gap-3 tw-mt-1">
        <CiLocationOn
          className="sm:tw-flex tw-hidden"
          size={SIZE_ICON_DEFAULT}
        />
        <span className="tw-text-xl tw-font-light tw-mt-2 tw-text-center sm:tw-text-left">
          {location}
        </span>
      </div>
    </>
  );
}

export default Info;
