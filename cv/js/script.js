'use strict';
const titles = document.querySelectorAll('.title'),
      sections = document.querySelectorAll('section'),
      skills = document.querySelectorAll('.skills__item-progress'),
      markers = document.querySelectorAll('.skills__item-progress__marker');

sections.forEach((element, i) => {
      element.addEventListener('mouseover', (e) => {
            const target = e.currentTarget;
            if (target) {
                  titles[i].classList.add('title_hovered');
                  element.addEventListener('mouseleave', () => {
                        titles[i].classList.remove('title_hovered');
                  });
            }
            if(target.classList.contains('skills')) {
                  skills.forEach((skill, i) => {
                        const progress = skill.dataset.progress;
                        console.log(progress);
                        markers[i].style.left = progress;
                  });
            } else {
                  skills.forEach((skill, i) => {
                        const progress = skill.dataset.progress;
                        console.log(progress);
                        markers[i].style.left = '0';
                  });  
            }
      })
      
});