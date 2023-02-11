const bulletButtons=document.querySelectorAll('.bullet')
const alignButtons=document.querySelectorAll('.align');
const spacingButtons=document.querySelectorAll(".spacing");
const formatButtons=document.querySelectorAll('.format');
const textArea = document.getElementById('text-area');
const fontName = document.getElementById('fontName');
const advanceOption = document.querySelectorAll(".adv-option");
const editMenu=document.querySelector(".editing-dropdown");
const selectBtn=document.querySelector('.editing-div');
const selectBtn2=document.querySelector('.editing-eye-icon');
const options=document.querySelectorAll('.option');
const editingText=document.querySelector('.editing-text');
const iconChange=document.querySelector('#icon-change');
const showHide=document.querySelector('.show-hide');
const showHide2=document.querySelector('.show-hide2');
const mainContent=document.querySelector('.main-content');
const addNewDiv=document.getElementById('add-div');
const checkList=document.querySelector('.check-list');
const imageButton=document.querySelector('.image-button');
const imageDropdown=document.querySelector('.image-dropdown');
const imageInput=document.querySelector('#image-input');
const uploadBtn = document.getElementById("upload-btn");
const propertyBox=document.getElementById('propertyBox');
const buttons =document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener("mouseover", function(event) {
        // console.log(button.type);
    propertyBox.innerText = button.dataset.propertymsg;
    const buttonRect = event.target.getBoundingClientRect();
    if(button.type=='select-one'){
        propertyBox.style.left = buttonRect.left + "px";
    }else{
        propertyBox.style.left = (buttonRect.left-30) + "px";
    }
    propertyBox.style.top = 50 +"px";
    propertyBox.style.display = "block";
    });
    button.addEventListener("mouseleave", function() {
        propertyBox.style.display = "none";
    });
});
formatButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.classList.toggle('active');
    })
})
alignButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alignButtons.forEach((button)=>{
            button.classList.remove('active');
        });
        button.classList.add('active');
    })
})
bulletButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        bulletButtons.forEach((button)=>{
            button.classList.remove('active');
        });
        button.classList.add('active');

    })
})
checkList.addEventListener('click',()=>{
    const checkbox = document.createElement('input');
    const div = document.createElement('div');
    checkbox.type = 'checkbox';
    div.appendChild(checkbox);
    textArea.appendChild(div);
})
// spacingButtons.forEach((button)=>{
//     let indent=0;
//     if(button.classList.contains('increase-indent')){
//         button.addEventListener('click',()=>{
//             textArea.style.textIndent=`${indent+50}px`;
//         })
//     }else{  
//         button.addEventListener('click',()=>{
//             textArea.style.textIndent=`${indent-50}px`;
//         })
//     }
// })
uploadBtn.addEventListener("click", function () {
    imageInput.click();
  });

  imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        const image=document.createElement('img');
        image.src=reader.result;
        textArea.appendChild(image);
    });
    reader.readAsDataURL(file);
    imageDropdown.classList.add('show-edit');
    document.querySelector('.image-button-div').classList.remove('active');
  });
function formatDoc(cmd, value = null) {
    // console.log(value);
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
function fontEditor(fontName) {
    document.execCommand("fontName", false, fontName);
}
function screenSize(val) {
    textArea.style.width = `${val}px`;
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
function changeFont() {
    const Font = document.getElementById('input-font').value;
    document.execCommand('fontName', false, Font);
}
// fontSize.addEventListener("change", function() {
//     const selected = window.getSelection().getRangeAt(0);
//     const parent = selected.commonAncestorContainer;
//     let node = selected.startContainer;
//     // console.log(node)
//     while (node !== parent) {
//       node.style.fontSize = fontSize.value + "px";
//       console.log(node.style.fontSize);
//       node = node.parentNode;
//     }
// });
// function changeSize() {
//     const size = document.getElementById('fontSize').value;
//     document.execCommand('fontSize', false, size);
// }
addNewDiv.addEventListener('click',()=>{
    const div=document.createElement('div');
    div.setAttribute('id','text-area');
    div.setAttribute('contenteditable','true');
    div.setAttribute('spellcheck','false');
    mainContent.appendChild(div);
})
document.addEventListener('keydown',(e)=>{
    if(e.ctrlKey && e.key === "/"){ 
        const div=document.createElement('div');
        div.setAttribute('id','text-area');
        div.setAttribute('contenteditable','true');
        div.setAttribute('spellcheck','false');
        mainContent.appendChild(div);
    }
})
const editingButton=document.querySelector('.editing-button');
const editingButton2=document.querySelector('.editing-button2');
const propertyBar=document.querySelector('.property-bar');
const messageIcon=document.querySelector('.message-icon');
editingButton.addEventListener('mouseleave',()=>{
    showHide.classList.add("show-edit");
})
editingButton2.addEventListener('mouseleave',()=>{
    showHide2.classList.add("show-edit");
})
selectBtn.addEventListener('click',()=>{
    showHide.classList.toggle("show-edit");
})
selectBtn2.addEventListener('click',()=>{
    showHide2.classList.toggle("show-edit");
})
imageButton.addEventListener('click',()=>{
    document.querySelector('.image-button-div').classList.toggle('active');
    imageDropdown.classList.toggle('show-edit');
})
options.forEach((option)=>{
    // console.log(option);
    option.addEventListener('click',(e)=>{
        let selectedOption=option.querySelector('.inner').innerText;
        if(selectedOption=='Viewing'){
            textArea.setAttribute('contenteditable','false');
            propertyBar.style.display='none';
            editingButton2.classList.remove('show-edit');
            messageIcon.classList.add('show-edit')
        }else{
            textArea.setAttribute('contenteditable','true');
            propertyBar.style.display='flex';
            editingButton2.classList.add('show-edit');
            messageIcon.classList.remove('show-edit')
        }
        // console.log(selectedOption);
        editingText.innerText=selectedOption;
        let icon=option.querySelector('.icon').className;
        // console.log(icon);
        let temp="";
        temp=icon;
        icon=iconChange.className;
        iconChange.className=temp;
        showHide.classList.add("show-edit");
        // console.log(showHide.className)
    })
})




