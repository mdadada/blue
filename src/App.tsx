import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Top from "./components/Top";
import Quest from "./components/Quest";
import Goal from "./components/Goal";

export default function App() {
  const [prevPath, setPrevPath] = useState("");
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route
            path="quest_1"
            element={
              <Quest
                title="爆弾の場所を特定せよ！"
                answer="test"
                next="/quest_2"
                hint="xは頭文字からの順番、yは50音順が関係しているようだ。"
                imgPath="../assets/quest_1.jpg"
                buttonMessage="場所はここだ！"
                prevPath={prevPath}
                setPrevPath={setPrevPath}
              />
            }
          />
          <Route
            path="quest_2"
            element={
              <div>
                <Quest
                  title="解除するボタンはどれ？"
                  answer="test"
                  next="/goal"
                  hint="きょうよりもした、あすよりもうえ"
                  imgPath="../assets/quest_2.jpg"
                  buttonMessage="解除する！"
                  prevPath={prevPath}
                  setPrevPath={setPrevPath}
                />
              </div>
            }
          />
          <Route
            path="/goal"
            element={
              <Goal
                title="無事解除！生き延びた…。"
                imgPath="../assets/goal.jpg"
                prevPath={prevPath}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
