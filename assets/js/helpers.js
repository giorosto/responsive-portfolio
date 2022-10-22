let skills = [
	{	
		id:1,
		img: "uil uil-brackets-curly",
		title:"frontend",
		experience:"1+ years of self study",
		set:[
			{
				title:"HTML",
				percent:70
			},
			{
				title:"CSS",
				percent:65
			},
			{
				title:"JavaScript",
				percent:30
			},
			{
				title:"React",
				percent:40
			},
		]
	},
	{	
		id:2,
		img:"uil-server-network-alt",
		title:"backend",
		experience:"6 months of self study",
		set:[
			{
				title:"php",
				percent:30  
			},
			{
				title:"laravel",
				percent:35  
			},
			{
				title:"MySql",
				percent:35  
			}
		]
	}
]
function changeSkillsActive(id) {
	let div=document.getElementById(id)
	if(div.classList[1]==="skills__close"){
		div.classList.replace("skills__close", "skills__open")
	}else{
		div.classList.replace("skills__open", "skills__close")
	} 
}
function getSkillSetInnerHtml(sets) {
	let innerHTML = ""
	sets.forEach((set)=>{
		innerHTML +=`
			<div class="skills__data">
                <div class="skills__titles">
                    <h3 class="skills__name">${set.title}</h3>
                    <span class="skills__number">${set.percent}%</span>  
                </div>
            </div>
            <div class="skills__bar">
                <span class="skills__percentage" style="width:${set.percent}%;"></span>
            </div>
		`
	})
	return innerHTML
}

function setSkills() {
	let main = document.getElementById('skills-main')

	skills.forEach((skill, i)=>{
		let div = document.createElement("DIV")
		let id = skill.id+skill.title
		div.setAttribute("class", "skills__content skills__close")
		div.setAttribute("id", id)
		div.innerHTML = `
			<div onclick="changeSkillsActive('${id}')" class="skills__content ${id}">    
                <div class="skills__header">
                    <i class="${skill.img} skills__icon"></i>

                    <div>
                        <h1 class="skills__title">${skill.title}</h1>
                        <span clss="skills__subtitle">${skill.experience}</span>
                    </div>

                    <i  class="uil uil uil-angle-down skills__arrow" id="${i}onclick"></i>
                </div> 

                <div class="skills__list grid">
                ${
                	this.getSkillSetInnerHtml(skill.set)	
                }
                </div>
            </div>
		`
		main.appendChild(div)
	})
}
this.setSkills()
