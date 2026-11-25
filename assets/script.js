const menuButton=document.querySelector(".menu-toggle");
const mainNav=document.querySelector(".main-nav");
if(menuButton&&mainNav){
  menuButton.addEventListener("click",()=>{
    const opened=mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(opened));
  });
  mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
  }));
}
const searchInput=document.querySelector("#insight-search");
const filterButtons=[...document.querySelectorAll(".filter-button")];
const insightCards=[...document.querySelectorAll(".insight-card")];
const emptyState=document.querySelector("#empty-state");
let activeFilter="all";
function filterInsights(){
  if(!insightCards.length)return;
  const term=(searchInput?.value||"").trim().toLowerCase();
  let visible=0;
  insightCards.forEach(card=>{
    const category=card.dataset.category||"";
    const matchesCategory=activeFilter==="all"||category===activeFilter;
    const matchesText=card.textContent.toLowerCase().includes(term);
    const show=matchesCategory&&matchesText;
    card.hidden=!show;
    if(show)visible++;
  });
  if(emptyState)emptyState.hidden=visible!==0;
}
filterButtons.forEach(button=>button.addEventListener("click",()=>{
  activeFilter=button.dataset.filter;
  filterButtons.forEach(item=>item.classList.toggle("active",item===button));
  filterInsights();
}));
if(searchInput)searchInput.addEventListener("input",filterInsights);
