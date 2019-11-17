

window.onload = function() {

    // https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
    var colorPicker = document.getElementById('colorPicker');
    var sizePicker = document.getElementById('sizePicker');

    // https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
    // https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
    // EventListener learned from class - submits form to call makeGrid to create a grid
    if(sizePicker !== undefined) {
        sizePicker.addEventListener('submit', function(event){
        event.preventDefault();
        makeGrid();
    });
    }

    // https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
    // https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
    // EventListener learned from class - clicking on squares calls fillSquare to fill only Squares
    var cellPicker = document.getElementById('pixelCanvas');
    if(cellPicker != undefined) {
        cellPicker.addEventListener('click', function(event){
        event.preventDefault();
        fillSquare();
        });
      }

    // Choosing a color from the color selector 
    function selectColor(){
        var color = colorPicker.value;
        return color;
    }

    // Create a canvas of any (reasonable) size / "Height" and "Width" fields / empty grid to appear on the page
    // reset the grid to a blank state / already colored grid squares, clicking the Submit button clears them out
    function makeGrid() {
        // https://stackoverflow.com/questions/9140101/creating-a-clickable-grid-in-a-web-browser
        var height = document.getElementById('inputHeight').value;
        var width = document.getElementById('inputWidth').value; 
        const table = document.getElementById('pixelCanvas');

        // https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
        // https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }

        if(table !== null) {
            // https://stackoverflow.com/questions/9140101/creating-a-clickable-grid-in-a-web-browser
            for(let i = 0; i < height; i++) {
                const tr = document.createElement('tr');
                table.appendChild(tr);
                for (let j = 0; j < width; j++) {
                    const td = document.createElement('td');
                    tr.appendChild(td);
                    // https://stackoverflow.com/questions/5930892/selecting-an-arbitrary-cell-in-a-table-by-row-and-column-number
                    // https://stackoverflow.com/questions/10940714/how-do-you-select-a-table-cell-by-its-index
                    // http://dotnetlearners.com/javascript/find%20table%20cell%20value%20on%20cell%20(table)%20click%20using%20javascript.aspx
                    table.rows[i].cells[j].onclick = function() {                 
                        getvalue(this);
                    }; 
                }
            }
        }
    }

    // http://dotnetlearners.com/javascript/find%20table%20cell%20value%20on%20cell%20(table)%20click%20using%20javascript.aspx
    function getvalue(element) {
        fillSquare(element);
    }

    // color the pixels in the grid, clicking on a grid square causes that grid square (and only that square) to change color.
    function fillSquare(element){
        // https://stackoverflow.com/questions/11517150/how-to-change-background-color-of-cell-in-table-using-java-script
        if(element !== undefined) {
            element.bgColor = colorPicker.value;
        }   
    }
}


/*  All Sources:
    https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
    https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
    https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
    https://stackoverflow.com/questions/9140101/creating-a-clickable-grid-in-a-web-browser
    https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
    https://stackoverflow.com/questions/5930892/selecting-an-arbitrary-cell-in-a-table-by-row-and-column-number
    https://stackoverflow.com/questions/10940714/how-do-you-select-a-table-cell-by-its-index
    http://dotnetlearners.com/javascript/find%20table%20cell%20value%20on%20cell%20(table)%20click%20using%20javascript.aspx
    https://stackoverflow.com/questions/11517150/how-to-change-background-color-of-cell-in-table-using-java-script
    https://www.w3schools.com/tags/att_td_bgcolor.asp
    https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing?rq=1 
    http://jsfiddle.net/STLSN/  
    http://colorify.rocks/#event1
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement
    https://www.w3schools.com/tags/att_input_type_button.asp   
    https://developer.mozilla.org/en-US/docs/Web/Events/submit
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
    https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
    https://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript
    https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
    https://developer.mozilla.org/en-US/docs/Web/Events/change
    https://wiki.selfhtml.org/wiki/HTML/Formulare/input
    https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_button
    https://stackoverflow.com/questions/43209534/uncaught-referenceerror-function-is-not-defined-at-htmlinputelement-onclick
    https://stackoverflow.com/questions/6430249/getting-mouseclick-events-on-a-canvas
    http://jsfiddle.net/4Lanc/
    https://stackoverflow.com/questions/19698769/add-input-from-a-form-to-a-table-in-the-same-page-without-reloading
    https://www.kirupa.com/html5/getting_mouse_click_position.htm
    https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
    https://www.w3schools.com/jsref/met_html_click.asp
*/




