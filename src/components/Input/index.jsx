import { useState } from "react";
import { Tooltip } from "../Tooltip";
import TooltipIcon from "../../assets/tooltip.svg";
import * as S from "./styles";

const tooltipText = `Accepted day formats:<br/><br/>
  <strong>Single letters</strong>: m, t, w, th, f, s, su<br/>
  <strong>Abbreviations</strong>: mon, tue, wed, thu, fri, sat, sun<br/>
  <strong>Full day names</strong>: monday, tuesday, wednesday, etc.`;

export const Input = ({ 
  label,
  value,
  handleSubmit,
  setInputValue
}) => {
  const [tooltipActive, setTooltipActive] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <S.InputWrapper>
      <S.TopWrapper>
        <S.Label htmlFor="date-input">{label}</S.Label>
        <S.TooltipWrapper>
          <S.Icon 
            alt=""
            src={TooltipIcon}
            onMouseLeave={() => setTooltipActive(false)}
            onMouseEnter={() => setTooltipActive(true)}
          />
          <Tooltip isActive={tooltipActive} text={tooltipText} />
        </S.TooltipWrapper>
      </S.TopWrapper>
      <S.Input 
        type="text"
        value={value}
        id="date-input"
        maxLength={256}
        name="date-input"
        onKeyDown={e => handleKeyDown(e)}
        placeholder="i.e. monday, mon or m"
        onChange={e => setInputValue(e.target.value)}
      />
    </S.InputWrapper>
  )
}