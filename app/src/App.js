import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";
import data from "./components/statistics/data.json";
import Statistics from "./components/statistics/Statistics";
import Users from "./components/users/Users";
import usersData from "./components/users/data.json";
import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json";
import Contacts from "./components/contacts/Contacts";
import Feedback from "./components/feedback/Feedback";
function App() {
  return (
    <main>
      <Contacts onSubmit={(values) => console.log(values)} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Users usersData={usersData} />
      <TransactionHistory items={transactions} />
      <Feedback />
    </main>
  );
}

export default App;
