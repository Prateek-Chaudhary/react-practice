import { useCallback, useEffect, useRef, useState } from "react";
import PasswordCss from "./PasswordGenerator.module.scss";

export default function PasswordGenerator() {
  let [password, setPassword] = useState("sample password");
  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  let [character, setCharacter] = useState(false);
  let passwordRef = useRef(null);

  let changePassword = useCallback(() => {
    let pass = "";
    let list = "QWERTYUIOPASDFGHJKLZXCVBNMasdfghjklqwertyuiopzxcvbnm";
    if (number) list += "1234567890";
    if (character) list += "!@#$%&?+=_";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * list.length);
      pass += list.charAt(randomIndex);
    }
    setPassword(pass);
  }, [number, character, length, setPassword]);

  useEffect(() => {
    changePassword();
  }, [length, number, character]);

  let copyToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="generator">
        <div className="passwordInputAndCopy">
          <input
            ref={passwordRef}
            type="text"
            name="passwordBox"
            id={PasswordCss.pswd}
            value={password}
            readOnly
          />
          <span className={PasswordCss.copyBtn} onClick={copyToClip}>
            Copy
          </span>
        </div>
        <div className={PasswordCss.passwordVariables}>
          <div className={PasswordCss.passwordLength}>
            <input
              type="range"
              name="len"
              id="lnth"
              min={8}
              max={32}
              onChange={(e) => setLength(e.target.value)}
            />
            &nbsp;&nbsp;
            <label htmlFor="lnth">Length: {length}</label>
          </div>
          <div className={PasswordCss.passwordHasNumber}>
            <input
              type="checkbox"
              name="hasNumber"
              id="num"
              onChange={() => setNumber((prev) => !prev)}
            />
            &nbsp;&nbsp;
            <label htmlFor="num">Number</label>
          </div>
          <div className={PasswordCss.passwordHasCharacter}>
            <input
              type="checkbox"
              name="hasCharacter"
              id="char"
              onChange={() => setCharacter((prev) => !prev)}
            />
            &nbsp;&nbsp;
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}
