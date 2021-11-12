


$(function() {
    $('#datepicker_from').datepicker({
        format: "dd_mm_yyyy",
        autoclose: true
    });
    
});
$(function() {
    $('#datepicker_to').datepicker({
        format: "dd_mm_yyyy",
        autoclose: true
    });
});

$("#reset-date1").click(function(e){
    e.preventDefault();
    $('#datepicker_from').datepicker('update', '');
})


$("#reset-date2").click(function(e){
    e.preventDefault();
    $('#datepicker_to').datepicker('update', '');
});

const rows = document.querySelectorAll(".content__rows-item"),
      tiles = document.querySelectorAll(".content__tiles-item"),
      rowsBtn = document.querySelector("#rows"), 
      tilesBtn = document.querySelector("#tiles"),
      wrapper = document.querySelector(".content__wrapper");


    const blueTiles = `<img src="icons/tiles_icon_blue.svg" alt="img"/>`,
          grayTiles = `<img src="icons/tiles_icon.svg" alt="img"/>`,
          blueRows = `<img src="icons/row_icon_blue.svg" alt="row view btn"/>`;
          grayRows = `<img src="icons/row_icon.svg" alt="row view btn"/>`;

    rowsBtn.addEventListener('click', () => {
        rows.forEach(elem => {
            elem.classList.add('active_rows');
        });
        tiles.forEach(elem => {
            elem.classList.remove('active_tiles');
        });
        wrapper.classList.remove('content__wrapper_active');

        tilesBtn.innerHTML = grayTiles;
        rowsBtn.innerHTML = blueRows;
    });

    tilesBtn.addEventListener('click', () => {
        tiles.forEach(elem => {
            elem.classList.add('active_tiles');
        });
        rows.forEach(elem => {
            elem.classList.remove('active_rows');
        });
        wrapper.classList.add('content__wrapper_active');

        tilesBtn.innerHTML = blueTiles;
        rowsBtn.innerHTML = grayRows;
    });

