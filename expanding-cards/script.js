// Procedural programming
// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses();
//         panel.classList.add('active');
//     })
// })

// function removeActiveClasses() {
//     panels.forEach( panel => panel.classList.remove('active'));
// }

// Functional programming
function selectElement(selector) {
    return document.querySelectorAll(selector);
}

function onPanelClick() {
    const panels = selectElement('.panel');
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses(panels);
            panel.classList.add('active');
        })
    })
}

function removeActiveClasses(element) {
    element.forEach( ele => ele.classList.remove('active'));
}

onPanelClick();
// OOP