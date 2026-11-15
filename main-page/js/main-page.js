window.addEventListener("DOMContentLoaded", function () {
  // 필터 그룹(정렬 기준, 장르)마다 하나의 버튼만 선택되도록 처리
  document.querySelectorAll(".filter_list").forEach((group) => {
    const buttons = group.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((el) => {
          el.classList.remove("on");
          el.setAttribute("aria-pressed", "false");
        });
        this.classList.add("on");
        this.setAttribute("aria-pressed", "true");
      });
    });
  });
});
