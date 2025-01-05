import styled from 'styled-components';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
} from 'date-fns';

const Calendar = styled.div`
  background: #1f1f1f;
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  border: 1px solid #333;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  width: 100%;
`;

const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
  text-align: center;
  font-weight: bold;
  color: #999;
`;

const DayCell = styled.div<{ isAttended?: boolean }>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isAttended ? '#E50914' : '#262626')};
  color: ${(props) => (props.isAttended ? '#fff' : '#999')};
  border-radius: 4px;
  font-size: clamp(12px, 2vw, 14px);
  width: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  attendedDays: number[];
}

function AttendanceCalendar({ attendedDays }: CalendarProps) {
  const renderCalendar = () => {
    const today = new Date();
    const monthStart = startOfMonth(today);
    const monthEnd = endOfMonth(today);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const startDay = getDay(monthStart);
    const blanks = Array(startDay).fill(null);

    return (
      <>
        {blanks.map((_, index) => (
          <DayCell key={`blank-${index}`} />
        ))}
        {daysInMonth.map((date) => {
          const day = parseInt(format(date, 'd'));
          return (
            <DayCell key={day} isAttended={attendedDays.includes(day)}>
              {day}
            </DayCell>
          );
        })}
      </>
    );
  };

  return (
    <Calendar>
      <CalendarHeader>
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </CalendarHeader>
      <CalendarGrid>{renderCalendar()}</CalendarGrid>
    </Calendar>
  );
}

export default AttendanceCalendar;
