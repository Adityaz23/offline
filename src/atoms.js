// atoms.js
import { atom } from 'jotai';

// Primitive state
export const notificationsAtom = atom({
  networks: 0,
  jobs: 0,
  messaging: 0,
  notifications: 0,
});

// Derived state
export const totalNotificationAtom = atom((get) => {
  const all = get(notificationsAtom);
  return (
    all.networks +
    all.jobs +
    all.messaging +
    all.notifications
  );
});
