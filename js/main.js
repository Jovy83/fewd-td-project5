// jQuery variables
const $searchBox = $('input[type="search"]');
const $images = $('a[href$=".jpg"]');

// lightbox plugin options
lightbox.option({
  alwaysShowNavOnTouchDevices: true,
  wrapAround: true,
  positionFromTop: 100
});

// search function
$searchBox.on('keyup', function() {
  const searchString = $(this).val().toLowerCase();

  $images.each(function() {
    const caption = $(this).attr('data-title').toLowerCase();

    if(captionContainsSearchString(caption, searchString)) {
      // include this element in the web page
      setElementDisplayMode($(this), 'inline');
    } else {
      // hide this element
      setElementDisplayMode($(this), 'none');
    }

  });
});

// will handle when the user presses the 'x' button on the searchBox
$searchBox.on('search', function() {
  // this gets triggered when the user presses the 'Enter' key while the searchBox is in focus.
  // will also get triggered when the user presses the 'x' button to clear the searchBox

  // when the user presses the 'x' button, all images should be visible on the page
  if(this.value === '') {
    $images.each(function(index, element) {
      setElementDisplayMode(element, 'inline');
    });
  }
});

//////////////////////////////
// helper functions
//////////////////////////////
function captionContainsSearchString(caption, searchString) {
  if(caption.includes(searchString)) {
    return true;
  }
  return false;
}

function setElementDisplayMode(element, display) {
  $(element).css('display', display);
}
//////////////////////////////
