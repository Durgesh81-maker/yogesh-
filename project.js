var arr = [
    {dp:"https://images.unsplash.com/photo-1767171361732-c8a90df5c94f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1766852684820-7f0bde1b6528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673002094029-7b23531aa342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODR8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1605941407951-fa62495beb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5JTIwbmV3JTIweWVhcnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1760933901407-d27f0a723d1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1673002094029-7b23531aa342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODR8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1668293750324-bd77c1f08ca9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1612178010887-8cd0498f4ab0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpemVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1766854269605-bd06cb72217e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"}]
    var storyian= document.querySelector("#storyian");
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx} src ="${elem.dp}" alt="">
    </div>`;
})
 storyian.innerHTML = clutter;

storyian.addEventListener("click",function(dets){
    
    document.querySelector()

})