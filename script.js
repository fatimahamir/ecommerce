
document.addEventListener("DOMContentLoaded", function () {
  const listLayout = document.getElementById('listLayout');
  const gridLayout = document.getElementById('gridLayout');
  const listViewButton = document.getElementById('listView');
  const gridViewButton = document.getElementById('gridView');

  if (listLayout && gridLayout && listViewButton && gridViewButton) {
    function toggleLayout(layoutToShow, layoutToHide) {
      layoutToShow.style.display = 'block';
      layoutToHide.style.display = 'none';
    }

    listViewButton.addEventListener('click', () => {
      toggleLayout(listLayout, gridLayout);
    });

    gridViewButton.addEventListener('click', () => {
      toggleLayout(gridLayout, listLayout);
    });
  }
});