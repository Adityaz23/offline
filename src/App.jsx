import { RecoilRoot, useRecoilValue,  useSetRecoilState } from "recoil"
import { homeAtom, jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector} from "./storage/atoms"
// import { useMemo } from "react"

function App() {
  return ( 
    <RecoilRoot>
  <MainApp/>
</RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const messageNotificationCount = useRecoilValue(messageAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  // const [meCount, setMeCount] = useRecoilState(messageAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(() => {
  //   return notificationAtom + messageAtom + jobsAtom + networkAtom;
  // },[networkNotificationCount, messageNotificationCount, notificationCount, jobsNotificationCount])
  return (
    <>
      <h1>Recoil from the offline video :-</h1>
      <Homeupdater />
      <br />
      <button>Notifications ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount>=100?"99+":jobsNotificationCount})</button>
      <button>Messages ({messageNotificationCount >= 100 ? "99+" : messageNotificationCount})</button>
      <button>My network ({notificationCount >= 100 ? "99+": notificationCount})</button>
      <br />
      {/* imagine clicking the button of me component and then show that the new notification like update your profile has come to you so how would you do that for that we will use the useRecoilStateValue hook for rendering the previous value and updating the new value and rendering it to the component. 
      Whenever i will be clicking on the Me component the messages component will show us the number of message going up.
      Imagine you just want to create the function for a component but do not want to update the value so we will use the useSetRecoilValue for that . Example=> The home component we will give it some value but would not update it 
      */}

 <button >Me({totalNotificationCount})</button>
    </>
    
  )
  function Homeupdater() {
    const setHomeCount = useSetRecoilState(homeAtom);
    return (
      <button onClick={() => {
        setHomeCount(c => c + 1);
      }}>Home</button>
    )
  }
}
export default App