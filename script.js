const el = document.querySelector(".nav-bar")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);
const all=document.querySelector("#project-button-1");
const oop=document.querySelector("#project-button-2");
const web=document.querySelector("#project-button-3");
const robotics=document.querySelector("#project-button-4");
const logic=document.querySelector("#project-button-5");
const dsa=document.querySelector("#project-button-6");
const projectsArr=document.querySelectorAll("#project-item");


const displayOop=()=>
{
    for(const project of projectsArr )
    {
        project.style.display='none';
    }
    projectsArr[0].style.display='block';
    console.log("test");

}
const display=(x)=>
{
    for(const project of projectsArr )
    {
        project.style.display='none';
    };
    all.classList.remove("yellow-line");
    web.classList.remove("yellow-line");
    oop.classList.remove("yellow-line");
    dsa.classList.remove("yellow-line");
    logic.classList.remove("yellow-line");
    robotics.classList.remove("yellow-line");
    if(x===-1)
    {
        for(const project of projectsArr )
        {
            project.style.display='block';
        };
        all.classList.add("yellow-line");
    }
    else if(x===0)
    {
    projectsArr[0].style.display='block';
    oop.classList.add("yellow-line");
    }
    else if(x===1)
    {
    projectsArr[1].style.display='block';
    web.classList.add("yellow-line");
    }
    else if(x===2)
    {
    projectsArr[2].style.display='block';
    robotics.classList.add("yellow-line");
    }
    else if(x===3)
    {
    projectsArr[3].style.display='block';
    projectsArr[4].style.display='block';
    logic.classList.add("yellow-line");
    }
    else if(x===4)
    {
    projectsArr[5].style.display='block';
    dsa.classList.add("yellow-line");
    }

}
all.addEventListener("click",()=>display(-1));
oop.addEventListener("click",()=>display(0));
web.addEventListener("click",()=>display(1));
robotics.addEventListener("click",()=>display(2));
logic.addEventListener("click",()=>display(3));
dsa.addEventListener("click",()=>display(4));
