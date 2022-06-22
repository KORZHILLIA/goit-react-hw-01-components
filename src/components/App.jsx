import Container from './Container';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from '../database/user';
import data from '../database/data';
import friends from '../database/friends';
import transactions from '../database/transactions';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
