async function loadSprites(){
 const res=await fetch('/sprites');
 if(!res.ok) return;
 const data=await res.json();
 const container=document.getElementById('sprites');
 container.innerHTML='';
 (data.sprites||[]).forEach(sprite=>{
  container.innerHTML += `<div><h3>${sprite.name}</h3></div>`;
 });
}
loadSprites();