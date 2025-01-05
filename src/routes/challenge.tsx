import styled from 'styled-components';
import AttendanceCalendar from '../components/Calendar';

const Wrapper = styled.div`
  background: #141414;
  min-height: 100vh;
  padding: 20px;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

const ChallengeCard = styled.div`
  background: #1f1f1f;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #333;
`;

const ChallengeInfo = styled.div`
  margin-bottom: 16px;

  h2 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #262626;
  border-radius: 2px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProgressFill = styled.div<{ value: number }>`
  height: 100%;
  background: #e50914;
  width: ${(props) => props.value}%;
  transition: width 0.3s ease;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
`;

const StatBox = styled.div<{ isAchieved?: boolean }>`
  text-align: center;
  padding: 12px;
  background: ${(props) => (props.isAchieved ? '#2a0f11' : '#262626')};
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  ${(props) =>
    props.isAchieved &&
    `
    border: 1px solid #e50914;
    box-shadow: 0 0 15px rgba(229, 9, 20, 0.3);
    animation: pulse 2s infinite;

    h3 {
      color: #ff1a1a;
      text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    &::after {
      content: '🏆';
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 24px;
      transform: rotate(25deg);
    }
  `}

  h3 {
    font-size: 24px;
    margin-bottom: 4px;
    color: #e50914;
  }

  p {
    color: #999;
    font-size: 14px;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 15px rgba(229, 9, 20, 0.3);
    }
    50% {
      box-shadow: 0 0 25px rgba(229, 9, 20, 0.5);
    }
    100% {
      box-shadow: 0 0 15px rgba(229, 9, 20, 0.3);
    }
  }
`;

const CalendarWrapper = styled.div<{ isAchieved?: boolean }>`
  background: ${(props) => (props.isAchieved ? '#2a0f11' : '#262626')};
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.isAchieved &&
    `
    border: 1px solid #e50914;
    box-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
    animation: calendarPulse 2s infinite;

    &::before {
      content: '🎯 주간 목표 달성!';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #e50914;
      padding: 5px 15px;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      white-space: nowrap;
      box-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    &::after {
      content: '🏆';
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 24px;
      transform: rotate(25deg);
    }
  `}

  @keyframes calendarPulse {
    0% {
      box-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(229, 9, 20, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
    }
  }
`;

function Challenge() {
  const attendedDays = [1, 3, 5, 8, 10, 12, 15];
  const progress = 60;
  const weeklyAttendance = 5;
  const weeklyProgress = 100;
  const isWeeklyGoalAchieved = weeklyAttendance >= 5;

  return (
    <Wrapper>
      <Title>출석</Title>

      <CalendarWrapper isAchieved={isWeeklyGoalAchieved}>
        <AttendanceCalendar attendedDays={attendedDays} />
      </CalendarWrapper>

      <ChallengeCard>
        <ChallengeInfo>
          <h2>이번 주 출석 현황</h2>
          <ProgressContainer>
            <ProgressFill value={weeklyProgress} />
          </ProgressContainer>
        </ChallengeInfo>

        <StatsContainer>
          <StatBox isAchieved={isWeeklyGoalAchieved}>
            <h3>{weeklyAttendance}일</h3>
            <p>출석일수</p>
          </StatBox>
          <StatBox>
            <h3>5일</h3>
            <p>목표일수</p>
          </StatBox>
          <StatBox isAchieved={isWeeklyGoalAchieved}>
            <h3>{weeklyProgress}%</h3>
            <p>달성률</p>
          </StatBox>
        </StatsContainer>
      </ChallengeCard>

      <ChallengeCard>
        <ChallengeInfo>
          <h2>이번 달 출석 현황</h2>
          <ProgressContainer>
            <ProgressFill value={progress} />
          </ProgressContainer>
        </ChallengeInfo>

        <StatsContainer>
          <StatBox>
            <h3>15일</h3>
            <p>출석일수</p>
          </StatBox>
          <StatBox>
            <h3>25일</h3>
            <p>목표일수</p>
          </StatBox>
          <StatBox>
            <h3>60%</h3>
            <p>달성률</p>
          </StatBox>
        </StatsContainer>
      </ChallengeCard>
    </Wrapper>
  );
}

export default Challenge;
