import styled from 'styled-components';
import { Title } from '../components/common/title';
import { ConferenceCard } from '../components/conferences/card';
import { mockEvents } from '../data/mockData';
import { Grid } from '../components/common/layout';

const Wrapper = styled.div`
  padding: 1.25rem; // 20px in rem units (5 * 0.25rem = 1.25rem)
`;

export default function Conferences() {
  return (
    <Wrapper>
      <Title>AI 이벤트 & 컨퍼런스 🎯</Title>
      <Grid>
        {mockEvents.map((conference) => (
          <ConferenceCard key={conference.id} conference={conference} />
        ))}
      </Grid>
    </Wrapper>
  );
}
