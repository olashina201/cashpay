import React from "react";
import styled from "styled-components";
import TinyAreaCharts from "../charts/TinyAreaCharts";

const Statistic = styled.div`
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  background-color: var(--ghost-white);
  border-radius: 0.75em;
  padding: 1.5em;
  padding-top: .2em;
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 1em;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: .1em;
`;

const Select = styled.select`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  color: var(--blue-pantone);
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.75em 3.5em 0.75em 1em;
  border-radius: 1.5em;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`;

const ChartContainer = styled.div`
  height: 10em;
`;
function Statistics() {
  return (
    <Statistic>
      <Header>
        <h1>Statistics</h1>
        <Select>
          <option value="Year">Year</option>
          <option value="Month">Month</option>
          <option value="Day">Day</option>
        </Select>
      </Header>
      <ChartContainer>
        <TinyAreaCharts />
      </ChartContainer>
    </Statistic>
  );
}

export default Statistics;
