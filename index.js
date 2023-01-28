// const alignButtons=document.querySelectorAll('.align');
// const spacingButtons=document.querySelectorAll(".spacing");
// const formatButtons=document.querySelectorAll('.format');
// console.log(formatButtons);
// formatButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//         buttons.classList.add("active")
//     })
// })
// console.log(alignButtons);
// alignButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//         buttons.classList.add("active")
//     })
// })
// console.log(spacingButtons);
// spacingButtons.forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//         buttons.classList.add("active");
//     })
// })
// const fontlist=['Arial','Verdana','Times New Roman','Garmond','Georgia','Courier New','cursive'];
// const initializer=()=>{
//     // highlighter(alignButtons,true);
//     // highlighter(spacingButtons,true);
//     highlighter(formatButtons,false);
// }

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
// window.onload=initializer();
function formatDoc(cmd,value=null){
    if(value){
        document.execCommand(cmd,false,value);
    }else{
        document.execCommand(cmd)
    }
}
function addlink(){
    const url = prompt('Insert url');
    formatDoc('createLink',url);
    // document.execCommand('createLink',false,url);
}



