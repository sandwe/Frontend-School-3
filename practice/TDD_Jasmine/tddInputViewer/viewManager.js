// 사용자가 입력한 값을 화면에 뿌려주는 것을 관리해주는 클래스
class ViewManager {
  // 의존 주입(dependency injection)
  constructor(textManager, options) {
    // textManager 인스턴스인지 예외처리
    if (textManager.constructor !== TextManager) {
      // throw Error : 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료합니다.
      throw Error("textManager 객체를 전달해야합니다!");
    }

    if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
      throw Error("필요한 요소중에 빈값이 존재합니다.");
    }

    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    options.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }

  changeValue() {
    this.textManager.setValue({data: this.inpTxt.value});
    this.updateView();
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
