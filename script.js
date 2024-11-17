
let tl = gsap.timeline()

function breakTheText() {
   const name_elem = document.querySelector('h1');
   const span_elem = document.querySelectorAll('span')
   const name_text = name_elem.textContent;
   const name_alphabets = name_text.split('')
   console.log(name_alphabets);

   let half_length = Math.floor(name_alphabets.length / 2);

   console.log(half_length);
   let clutter = ''
   name_alphabets.forEach(function (elem, idx) {
      if (idx < half_length) {
         clutter += `<pre class="a">${elem}</pre>`
      } else {
         clutter += `<pre class="b">${elem}</pre>`
      }
   })
   name_elem.innerHTML = clutter

}
breakTheText()

gsap.from('h1 .a', {
   y: 80,
   duration: 0.5,
   delay: 0.5,
   stagger: 0.1,
   opacity: 0,
})
gsap.from('h1 .b', {
   y: 80,
   duration: 0.5,
   delay: 0.5,
   stagger: -0.1,
   opacity: 0,
})

function breakText2() {
   const name_elem = document.querySelector('h2');
   const span_elem = document.querySelectorAll('span')
   const name_text = name_elem.textContent;
   const name_alphabets = name_text.split('')
   console.log(name_alphabets);

   let half_length = Math.floor(name_alphabets.length / 2);

   console.log(half_length);
   let clutter = ''
   name_alphabets.forEach(function (elem, idx) {
      if (idx % 2 === 0) {
         clutter += `<pre class="c">${elem}</pre>`
      } else {
         clutter += `<pre class="d">${elem}</pre>`
      }
   })
   name_elem.innerHTML = clutter

}
breakText2()

gsap.from('h2 .c', {
   y: 70,
   duration: 0.5,
   delay: 1.3,
   stagger: 0.1,
   opacity: 0,
})
gsap.from('h2 .d', {
   y: -70,
   duration: 0.5,
   delay: 1.3,
   stagger: -0.1,
   opacity: 0,
})

function breakText3() {
   const name_elem = document.querySelector('h3');
   const span_elem = document.querySelectorAll('span')
   const name_text = name_elem.textContent;
   const name_alphabets = name_text.split('')
   console.log(name_alphabets);

   let half_length = Math.floor(name_alphabets.length / 2);

   console.log(half_length);
   let clutter = ''
   name_alphabets.forEach(function (elem, idx) {
      if (idx % 2 === 0) {
         clutter += `<pre class="e">${elem}</pre>`
      } else {
         clutter += `<pre class="f">${elem}</pre>`
      }
   })
   name_elem.innerHTML = clutter

}
breakText3()

gsap.from('h3 .e', {
   x: 70,
   duration: 0.5,
   delay: 2.5,
   stagger: 0.1,
   opacity: 0,
})
gsap.from('h3 .f', {
   x: -70,
   duration: 0.5,
   delay: 2.5,
   stagger: -0.1,
   opacity: 0,
})
