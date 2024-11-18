/*Name this external file gallery.js*/

function upDate(previewPic) {

    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {

    document.getElementById('image').style.backgroundImage = '';
    document.getElementById('image').innerHTML = "Hover over an image below to display here."
}
// Function to handle the onfocus event
function onFocus(previewPic) {
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log('Image focused: ', previewPic.alt); // Debugging message
}

// Function to handle the onblur event
function onBlur() {
    document.getElementById('image').style.backgroundImage = '';
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log('Image focus removed'); // Debugging message
}

// Function to add the tabfocus attribute and tabindex
function addTabFocus() {
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); // Add keyboard accessibility
        images[i].addEventListener('focus', function () {
            onFocus(images[i]); // Attach onfocus listener
        });
        images[i].addEventListener('blur', onBlur); // Attach onblur listener
    }
    console.log('Tabindex and listeners added to all images'); // Debugging message
}

// Function to trigger on page load
function onPageLoad() {
    addTabFocus();
    console.log('Page loaded and setup complete'); // Debugging message
}

// Attach the onload event to the window
window.onload = onPageLoad;