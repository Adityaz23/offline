import { atom, selector } from "recoil"

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,

})
export const messageAtom = atom({
  key: "messageAtom",
  default: 45,
  
})
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 5,
  
})
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 88,
  
})
export const meAtom = atom({
  key: "meAtom",
  default: 22,
  
})
export const homeAtom = atom({
  key: "homeAtom",
  default: 0,
  
})


// Creating a selector not an atom:-

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get })=> {
    const messageNotificationCount= get(messageAtom);
    const networkNotificationCount = get(networkAtom);
    const jobsNotificationCount = get(jobsAtom);
    const notificationCount = get(notificationAtom);
    return messageNotificationCount + networkNotificationCount + jobsNotificationCount + notificationCount;
}
})