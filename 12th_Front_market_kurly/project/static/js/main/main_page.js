document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".category-checkbox");
    const countEl = document.querySelector(".num");
    const tagContainer = document.querySelector(".selected-category-info");
    const resetButton = document.querySelector(".reset-box");
  
    const defaultCount = 508;
    const defaultText = `총 ${defaultCount}건`;
  
    function updateSelected() {
      const checked = Array.from(checkboxes).filter(cb => cb.checked);
      let total = 0;
      tagContainer.innerHTML = "";
  
      // checked 있을 때만 표시
      if (checked.length > 0) {
        tagContainer.classList.remove("hidden");
      } else {
        tagContainer.classList.add("hidden");
      }
  
      checked.forEach(cb => {
        const count = parseInt(cb.dataset.count);
        const name = cb.dataset.category;
        total += count;
  
        const tag = document.createElement("div");
        tag.className = "selected-tag";
        tag.innerHTML = `
          ${name}
          <img src="/static/assets/icons/close.svg" data-category="${name}" />
        `;
        tagContainer.appendChild(tag);
      });
  
      countEl.textContent = checked.length ? `총 ${total}건` : defaultText;
  
      tagContainer.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
          const name = img.dataset.category;
          const checkbox = [...checkboxes].find(cb => cb.dataset.category === name);
          if (checkbox) {
            checkbox.checked = false;
            updateSelected();
          }
        });
      });
    }
  
    checkboxes.forEach(cb => cb.addEventListener("change", updateSelected));
    resetButton.addEventListener("click", () => {
      checkboxes.forEach(cb => cb.checked = false);
      updateSelected();
    });
  
    countEl.textContent = defaultText;
  });
  