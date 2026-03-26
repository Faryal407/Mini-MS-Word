let para = document.getElementById('para');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let bold = document.getElementById('bold');
let underline = document.getElementById('underline');
let italic = document.getElementById('italic');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let pdf = document.getElementById('pdf');
let dark = document.getElementById('dark');
let imgBtn = document.getElementById('imgBtn');
let imgInput = document.getElementById('imgInput');
let size = '1';



plus.addEventListener('click' , ()=>{
    size += 0.1; // size = size + 0.1;
  para.style.fontSize = size + 'em';
});

minus.addEventListener('click' , ()=>{
size -= 0.1;
if(size < 0.1) size = 0.1;
 para.style.fontSize = size + "em";
})

bold.addEventListener('click' ,() => {
  para.style.fontWeight = 'bold';
});

underline.addEventListener('click', () => {
  para.style.textDecoration = 'underline';
});

italic.addEventListener('click', () => {
  para.style.fontStyle = 'italic';
});

clear.addEventListener('click', () => {
  para.style = 'none';
});

color.addEventListener('input', () => {
  para.style.color = color.value;
});

font.addEventListener('click', () => {
  para.style.fontFamily = font.value;
});

pdf.addEventListener('click', () => {
  html2pdf().from(para).save("document.pdf");
});

dark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});




