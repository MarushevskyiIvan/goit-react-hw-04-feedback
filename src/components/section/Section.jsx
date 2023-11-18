import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Title>
      <h2>{title}</h2>
      {children}
    </Title>
  );
};
