// const alignButtons=document.querySelectorAll('.align');
// const spacingButtons=document.querySelectorAll(".spacing");
// const formatButtons=document.querySelectorAll('.format');
const textArea = document.getElementById('text-area');
const fontName = document.getElementById('fontName');
const advanceOption = document.querySelectorAll(".adv-option");
// console.log(formatButtons);
// formatButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         buttons.classList.toggle("active")
//     })
// })
// // console.log(alignButtons);
// alignButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         buttons.classList.toggle("active")
//     })
// })
// // console.log(spacingButtons);
// spacingButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//         buttons.classList.toggle("active");
//     })
// })
// const fontlist=['Arial','Verdana','Times New Roman','Garmond','Georgia','Courier New','cursive'];
// const initializer=()=>{
//     // highlighter(alignButtons,true);
//     // highlighter(spacingButtons,true);
//     // highlighter(formatButtons,false);
//     fontlist.map((value) => {
//         let option = document.createElement("option");
//         option.value = value;
//         option.innerHTML = value;
//         fontName.appendChild(option);
//       });
// }
// const modifyText = (command, defaultUi, value) => {
//     document.execCommand(command, defaultUi, value);
// };
//   fontName.addEventListener('change',()=>{
//     // modifyText(fontName.id,false,fontName.value);
//     formatDoc(fontName.value);
//   })
// advanceOption.forEach((button)=>{
//     button.addEventListener('change',()=>{
//         modifyText(button.id,false,button.value);
//         console.log
//     })
// })

// const highlighter=(className,needsRemoval)=>{
//     className.forEach((buttons)=>{
//         buttons.addEventListner("click",function () {
//             console.log('hello');
//                 if (needsRemoval) {
//                     let alreadyActive = false;
//                     if (buttons.classlist.contains("active")) {
//                         alreadyActive = true;
//                     }
//                     highlighterRemover(className);
//                     if (!alreadyActive) {
//                         buttons.classlist.add("active");
//                     }
//                 }
//                 else {
//                     buttons.classlist.toggle('active');
//                 }
//             })
//     })
// }
// const highlighterRemover=()=>{
//     className.forEach((buttons)=>{
//         buttons.classlist.remove("active");
//     })
// }
// window.onload = initializer();
function formatDoc(cmd, value = null) {
    console.log(value);
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd)
    }
}
function addlink() {
    // console.log('hello');
    let url = prompt('Insert url');
    url = "http://" + url;
    formatDoc('createLink', url);
    // document.execCommand('createLink',false,url);
}
textArea.addEventListener('mouseenter', function () {
    const a = textArea.querySelectorAll('a');
    a.forEach(item => {
        item.addEventListener('mouseenter', function () {
            textArea.setAttribute('contenteditable', false);
            item.target = '_blank';
        })
        item.addEventListener('mouseleave', function () {
            textArea.setAttribute('contenteditable', true);
        })
    })
})
function fontEditor(fontName) {
    document.execCommand("fontName", false, fontName);
}
function screenSize(val) {
    textArea.style.width = `'${val}px'`;
}
function fontSize(size) {
    var sel = document.getSelection(); // Gets selection

    var selectedHtml = "";
    if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        const children = container.getElementsByTagName("*");
        for (let child of children) {
            if (child.style.fontSize) {
                child.style.fontSize = `${size}px`
            }
        }
        selectedHtml = container.innerHTML;
    }

    let html = `<div style="font-size: ${size}px;">${selectedHtml}</div>`
    document.execCommand('insertHTML', false, html);
}
function fontType(size) {
    var sel = document.getSelection(); // Gets selection

    var selectedHtml = "";
    if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        const children = container.getElementsByTagName("*");
        for (let child of children) {
            if (child.style.fontSize) {
                child.style.fontSize = `${size}px`
            }
        }
        selectedHtml = container.innerHTML;
    }

    let html = `<div style="font-size: ${size}rem;">${selectedHtml}</div>`
    document.execCommand('insertHTML', false, html);
}
function myFunction(val) {
    // console.log(val);
    selectElementContents(textArea); // this will select the whole text else or you can skip this if not requrired
    document.execCommand("fontName", false, 'val'); //replace monospace with selected font
    // window.getSelection().empty(); // unselects the selected text
}
function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
const Buttons = document.getElementsByTagName("button")
const bold=document.getElementById('bold');
const buttonArray = Array.from(Buttons);
buttonArray.forEach((button) => {
    // console.log(button)
    button.addEventListener('click', (ele) => {
        console.log(button);
        button.classList.toggle('active');
    })
    // button.addEventListener('mouseover', (ele) => {
    //     // button.classList.add('active');
    //     if (button.classList.contains('font-bold')){
    //         bold.style.visibility='visible';
    //     }
    //     else{
    //         bold.style.visibility='hidden';
    //     }
    // })
})
// buttonArray.forEach((button)=>{
//     button.addEventListener('mouseover',(ele)=>{
//         // button.classList.add('active');
//         if(button.classList.contains(''))
//         bold.style.display='block';
//     })
// })
// buttonArray.forEach((button)=>{
//     button.addEventListener('mouseout',(ele)=>{
//         button.classList.add('active');
//         bold.style.display='none';
//     })
// })
// const body=document.getElementsByTagName("body");
// body.addEventListener('mouseover',(e)=>{
//     if(!e.target.classList.contains('font-bold')){
//         bold.style.visibility='hidden';
//     }
// })
// function changeFont() {
//     const Font = document.getElementById('input-font').value;
//     document.execCommand('fontName', false, Font);
// }
function changeFont() {
    const Font = document.getElementById('input-font').value;
    document.execCommand('fontName', false, Font);
}
  function changeSize() {
    const size = document.getElementById('fontSize').value;
    document.execCommand('fontSize', false, size);
}
const mainContent=document.querySelector('.main-content');
const addNewDiv=document.getElementById('add-div');
addNewDiv.addEventListener('click',()=>{
    const div=document.createElement('div');
    div.setAttribute('id','text-area');
    div.setAttribute('contenteditable','true');
    div.setAttribute('spellcheck','false');
    mainContent.appendChild(div);
})





