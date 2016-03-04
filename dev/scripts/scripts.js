const docReady        = require("document-ready-promise");
const transitionEvent = whichTransitionEvent();
import {whichTransitionEvent, debounce, getFirstChild} from "./vendor/helpers";

// the rest of our functions will be contained within a document ready
docReady().then(function() {

  // Global variables
  // require broader scope - kept from becoming window properties
  // ---------------------------------------------------------------------------
  // const elHeader = document.getElementById("pageHeader");

  // Window resize
  // ---------------------------------------------------------------------------
  function winResize() {
    window.addEventListener("resize", debounce(function() {
    }, 500));
  }

  // Window scroll
  // ---------------------------------------------------------------------------
  function winScroll() {
    window.addEventListener("scroll", function() {
    });
  }

  // onPageLoad
  // everything to execute on initial page load
  // ---------------------------------------------------------------------------
  function onPageLoad() {
    // winResize();
    // winScroll();
  }

  // go ahead and fire!
  onPageLoad();

});
