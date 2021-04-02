import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
  background-color: #121212;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #181818;
  border-radius: 15px;
  padding: 15px 5px;
  margin-bottom: 20px;
`;

export const CardTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const CardSubtitle = styled.Text`
  color: #9c9c9c;
  font-size: 14px;
`;

export const CardImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;