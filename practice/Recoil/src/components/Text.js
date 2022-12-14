import {useRecoilState} from "recoil";
import {fontSizeState} from "../recoil_state";

export default function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>This text will increase in size too.</p>;
}
