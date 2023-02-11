// const toolbar = document.getElementById("toolbar");
// const boldButton = document.getElementById("bold-button");
// const italicButton = document.getElementById("italic-button");
// const underlineButton = document.getElementById("underline-button");
// const imageButton = document.getElementById("image-button");
// const imageInput = document.getElementById("image-input");
// const editor = document.getElementById("editor");

// boldButton.addEventListener("click", function() {
//   document.execCommand("bold", false, null);
// });

// italicButton.addEventListener("click", function() {
//   document.execCommand("italic", false, null);
// });

// underlineButton.addEventListener("click", function() {
//   document.execCommand("underline", false, null);
// });

// imageButton.addEventListener("click", function() {
//   imageInput.click();
// });

// imageInput.addEventListener("change", function() {
//   const file = imageInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener("load", function() {
//     const image = document.createElement("img");
//     image.src = reader.result;
//     editor.appendChild(image);
//   });

//   reader.readAsDataURL(file);
// });
// const buttons = document.querySelectorAll('.buttons button');
// buttons.forEach(button => {
//   // propertyBox.innerHTML = button.classList[0];
//   button.addEventListener('mouseover',()=>{
//     const propertyBox = document.createElement('div');
//     propertyBox.classList.add('property-box');
//     propertyBox.innerText = button.dataset.property;
//     console.log(button.dataset.property);
//     // propertyBox.style.visibility='block';
//   })
//   // button.addEventListener('mouseleave',()=>{
//   //   propertyBox.style.display='none';
//   // })
// });
// const buttons = document.querySelectorAll(".property-button");
// const propertyBox = document.querySelector("#property-box");
// const propertyText = document.querySelector("#property-text");

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     propertyBox.innerHTML = button.dataset.property;
//     const buttonRect = event.target.getBoundingClientRect();
//     propertyBox.style.left = buttonRect.left + "px";
//     propertyBox.style.top = buttonRect.bottom +"px";
//     propertyBox.style.display = "block";
//   });
//   button.addEventListener("mouseout", (event) => {
//     propertyBox.style.display = "none";
//   });
// });
const fileButton_Dropdown=[
  {
    liClassName:"file-new-button",
    divClassName:'file-new-button-div',
    firstIcon:'<i class="fa fa-file-text" aria-hidden="true"></i>',
    text:'New',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-open-button ",
    divClassName:'file-open-button-div',
    firstIcon:'<i class="fa fa-file" aria-hidden="true"></i>',
    text:'Open',
    secondIcon:'<i style="float: right;">Ctrl + O</i>'
  },
  {
    liClassName:"file-copy-button margin-bottom10",
    divClassName:'file-copy-button-div',
    firstIcon:'<i class="fa fa-clone" aria-hidden="true"></i>',
    text:'Make a Copy',
    secondIcon:''
  },
  {
    liClassName:"file-share-button",
    divClassName:'file-share-button-div',
    firstIcon:'<i class="fa fa-user-plus" aria-hidden="true"></i>',
    text:'Share',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-email-button",
    divClassName:'file-email-button-div',
    firstIcon:'<i class="fa fa-envelope-o" aria-hidden="true"></i>',
    text:'Email',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-download-button margin-bottom10",
    divClassName:'file-download-button-div',
    firstIcon:'<i class="fa fa-download" aria-hidden="true"></i>',
    text:'Download',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-rename-button",
    divClassName:'file-rename-button-div',
    firstIcon:'<i class="fa fa-pencil" aria-hidden="true"></i>',
    text:'Rename',
    secondIcon:''
  },
  {
    liClassName:"file-move-button",
    divClassName:'file-move-button-div',
    firstIcon:'<i class="fa fa-arrow-right" aria-hidden="true"></i>',
    text:'Move',
    secondIcon:''
  },
  {
    liClassName:"file-drive-button",
    divClassName:'file-drive-button-div',
    firstIcon:'<i class="fa fa-google-plus" aria-hidden="true"></i>',
    text:'Add Shortcut to Drive',
    secondIcon:''
  },
  {
    liClassName:"file-trash-button margin-bottom10",
    divClassName:'file-trash-button-div',
    firstIcon:'<i class="fa fa-trash" aria-hidden="true"></i>',
    text:'Move to trash',
    secondIcon:''
  },
  {
    liClassName:"file-version-button",
    divClassName:'file-version-button-div',
    firstIcon:'<i class="fa fa-history" aria-hidden="true"></i>',
    text:'Version History',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-offline-button margin-bottom10",
    divClassName:'file-offline-button-div',
    firstIcon:'<i class="fa fa-caret-square-o-right" aria-hidden="true"></i>',
    text:'Make avaiblable offline',
    secondIcon:''
  },
  {
    liClassName:"file-details-button",
    divClassName:'file-details-button-div',
    firstIcon:'<i class="fa fa-info-circle" aria-hidden="true"></i>',
    text:'Details',
    secondIcon:''
  },
  {
    liClassName:"file-language-button",
    divClassName:'file-new-language-div',
    firstIcon:'<i class="fa fa-globe" aria-hidden="true"></i>',
    text:'Language',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"file-page-setup--button",
    divClassName:'file-page-setup-button-div',
    firstIcon:'<i class="fa fa-file-text-o" aria-hidden="true"></i>',
    text:'Page Setup',
    secondIcon:''
  },
  {
    liClassName:"file-print-button",
    divClassName:'file-print-button-div',
    firstIcon:'<i class="fa fa-print" aria-hidden="true"></i>',
    text:'Print',
    secondIcon:'<i style="float: right;">Ctrl + P</i>'
  }
]
const editButton_Dropdown=[
  {
    liClassName:"edit-undo-button",
    divClassName:'edit-undo-button-div',
    firstIcon:'<i class="fa fa-undo" aria-hidden="true"></i>',
    text:'Undo',
    secondIcon:'<i style="float: right;">Ctrl + Z</i>'
  },
  {
    liClassName:"edit-redo-button margin-bottom10",
    divClassName:'edit-redo-button-div',
    firstIcon:'<i class="fa fa-repeat" aria-hidden="true"></i>',
    text:'Undo',
    secondIcon:'<i style="float: right;">Ctrl + Y</i>'
  },
  {
    liClassName:"edit-cut-button",
    divClassName:'edit-cut-button-div',
    firstIcon:'<i class="fa fa-scissors" aria-hidden="true"></i>',
    text:'Cut',
    secondIcon:'<i style="float: right;">Ctrl + X</i>'
  },
  {
    liClassName:"edit-copy-button",
    divClassName:'edit-copy-button-div',
    firstIcon:'<i class="fa fa-files-o" aria-hidden="true"></i>',
    text:'Copy',
    secondIcon:'<i style="float: right;">Ctrl + C</i>'
  },
  {
    liClassName:"edit-paste-button",
    divClassName:'edit-paste-button-div',
    firstIcon:'<i class="fa fa-clipboard" aria-hidden="true"></i>',
    text:'Paste',
    secondIcon:'<i style="float: right;">Ctrl + V</i>'
  },
  {
    liClassName:"edit-paste-without-formatting-button margin-bottom10",
    divClassName:'edit-paste-without-formatting-button-div',
    firstIcon:'<i class="fa fa-clipboard" aria-hidden="true"></i>',
    text:'Paste without format',
    secondIcon:'<i style="float: right;">Ctrl+Shift+V</i>'
  },
  {
    liClassName:"edit-selectall-button",
    divClassName:'edit-selectall-button-div',
    firstIcon:'<i class="fa fa-film" aria-hidden="true"></i>',
    text:'Select All',
    secondIcon:'<i style="float: right;">Ctrl + A</i>'
  },
  {
    liClassName:"edit-delete-button margin-bottom10",
    divClassName:'edit-delete-button-div',
    firstIcon:'<i class="fa fa-undo" aria-hidden="true"></i>',
    text:'Delete',
    secondIcon:''
  },
  {
    liClassName:"edit-findandreplace-button",
    divClassName:'edit-findandreplace-button-div',
    firstIcon:'<i class="fa fa-repeat" aria-hidden="true"></i>',
    text:'Find and Replace',
    secondIcon:'<i style="float: right;">Ctrl + H</i>'
  }
]
const viewButton_Dropdown=[
  {
    liClassName:"view-mode-button margin-bottom10",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-pencil" aria-hidden="true"></i>',
    text:'Mode',
    secondIcon:''
  },
  {
    liClassName:"view-mode-button",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-check" aria-hidden="true"></i>',
    text:'Show Print Layout',
    secondIcon:''
  },
  {
    liClassName:"view-mode-button",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-check" aria-hidden="true"></i>',
    text:'Show Ruler',
    secondIcon:''
  },
  {
    liClassName:"view-mode-button",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-check" aria-hidden="true"></i>',
    text:'Show Outline',
    secondIcon:'<i style="float: right;">Ctrl + Alt + A</i>'
  },
  {
    liClassName:"view-mode-button",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-check" aria-hidden="true"></i>',
    text:'Show Equation Toolbar',
    secondIcon:''
  },
  {
    liClassName:"view-mode-button margin-bottom10",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-check" aria-hidden="true"></i>',
    text:'Show Section Breaks',
    secondIcon:''
  },
  {
    liClassName:"view-mode-button",
    divClassName:'view-mode-button-div',
    firstIcon:'<i class="fa fa-arrows-alt" aria-hidden="true"></i>',
    text:'Full Screen',
    secondIcon:''
  },
]
const insertButton_Dropdown=[
  {
    liClassName:"insert-image-button",
    divClassName:'insert-image-button-div',
    firstIcon:'<i class="fa fa-picture-o" aria-hidden="true"></i>',
    text:'Image',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-table-button",
    divClassName:'insert-table-button-div',
    firstIcon:'<i class="fa fa-table" aria-hidden="true"></i>',
    text:'Table',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-drrawing-button",
    divClassName:'insert-drrawing-button-div',
    firstIcon:'<i class="fa fa-file-text" aria-hidden="true"></i>',
    text:'Drawing',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-chart-button",
    divClassName:'insert-chart-button-div',
    firstIcon:'<i class="fa fa-bar-chart" aria-hidden="true"></i>',
    text:'Chart',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-horizenline-button",
    divClassName:'insert-horizenline-button-div',
    firstIcon:'<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
    text:'Horizen Line',
    secondIcon:''
  },
  {
    liClassName:"insert-emoji-button",
    divClassName:'insert-emoji-button-div',
    firstIcon:'<i class="fa fa-smile-o" aria-hidden="true"></i>',
    text:'Emoji',
    secondIcon:''
  },
  {
    liClassName:"insert-smartchips-button",
    divClassName:'insert-smartchips-button-div',
    firstIcon:'<i class="fa fa-square-o" aria-hidden="true"></i>',
    text:'Smart Chips',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-date-button",
    divClassName:'insert-date-button-div',
    firstIcon:'<i class="fa fa-calendar" aria-hidden="true"></i>',
    text:'Date',
    secondIcon:''
  },
  {
    liClassName:"insert-dropdown-button",
    divClassName:'insert-dropdown-button-div',
    firstIcon:'<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>',
    text:'Dropdown',
    secondIcon:''
  },
  {
    liClassName:"insert-footnote-button margin-bottom10",
    divClassName:'insert-footnote-button-div',
    firstIcon:'<i class="fa fa-bars" aria-hidden="true"></i>',
    text:'Footnote',
    secondIcon:'<i style="float: right;">Ctrl+Alt+F</i>'
  },
  {
    liClassName:"insert-buildingblocks-button margin-bottom10",
    divClassName:'insert-buildingblocks-button-div',
    firstIcon:'<i class="fa fa-bars" aria-hidden="true"></i>',
    text:'Building Blocks',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-special-character-button",
    divClassName:'insert-special-character-button-div',
    firstIcon:'<i class="fa fa-btc" aria-hidden="true"></i>',
    text:'Special Character',
    secondIcon:''
  },
  {
    liClassName:"insert-equation-button margin-bottom10",
    divClassName:'insert-equation-button-div',
    firstIcon:'<i class="fa fa-calculator" aria-hidden="true"></i>',
    text:'Equation',
    secondIcon:''
  },
  {
    liClassName:"insert-watermark-button",
    divClassName:'insert-watermark-button-div',
    firstIcon:'<i class="fa fa-tint" aria-hidden="true"></i>',
    text:'Watermark',
    secondIcon:''
  },
  {
    liClassName:"insert-headerandfooters-button",
    divClassName:'insert-headerandfooters-button-div',
    firstIcon:'<i class="fa fa-th" aria-hidden="true"></i>',
    text:'Header and Footer',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-pagenumber-button",
    divClassName:'insert-pagenumber-button-div',
    firstIcon:'<i class="fa fa-hashtag" aria-hidden="true"></i>',
    text:'Page Number',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-break-button margin-bottom10",
    divClassName:'insert-break-button-div',
    firstIcon:'<i class="fa fa-columns" aria-hidden="true"></i>',
    text:'Break',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-link-button",
    divClassName:'insert-link-button-div',
    firstIcon:'<i class="fa fa-link" aria-hidden="true"></i>',
    text:'Link',
    secondIcon:'<i style="float: right;">Ctrl+K</i>'
  },
  {
    liClassName:"insert-comment-button margin-bottom10",
    divClassName:'insert-comment-button-div',
    firstIcon:'<i class="fa fa-comments-o" aria-hidden="true"></i>',
    text:'Comment',
    secondIcon:'<i style="float: right;">Ctrl+Alt+M</i>'
  },
  {
    liClassName:"insert-bookmark-button",
    divClassName:'insert-bookmark-button-div',
    firstIcon:'<i class="fa fa-bookmark" aria-hidden="true"></i>',
    text:'Bookmark',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"insert-tableofcontent-button",
    divClassName:'insert-tableofcontent-button-div',
    firstIcon:'<i class="fa fa-th-list" aria-hidden="true"></i>',
    text:'Table of Content',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  }
]
const formatButton_Dropdown=[
  {
    liClassName:"format-text-button",
    divClassName:'format-text-button-div',
    firstIcon:'<i class="fa fa-bold" aria-hidden="true"></i>',
    text:'Text',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-paragraphstyle-button",
    divClassName:'format-paragraphstyle-button-div',
    firstIcon:'<i class="fa fa-bars" aria-hidden="true"></i>',
    text:'Paragraph Style',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-alignandindent-button",
    divClassName:'format-alignandindent-button-div',
    firstIcon:'<i class="fa fa-indent" aria-hidden="true"></i>',
    text:'Align and Indent',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-lineandparagraphspacing-button",
    divClassName:'format-lineandparagraphspacing-button-div',
    firstIcon:'<i class="fa fa-bar-chart" aria-hidden="true"></i>',
    text:'Line & Paragraph Spacing',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-columns-button",
    divClassName:'format-columns-button-div',
    firstIcon:'<i class="fa fa-columns" aria-hidden="true"></i>',
    text:'Columns',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-bullets-button .margin-bottom10",
    divClassName:'format-bullets-button-div',
    firstIcon:'<i class="fa fa-list" aria-hidden="true"></i>',
    text:'Bullets and Numbering',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-header-button",
    divClassName:'format-header-button-div',
    firstIcon:'<i class="fa fa-server" aria-hidden="true"></i>',
    text:'Header and Footer',
    secondIcon:''
  },
  {
    liClassName:"format-pagenumber-button",
    divClassName:'format-pagenumber-button-div',
    firstIcon:'<i class="fa fa-hashtag" aria-hidden="true"></i>',
    text:'Page Number',
    secondIcon:''
  },
  {
    liClassName:"format-pageorientation-button .margin-bottom10",
    divClassName:'format-pageorientation-button-div',
    firstIcon:'<i class="fa fa-spinner" aria-hidden="true"></i>',
    text:'Page Orientation',
    secondIcon:''
  },
  {
    liClassName:"format-table-button",
    divClassName:'format-table-button-div',
    firstIcon:'<i class="fa fa-table" aria-hidden="true"></i>',
    text:'Table',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-image-button",
    divClassName:'format-image-button-div',
    firstIcon:'<i class="fa fa-picture-o" aria-hidden="true"></i>',
    text:'Image',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-bordersandlines-button .margin-bottom10",
    divClassName:'format-bordersandlines-button-div',
    firstIcon:'<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
    text:'Border and Lines',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"format-clearFormatting-button",
    divClassName:'format-clearFormatting-button-div',
    firstIcon:'<i class="fa fa-text-height" aria-hidden="true"></i>',
    text:'Clear Formating',
    secondIcon:'<i style="float: right;">Crtl+/</i>'
  }
]
const toolsButton_Dropdown=[
  {
    liClassName:"tools-spellingandgrammer-button",
    divClassName:'tools-spellingandgrammer-button-div',
    firstIcon:'<i class="fa fa-check-square-o" aria-hidden="true"></i>',
    text:'Spelling and Grammer',
    secondIcon:''
  },
  {
    liClassName:"tools-wordcount-button",
    divClassName:'tools-wordcount-button-div',
    firstIcon:'<i class="fa fa-wordpress" aria-hidden="true"></i>',
    text:'Word Count',
    secondIcon:''
  },
  {
    liClassName:"tools-review-button",
    divClassName:'tools-review-button-div',
    firstIcon:'<i class="fa fa-text-height" aria-hidden="true"></i>',
    text:'Review Suggested Edit',
    secondIcon:''
  },
  {
    liClassName:"tools-comparedocuments-button",
    divClassName:'tools-comparedocuments-button-div',
    firstIcon:'<i class="fa fa-arrows-alt" aria-hidden="true"></i>',
    text:'Compare Documents',
    secondIcon:''
  },
  {
    liClassName:"tools-citations-button",
    divClassName:'tools-citations-button-div',
    firstIcon:'<i class="fa fa-quote-right" aria-hidden="true"></i>',
    text:'Citations',
    secondIcon:''
  },
  {
    liClassName:"tools-linkedobjects-button",
    divClassName:'tools-linkedobjects-button-div',
    firstIcon:'<i class="fa fa-link" aria-hidden="true"></i>',
    text:'Linked Objects',
    secondIcon:''
  },
  {
    liClassName:"tools-dictoinary-button",
    divClassName:'tools-dictoinary-button-div',
    firstIcon:'<i class="fa fa-file-text" aria-hidden="true"></i>',
    text:'Dictionary',
    secondIcon:''
  },
  {
    liClassName:"tools-translatedocument-button",
    divClassName:'tools-translatedocument-button-div',
    firstIcon:'<i class="fa fa-exchange" aria-hidden="true"></i>',
    text:'Translate Document',
    secondIcon:''
  },
  {
    liClassName:"tools-voiceTyping-button",
    divClassName:'tools-voiceTyping-button-div',
    firstIcon:'<i class="fa fa-microphone" aria-hidden="true"></i>',
    text:'Voice Typing',
    secondIcon:''
  },
  {
    liClassName:"tools-notification-button",
    divClassName:'tools-notification-button-div',
    firstIcon:'<i class="fa fa-bell-o" aria-hidden="true"></i>',
    text:'Notification Setting',
    secondIcon:''
  },
  {
    liClassName:"tools-preferances-button",
    divClassName:'tools-preferances-button-div',
    firstIcon:'<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
    text:'Preferances',
    secondIcon:''
  },
  {
    liClassName:"tools-accessablity-button",
    divClassName:'tools-accessablity-button-div',
    firstIcon:'<i class="fa fa-user" aria-hidden="true"></i>',
    text:'Accessiblity',
    secondIcon:''
  },
]
const extensionsButton_Dropdown=[
  {
    liClassName:"extensions-clearFormatting-button",
    divClassName:'extensions-clearFormatting-button-div',
    firstIcon:'<i class="fa fa-bar-chart" aria-hidden="true"></i>',
    text:'Add one',
    secondIcon:'<i class="fa fa-chevron-right" aria-hidden="true" style="float: right;"></i>'
  },
  {
    liClassName:"extensions-clearFormatting-button",
    divClassName:'extensions-clearFormatting-button-div',
    firstIcon:'<i class="fa fa-tree" aria-hidden="true"></i>',
    text:'Add Script',
    secondIcon:''
  }
]
const helpButton_Dropdown=[
  {
    liClassName:"help-help-button",
    divClassName:'help-help-button-div',
    firstIcon:'<i class="fa fa-question-circle-o" aria-hidden="true"></i>',
    text:'Help',
    secondIcon:''
  },
  {
    liClassName:"help-training-button",
    divClassName:'help-training-button-div',
    firstIcon:'<i class="fa fa-graduation-cap" aria-hidden="true"></i>',
    text:'Training',
    secondIcon:''
  },
  {
    liClassName:"help-updates-button",
    divClassName:'help-updates-button-div',
    firstIcon:'<i class="fa fa-angle-double-up" aria-hidden="true"></i>',
    text:'Updates',
    secondIcon:''
  },
  {
    liClassName:"help-helpdocsimprove-button",
    divClassName:'help-helpdocsimprove-button-div',
    firstIcon:'<i class="fa fa-question" aria-hidden="true"></i>',
    text:'Help Docs Improve',
    secondIcon:''
  },
  {
    liClassName:"help-reportabuse-button",
    divClassName:'help-reportabuse-button-div',
    firstIcon:'<i class="fa fa-bug" aria-hidden="true"></i>',
    text:'Report Abuse',
    secondIcon:''
  },
  {
    liClassName:"help-privacypolicy-button",
    divClassName:'help-privacypolicy-button-div',
    firstIcon:'<i class="fa fa-bar-chart" aria-hidden="true"></i>',
    text:'Privacy Policy',
    secondIcon:''
  },
  {
    liClassName:"help-termsandservices-button",
    divClassName:'help-termsandservices-button-div',
    firstIcon:'<i class="fa fa-file-text-o" aria-hidden="true"></i>',
    text:'Terms and Services',
    secondIcon:''
  },
  {
    liClassName:"help-keyboardshortcut-button",
    divClassName:'help-keyboardshortcut-button-div',
    firstIcon:'<i class="fa fa-keyboard-o" aria-hidden="true"></i>',
    text:'Keyboard Shortcut',
    secondIcon:''
  },
]
const fileDropdownButton=document.querySelector('.dropdown-document-file');
const editDropdownButton=document.querySelector('.dropdown-document-edit');
const viewDropdownButton=document.querySelector('.dropdown-document-view');
const insertDropdownButton=document.querySelector('.dropdown-document-insert');
const formatDropdownButton=document.querySelector('.dropdown-document-format');
const toolsDropdownButton=document.querySelector('.dropdown-document-tools');
const extensionsDropdownButton=document.querySelector('.dropdown-document-extensions');
const helpDropdownButton=document.querySelector('.dropdown-document-help');
fileButton_Dropdown.map((button)=>{
  fileDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
editButton_Dropdown.map((button)=>{
  editDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
viewButton_Dropdown.map((button)=>{
  viewDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
insertButton_Dropdown.map((button)=>{
  insertDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
formatButton_Dropdown.map((button)=>{
  formatDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
toolsButton_Dropdown.map((button)=>{
  toolsDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
extensionsButton_Dropdown.map((button)=>{
  extensionsDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
helpButton_Dropdown.map((button)=>{
  helpDropdownButton.innerHTML +=`<li class="${button.liClassName}">
  <div class="${button.divClassName}">
    ${button.firstIcon}
    <span>${button.text}</span>
    ${button.secondIcon}
  </div>
</li>`
})
const documentButtons=document.querySelectorAll('.document-mouseover-button');
const dropdownDocumentButtons=document.querySelectorAll('.document-mouseover-button');
const headerDocumentButtons=document.querySelector('.document-buttons');
documentButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    headerDocumentButtons.classList.toggle('click-show');
    button.children[1].classList.remove('show-edit');
  })
  button.addEventListener('mouseover',()=>{
    if(headerDocumentButtons.classList.contains('click-show')){
      button.children[1].classList.remove('show-edit');
    }
  })
  button.addEventListener('mouseleave',()=>{
    button.children[1].classList.add('show-edit')
  })
})

