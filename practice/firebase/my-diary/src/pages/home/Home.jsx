import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useCollection} from "../../hooks/useCollection";

export default function Home() {
  const {user} = useAuthContext();
  const {documents, error} = useCollection("myDiary", ["uid", "==", user.uid]);
  console.log(documents);
  return (
    <main>
      <aside>
        <DiaryForm uid={user.uid}></DiaryForm>
      </aside>
      <ul>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
