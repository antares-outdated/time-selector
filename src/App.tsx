import React, { useCallback, useState } from "react";
import { ArrowWrap, Inner, MiddleChar, SelectedTime, TimeItem, TimeItemInner, TimeItemSide, Wrap } from "./styles";

export const TimeSelector = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const numberHoursUp = useCallback((step: number) => {
    return hours + step > 23 ? Math.abs(24 - (hours + step)) : hours + step;
  }, [hours]);

  const numberHoursDown = useCallback((step: number) => {
    return hours - step < 0 ? 24 + (hours - step) : hours - step;
  }, [hours]);

  const updateHoursHandler = (isDown: boolean) => {
    if (isDown) {
      setHours((prev) => prev > 0 ? --prev : 23);
    } else {
      setHours((prev) => prev < 23 ? ++prev : 0);
    }
  };


  const numberMinutesUp = useCallback((step: number) => {
    return minutes + step > 59 ? Math.abs(60 - (minutes + step)) : minutes + step;
  }, [minutes]);

  const numberMinutesDown = useCallback((step: number) => {
    return minutes - step < 0 ? 60 + (minutes - step) : minutes - step;
  }, [minutes]);

  const updateMinutesHandler = (isDown: boolean) => {
    if (isDown) {
      setMinutes((prev) => prev > 0 ? --prev : 59);
    } else {
      setMinutes((prev) => prev < 59 ? ++prev : 0);
    }
  };

  return (
    <Wrap>
      <Inner>
      <TimeItem>
        <ArrowWrap onClick={() => updateHoursHandler(false)}><img src="/images/arrow-up.png" /></ArrowWrap>
        <TimeItemInner>
          <TimeItemSide>
            <span>{numberHoursUp(2)}</span>
            <span>{numberHoursUp(1)}</span>
          </TimeItemSide>
          <SelectedTime>{hours}</SelectedTime>
          <TimeItemSide>
            <span>{numberHoursDown(1)}</span>
            <span>{numberHoursDown(2)}</span>
          </TimeItemSide>
        </TimeItemInner>
        <ArrowWrap onClick={() => updateHoursHandler(true)}><img src="/images/arrow-down.png" /></ArrowWrap>
      </TimeItem>
      <MiddleChar>:</MiddleChar>
      <TimeItem>
        <ArrowWrap onClick={() => updateMinutesHandler(false)}><img src="/images/arrow-up.png" /></ArrowWrap>
        <TimeItemInner>
          <TimeItemSide>
            <span>{numberMinutesUp(2)}</span>
            <span>{numberMinutesUp(1)}</span>
          </TimeItemSide>
          <SelectedTime>{minutes}</SelectedTime>
          <TimeItemSide>
            <span>{numberMinutesDown(1)}</span>
            <span>{numberMinutesDown(2)}</span>
          </TimeItemSide>
        </TimeItemInner>
        <ArrowWrap onClick={() => updateMinutesHandler(true)}><img src="/images/arrow-down.png" /></ArrowWrap>
      </TimeItem>
      </Inner>
    </Wrap>
  );
};



