import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        {/* 중첩 */}
        <div className="header-grand-parent">
          grand-parent
          <div className="header-parent">
            parent
            <div className="header-child">child</div>
          </div>
        </div>

        {/* 부모 참조 */}
        <button className="button">Button</button>
        <button className="button isLoading">Button</button>
        <button className="button" disabled>
          Button
        </button>

        <div className="hello">
          <span>.hello span</span>
        </div>
        <span className="hellospan">.hellospan</span>
        <br />
        <span className="hello span">.hello.span</span>

        {/* 변수 */}
        <div className="variable">변수 적용한 SCSS</div>

        {/* 보간 */}
        <div className="linear"></div>
        <div className="linear1">안녕하세요</div>
        <div className="linear2">안녕하세요</div>
        <div className="linear3">안녕하세요</div>
      </div>
    </>
  );
}

export default App;
