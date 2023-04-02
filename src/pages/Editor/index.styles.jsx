import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const DiaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export { Container, EditorHeader, DiaryInfo };
