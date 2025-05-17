// App.jsx
import './App.css';
import { useAtom, useAtomValue } from 'jotai';
import { notificationsAtom, totalNotificationAtom } from './atoms';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  return <MainApp />;
}

function MainApp() {
  const [networkCount, setNetworkCount] = useAtom(notificationsAtom);
  const totalNotificationCount = useAtomValue(totalNotificationAtom);

  useEffect(() => {
    axios.get("http://localhost:3000/notifications")
      .then((res) => {
        // Backend response keys need to be mapped
        const mapped = {
          networks: res.data.network,
          jobs: res.data.jobs,
          messaging: res.data.message,
          notifications: res.data.notification,
        };
        setNetworkCount(mapped);
      });
  }, []);

  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
