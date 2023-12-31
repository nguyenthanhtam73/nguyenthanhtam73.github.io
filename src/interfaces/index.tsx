import { ReactNode } from "react";

interface buttonProps {
  children?: ReactNode;
  type?: "link" | "dashed" | "primary" | "text";
  onClick?: () => void;
  loading?: boolean;
}

interface selectProps {
  options: Array<{
    key: number | string;
    value: string;
    label: string | ReactNode;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
  suffixIcon?: ReactNode | null;
  className?: string;
}

interface handleOnChangeLanguageFunc {
  (value: any): void;
}

interface languageSwitcherProps extends Omit<selectProps, "options"> {
  options: string[];
}

interface headerProps extends Omit<languageSwitcherProps, "options"> {
  listLanguage: string[];
  onChangeLanguage?: (value: string) => void;
  onChangeDarkMode?: (value: boolean) => void;
}

interface layoutWithHeaderFooter extends mainProps, headerProps {
  className: string;
}

interface imageProps {
  size?: string | number;
}

interface switchDarkModeProps {
  size?: string | number;
  onChange?: (value: boolean) => void;
}

interface buttonExportPDFProps {
  size?: string | number;
}

interface dividerProps {
  className?: string;
  width?: string;
  position?: "start" | "end" | "center";
}

interface avatarProps {
  size?: "large" | "small" | "default" | number;
  src?: string | null;
}

interface layoutWrapperContentProps {
  ContentLeft?: ReactNode | null;
  ContentRight?: ReactNode | null;
  leftPosition?: string | null;
  rightPosition?: string | null;
}

interface infoProps {
  name: string | undefined;
  job: string | undefined;
  location: string | undefined;
}

interface titleContentProps {
  title: string | undefined;
}

interface contactProps extends titleContentProps {
  phone: string | undefined;
  email: string | undefined;
  website: string | undefined;
  linkedIn: string | undefined;
}

interface mainProps {
  profile: {
    avatar: avatarProps;
    name?: string;
    location?: string;
    job?: string;
  };
  contact: contactProps;
  aboutMe: aboutMeprops;
  skillsSummary: skillsSummaryProps;
  skills: skillsListProps;
  libraries: skillsListProps;
  software: skillsListProps;
  education: timeLineProps;
  languages: languagesProps;
  experience: experienceProps;
}

interface aboutMeprops extends titleContentProps {
  content: string | undefined;
}

interface skillsSummaryProps extends titleContentProps {
  content: string[] | [];
}
interface ListsProps {
  type?: "disc" | "circle";
  content: string[] | [];
  className?: string;
}

interface listsStyledProps {
  type: string;
}

interface checkArrayNotEmptyFunc {
  (params: any[] | undefined | string[] | []): boolean;
}

interface skillsListProps extends skillsSummaryProps {}

interface timeListItem {
  position?: string;
  time?: string;
  name?: string;
  company?: string;
  project?: object[];
}

interface listItemTimeLineFunc {
  (params: timeListItem): ReactNode | Function | null | void;
}

interface timeLineProps extends titleContentProps {
  timeList: timeListItem[];
  isExperience?: boolean;
}

interface listLanguagesProps {
  lang: string;
  level: string;
}

interface languagesProps {
  title: string;
  list: listLanguagesProps[];
}

interface experienceProps extends titleContentProps {
  timeList: timeListItem[];
}

interface listProjectFunc {
  (params: object[]): ReactNode;
}

interface projectExperienceProps {
  name?: string;
  teamSize?: string;
  description?: string;
  technologies?: string;
  responsibilities?: string[] | [];
}

interface descriptionJobFunc {
  (title?: string | null, content?: string | null | ReactNode): ReactNode;
}

interface handleSetWidthFunc {
  (): void;
}

interface handleSetLeftPositionFunc {
  (): void;
}

interface handleUpdateDataFunc {
  (lang: string): void;
}

interface saveDataToLocalStorageFunc {
  (key: string, data: any): boolean;
}

interface getDataFromLocalStorageFunc {
  (key: string): any | null;
}

interface skeletonProps {
  type: string;
  rows?: string | number;
}

interface showSkeletonFunc {
  (type: string, rows?: string | number): ReactNode;
}

interface handleOnExportToPDFFunc {
  (): void;
}

interface handleOnChangeDarkModeFunc {
  (value: any): void;
}

export type {
  layoutWithHeaderFooter,
  buttonProps,
  headerProps,
  selectProps,
  imageProps,
  languageSwitcherProps,
  switchDarkModeProps,
  buttonExportPDFProps,
  dividerProps,
  avatarProps,
  mainProps,
  layoutWrapperContentProps,
  infoProps,
  titleContentProps,
  contactProps,
  aboutMeprops,
  skillsSummaryProps,
  ListsProps,
  checkArrayNotEmptyFunc,
  skillsListProps,
  timeLineProps,
  listItemTimeLineFunc,
  languagesProps,
  listLanguagesProps,
  experienceProps,
  listProjectFunc,
  projectExperienceProps,
  descriptionJobFunc,
  listsStyledProps,
  handleSetWidthFunc,
  handleSetLeftPositionFunc,
  handleOnChangeLanguageFunc,
  handleUpdateDataFunc,
  saveDataToLocalStorageFunc,
  getDataFromLocalStorageFunc,
  skeletonProps,
  showSkeletonFunc,
  handleOnExportToPDFFunc,
  handleOnChangeDarkModeFunc,
};
