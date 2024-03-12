import React, { useState } from "react";
import { Container } from "../Container";
import Button from "../Button";
import polygon from "../../images/STD-polygon.svg";
import { breakpoints } from "../../../utils/theme";
import { days } from "../../../utils/days-data-2022";
import {
  StyledLineUpSchedule,
  StyledLineUpBody,
  StyledFullLineUpList,
  StyledSeparator,
  StyledLineUpHeader,
  StyledLineUpBtnSection,
  StyledLineUpBtn,
  Title,
} from "./styles";
import EyeVector from "../../images/Starbust3.png";
import heroPolygon from "../../images/hero/polygon2.svg";

import DaySchedule from "../DaySchedule/index.jsx";
import styled from "styled-components";
import BannerMarquee from "../Marquee.jsx";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("schedule");
  const [currentDay, setCurrentDay] = useState(1);

  const handleDaySelection = (day) => {
    setCurrentSection("schedule");
    setCurrentDay(day);
  };

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title>SCHEDULE</Title>
        <StyledLineUpHeader>
          <StyledLineUpBtnSection>
            {days.map((dayInfo, i) => (
              <StyledLineUpBtn
                className={
                  currentDay === i + 1 && currentSection === "schedule"
                    ? "selected"
                    : ""
                }
                onClick={() => {
                  handleDaySelection(i + 1);
                }}
                label={`⟶ Day 0${i + 1}`}
              >
                {`${dayInfo.date}`}
              </StyledLineUpBtn>
            ))}
          </StyledLineUpBtnSection>
        </StyledLineUpHeader>

        <StyledLineUpBody>
          {currentSection === "schedule" && (
            <>
              <DaySchedule
                dayNumber={currentDay}
                dayInfo={days[currentDay - 1]}
              />
            </>
          )}
        </StyledLineUpBody>
        <SaveTheDate
          href="https://events.decentraland.org/event/?id=97aff492-b4b9-4ba1-bd08-bfa7e32be036&utm_source=landingpage&utm_medium=organic&utm_campaign=DCLMF23"
          target="_blank"
        >
          <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>
            JUMP IN{" "}
            <span>
              <Polygon src={heroPolygon} />
            </span>
          </p>
        </SaveTheDate>
      </Container>
      <div style={{ marginTop: "72px" }}>
        <BannerMarquee direction="right" />
      </div>
    </StyledLineUpSchedule>
  );
};

const SaveTheDate = styled(Button)`
  width: 100%;
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

export default LineUpSchedule;
