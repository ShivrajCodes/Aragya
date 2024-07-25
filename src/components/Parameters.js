import React from 'react';
import styled from 'styled-components';

const ParametersContainer = styled.div`
  padding: 20px;
  background-color: #020024;
  color: black;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  color: red;
  text-align: left;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const Parameters = () => {
  const parameters = [
    { name: 'OXYGEN SATURATION (SPO2)', exactRate: '95%-100%', abnormalRate: '' },
    { name: 'BLOOD PRESSURE', exactRate: '120/80', abnormalRate: '' },
    { name: 'PULSE', exactRate: '70-100 BPM', abnormalRate: '' },
    { name: 'BODY TEMPERATURE', exactRate: '98.6F', abnormalRate: '' },
    { name: 'BLOOD GLUCOSE LEVEL', exactRate: '100-125mg/dl', abnormalRate: '' },
    { name: 'HAEMOGLOBIN (MALE)', exactRate: '14-18gm/dl', abnormalRate: '' },
    { name: 'HAEMOGLOBIN (FEMALE)', exactRate: '12-16gm/dl', abnormalRate: '' },
    { name: 'BMI', exactRate: '18.5-24.9', abnormalRate: '<18.5 (UNDERWEIGHT), 25-29 (OVERWEIGHT), >30 (OBESITY)' }
  ];

  return (
    <ParametersContainer>
      <h2 style={{ color: 'white' }}>Parameters</h2>
      <Table>
        <thead>
          <tr>
            <Th>PARAMETERS</Th>
            <Th>EXACT RATE</Th>
            <Th>ABNORMAL RATE</Th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr key={index}>
              <Td>{param.name}</Td>
              <Td>{param.exactRate}</Td>
              <Td>{param.abnormalRate}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ParametersContainer>
  );
};

export default Parameters;
