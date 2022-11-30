class TextManager {
  constructor() {
    //  값을 전달할 때는 확장성을 고려해 객체 형태로 전달한 것이다. 왜냐하면 나중에 값을 여러개로 추가할 수도 있기 때문에!
    this.value = {data: "Hello Lions!"};
  }

  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
