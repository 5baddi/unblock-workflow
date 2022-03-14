import "./polyfills";

import "./namespace/mount";
export { ChatRunner } from "./chat";
export { IChat } from "./interfaces/chat";
export { IChatProps, TChatDisplay, TChatPause } from "./interfaces/props";
export { IChatSnapshot } from "./interfaces/snapshot";
export { IChatRunner } from "./interfaces/runner";
export { IChatStyles } from "./interfaces/styles";
export { IChatController } from "./hooks/controller";
export { IChatRendering, IChatRenderProps } from "./interfaces/block";
export { run } from "./run";
export { namespace } from "./namespace";
import "./namespace/unmount";

/** Export local tripetto-runner-fabric for creating custom blocks. */
export { color } from "tripetto-runner-fabric/color";
export { avataaars, IAvataaars } from "tripetto-runner-fabric/components/avataaars";
export { ButtonFabric } from "tripetto-runner-fabric/components/button";
export { CheckboxFabric } from "tripetto-runner-fabric/components/checkbox";
export { CheckboxesFabric, ICheckbox } from "tripetto-runner-fabric/components/checkboxes";
export { DateTimeFabric } from "tripetto-runner-fabric/components/datetime";
export { DropdownFabric, IDropdownFabricOption } from "tripetto-runner-fabric/components/dropdown";
export { EmailFabric } from "tripetto-runner-fabric/components/email";
export { FileFabric, FileThumbnailFabric, IFileController, IFileService } from "tripetto-runner-fabric/components/file";
export { InputFabric } from "tripetto-runner-fabric/components/input";
export { MatrixFabric, IMatrixColumn, IMatrixRow } from "tripetto-runner-fabric/components/matrix";
export { MultipleChoiceFabric, IMultipleChoiceButton } from "tripetto-runner-fabric/components/multiple-choice";
export { NumberFabric } from "tripetto-runner-fabric/components/number";
export { PasswordFabric } from "tripetto-runner-fabric/components/password";
export { PhoneNumberFabric } from "tripetto-runner-fabric/components/phone-number";
export { PictureChoiceFabric, IPictureChoiceOption } from "tripetto-runner-fabric/components/picture-choice";
export { RadiobuttonsFabric, IRadiobutton } from "tripetto-runner-fabric/components/radiobuttons";
export { RatingFabric, RatingShapes } from "tripetto-runner-fabric/components/rating";
export { RequiredIndicatorFabric } from "tripetto-runner-fabric/components/required-indicator";
export { ScaleFabric, IScaleNumeric, IScaleOption } from "tripetto-runner-fabric/components/scale";
export { TextFabric } from "tripetto-runner-fabric/components/text";
export { TextareaFabric } from "tripetto-runner-fabric/components/textarea";
export { URLFabric } from "tripetto-runner-fabric/components/url";
export { YesNoFabric, IYesNo } from "tripetto-runner-fabric/components/yes-no";

/** Export local styled-components for creating custom blocks. */
import styled from "styled-components";
export { styled };
export { css, keyframes } from "styled-components";
