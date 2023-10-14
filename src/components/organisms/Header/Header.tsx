import React from "react";

import { headerProps } from "@/interfaces";
import StyledHeader from "./HeaderStyled";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import SwitchDarkMode from "@/components/molecules/SwitchDarkMode";
import ButtonExportPDF from "@/components/molecules/ButtonExportPDF";

const Header = (props: headerProps) => {
  const { listLanguage } = props;
  return (
    <StyledHeader className="tw-m-0.5">
      <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
        <SwitchDarkMode />
        <LanguageSwitcher options={listLanguage} />
        <ButtonExportPDF />
      </div>
    </StyledHeader>
  );
};

export default Header;
