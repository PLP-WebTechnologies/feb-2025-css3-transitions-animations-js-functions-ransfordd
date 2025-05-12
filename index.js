const btn=document.getElementById('animatedBtn');
const toggle=document.getElementById('themeToggle');
const root=document.documentElement,KEY='themePref';
const load=()=>{
    localStorage.getItem(KEY)==='dark'? (root.classList.add('dark-theme'),toggle.checked=true) : (root.classList.remove('dark-theme'),toggle.checked=false)
};
const save=theme=>localStorage.setItem(KEY,theme);
toggle.onchange=()=>{
    if(toggle.checked){
            root.classList.add('dark-theme');
            save('dark')
    }
    else{
        root.classList.remove('dark-theme');
        save('light')
    }
};
btn.onclick=()=>{if(btn.classList.contains('animate-pulse'))return;btn.classList.add('animate-pulse');setTimeout(()=>btn.classList.remove('animate-pulse'),600)};
load();