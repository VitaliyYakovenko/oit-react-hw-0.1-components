import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import data from "../utils/data";
import css from "./App.module.css";
import user from "../utils/user";
import friends from "../utils/friends";
import transactions from "../utils/transactions";





export const App = () => {


  return (
    <div className={css.container}>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList elems={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};



