import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
  background-color: #121212;
  height: 100%;
`;

export const BackButton = styled.View`
  background-color: #181818;
  width: 45px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 15;
  border-radius: 15px;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 12px;
`;

export const ErrorListCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #181818;
  border-radius: 15px;
  padding: 15px 5px;
  margin-top: 20px;
`;

export const ErrorListCardTitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ErrorListCardSolution = styled.Text`
  color: #9c9c9c;
  font-size: 14px;
  text-align: center;
`;