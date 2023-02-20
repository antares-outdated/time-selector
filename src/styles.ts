import styled from "styled-components";

export const TimeItemSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeItemInner = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  font-size: 20px;
  color: #3C3C4399;
  opacity: 0.6;

  align-items: center;
  justify-content: center;
`;

export const SelectedTime = styled.div`
  padding: 5px 0;
  z-index: 100;
`;

export const ArrowWrap = styled.div`
  display: flex;
  align-items: center; 
  justify-content:center;
`;

export const Wrap = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 144px;
  height: 178px;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
`;

export const TimeItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  z-index: 3;
  width: 20px;
`;

export const MiddleChar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #3C3C4399; 
  text-align: center;
  background-color: #E9ECF3;
  width:100px;
  z-index: 0;
  border-radius: 8px;
  padding: 8px 10px;
`;


