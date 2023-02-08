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
spacingButtons.forEach((button)=>{
    let indent=0;
    if(button.classList.contains('increase-indent')){
        button.addEventListener('click',()=>{
            textArea.style.textIndent=`${indent+50}px`;
        })
    }else{  
        button.addEventListener('click',()=>{
            textArea.style.textIndent=`${indent-50}px`;
        })
    }
})
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
function changeSize() {
    const size = document.getElementById('fontSize').value;
    document.execCommand('fontSize', false, size);
}
addNewDiv.addEventListener('click',()=>{
    const div=document.createElement('div');
    div.setAttribute('id','text-area');
    div.setAttribute('contenteditable','true');
    div.setAttribute('spellcheck','false');
    mainContent.appendChild(div);
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




