document.addEventListener('DOMContentLoaded',()=>{
     anime.timeline({
          easing:'easeOutExpo',
     })
     .add({
          targets:"#header",
          translateY:['-200px','0'],
     })
     .add({
          targets:'#navbar li a',
          opacity:[0,1],
          delay:(el,i)=>100*i,
          offset:'-=500',
     })
})