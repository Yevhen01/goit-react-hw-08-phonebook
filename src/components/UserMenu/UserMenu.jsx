import { useDispatch } from 'react-redux';

import { Button } from '../FormList/FormList.styled';
import { Container, Title } from './UserMenu.styled';

import { useAuth } from '../../hooks/useAuth';
import { logoutThunk } from '../../redux/auth/operation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Title>Welcome, {user.name}</Title>
      <Button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
