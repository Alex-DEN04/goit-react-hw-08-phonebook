import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Container } from '@chakra-ui/react';

export const SharedLayoud = () => {
  return (
    <Container
      as="section"
      maxWidth="container.lg"
      fonts="body"
      fontSize="md"
      px={4}
    >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
