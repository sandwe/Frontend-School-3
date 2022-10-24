let memoList = JSON.parse(localStorage.getItem("memoList")) ?? [];

renderMemo();

function saveMemo() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  memoList.push({title: title, content: content});
  localStorage.setItem("memoList", JSON.stringify(memoList));
  renderMemo();
}

function renderMemo() {
  memoList = JSON.parse(localStorage.getItem("memoList")) ?? [];

  const memoDisplay = document.getElementById("memoDisplay");
  memoDisplay.innerHTML = "";

  memoList.forEach(function (item, idx) {
    const memoItem = document.createElement("li");
    const saveTitle = document.createElement("h2");
    const saveContent = document.createElement("p");
    const saveId = document.createElement("p");
    const deleteMemoBtn = document.createElement("button");

    saveTitle.textContent = item.title;
    saveContent.textContent = item.content;
    saveId.textContent = idx + 1;
    deleteMemoBtn.textContent = "삭제";
    deleteMemoBtn.setAttribute("id", idx + 1);
    deleteMemoBtn.classList.add("btn-delete");
    deleteMemoBtn.addEventListener("click", deleteMemo);

    memoItem.append(saveId, saveTitle, saveContent, deleteMemoBtn);
    memoDisplay.appendChild(memoItem);
  });
}

const saveMemoBtn = document.querySelector(".btn-save");
saveMemoBtn.addEventListener("click", saveMemo);

function deleteMemo(event) {
  const newMemoList = memoList.filter((_, idx) => idx + 1 != event.srcElement.id);
  localStorage.setItem("memoList", JSON.stringify(newMemoList));
  renderMemo();
}
