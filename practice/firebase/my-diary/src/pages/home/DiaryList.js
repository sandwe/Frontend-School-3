import {useFirestore} from "../../hooks/useFirestore";

export default function DiaryList({diaries}) {
  const {deleteDocument} = useFirestore("myDiary");

  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
            <button onClick={() => deleteDocument(item.id)}>x</button>
          </li>
        );
      })}
    </>
  );
}
