import { Container, Title, Link } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>Welcome to Phonebook</Title>
      <Link to="/login" title="Add contacts!">
        Add contacts!
      </Link>
    </Container>
  );
}
