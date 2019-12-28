function Stereometry(){
 let lenta = document.getElementById('inner-lenta');
 lenta.innerHTML = "";
    
 lenta.appendChild(document.createElement('p')).setAttribute('id','cube');
 lenta.appendChild(document.createElement('p')).setAttribute('id','Pyramid');
 lenta.appendChild(document.createElement('p')).setAttribute('id','Cone');
 lenta.appendChild(document.createElement('p')).setAttribute('id','Cylinder');
 lenta.appendChild(document.createElement('p')).setAttribute('id','Sphere');
    
 document.getElementById('cube').className = 'Figure';
 document.getElementById('Pyramid').className = 'Figure';
 document.getElementById('Cone').className = 'Figure';
 document.getElementById('Cylinder').className = 'Figure';
 document.getElementById('Sphere').className = 'Figure';
    
 document.getElementById('cube').innerHTML = '<h3>Куб</h3><br>';
 document.getElementById('Pyramid').innerHTML = '<h3>Пиромида</h3><br>';
 document.getElementById('Cone').innerHTML = '<h3>Конус</h3><br>';
 document.getElementById('Cylinder').innerHTML = '<h3>Цилиндр</h3><br>';
 document.getElementById('Sphere').innerHTML = '<h3>Сфера</h3><br>';
    
    
//    Понятие фигур
    
    
 document.getElementById('cube').innerHTML = document.getElementById('cube').innerHTML + '<div id="concept-figure-div" row><img src="/static/Imgs/Cube.png" class="img-figure" id="img-figure-cube"> Куб — правильный многогранник, каждая грань которого представляет собой квадрат. Все ребра куба равны.<br><br> Куб является частным случаем параллелепипеда и призмы.</div>';
 
 document.getElementById('Pyramid').innerHTML = document.getElementById('Pyramid').innerHTML + '<div id="concept-figure-div"><img src="/static/Imgs/Pyramid.png" class="img-figure" id="img-figure-Pyramid"> Пирамида — многогранник, основание которого — многоугольник, а остальные грани — треугольники, имеющие общую вершину.<br><br>Пирамида является частным случаем конуса.<br><br> Пирамида называется правильной, если её основанием является правильный многоугольник, а вершина проецируется в центр основания.</div>';
    
 document.getElementById('Cone').innerHTML = document.getElementById('Cone').innerHTML + '<div id="concept-figure-div"><img src="/static/Imgs/Cone.png" class="img-figure" id="img-figure-Cone">Конус — тело, полученное объединением всех лучей, исходящих из одной точки (вершины конуса) и проходящих через плоскую поверхность.<br><br>Круглый конус может быть получен вращением прямоугольного треугольника вокруг одного из его катетов.</div>';
    
 document.getElementById('Cylinder').innerHTML = document.getElementById('Cylinder').innerHTML + '<div id="concept-figure-div"> <img src="/static/Imgs/Cylinder.png" class="img-figure" id="img-figure-Cylinder">Цилиндр — геометрическое тело, ограниченное цилиндрической поверхностью и двумя параллельными плоскостями, пересекающими её.</div>';
    
 document.getElementById('Sphere').innerHTML = document.getElementById('Sphere').innerHTML + '<div id="concept-figure-div"><img src="/static/Imgs/Sphere.png" class="img-figure" id="img-figure-Sphere">Сфера - геометрическое место точек в пространстве, равноудаленных от некоторой заданной точки (центра сферы).</div>';
   
    
// Формулы фигур
    
// onmouseover="" onmouseout="img_Sphere()"    
 document.getElementById('cube').innerHTML = document.getElementById('cube').innerHTML + '<div id="formulas-figure"><h3 style="margin:5px 0px 8px 0px;">Формулы</h3>V = <a onmouseover="img_cube_a()" onmouseout="img_cube()">a</a><sup>3</sup><br>S = 6<a onmouseover="img_cube_a()" onmouseout="img_cube()">a</a><sup>2</sup></div>';
 
 document.getElementById('Pyramid').innerHTML = document.getElementById('Pyramid').innerHTML + '<div id="formulas-figure"><h3 style="margin:5px 0px 8px 0px;">Формулы</h3>V = 1/3S<sub style="font-size:10px;">осн.</sub> h</div>';
    
 document.getElementById('Cone').innerHTML = document.getElementById('Cone').innerHTML + '<div id="formulas-figure"><h3 style="margin:5px 0px 8px 0px;">Формулы</h3>V = 1/3<a onmouseover="img_Cone_S()" onmouseout="img_Cone()" >S<sub style="font-size:10px;">осн.</sub></a> <a onmouseover="img_Cone_H()" onmouseout="img_Cone()">h</a><br>S<sub style="font-size:10px;">бок. пов.</sub> = <a onmouseover="img_Cone_Pi()" onmouseout="img_Cone()">π</a><a onmouseover="img_Cone_R()" onmouseout="img_Cone()">R</a><a onmouseover="img_Cone_L()" onmouseout="img_Cone()">l</a><br>S<sub style="font-size:10px;">полн. пов.</sub> = <a onmouseover="img_Cone_Pi()" onmouseout="img_Cone()">π</a><a onmouseover="img_Cone_R()" onmouseout="img_Cone()">R</a>(<a onmouseover="img_Cone_L()" onmouseout="img_Cone()">l</a>+<a onmouseover="img_Cone_R()" onmouseout="img_Cone()">R</a>)</div>';
    
 document.getElementById('Cylinder').innerHTML = document.getElementById('Cylinder').innerHTML + '<div id="formulas-figure"><h3 style="margin:5px 0px 8px 0px;">Формулы</h3>S<sub style="font-size:10px;">бок. пов.</sub> = 2<a onmouseover="img_Cylinder_Pi()" onmouseout="img_Cylinder()">π</a><a onmouseover="img_Cylinder_R()" onmouseout="img_Cylinder()">R</a><a onmouseover="img_Cylinder_H()" onmouseout="img_Cylinder()">h</a><br>S<sub style="font-size:10px;">полн. пов.</sub> = 2<a onmouseover="img_Cylinder_Pi()" onmouseout="img_Cylinder()">π</a><a onmouseover="img_Cylinder_R()" onmouseout="img_Cylinder()">R</a>(<a onmouseover="img_Cylinder_H()" onmouseout="img_Cylinder()">h</a>+<a onmouseover="img_Cylinder_R()" onmouseout="img_Cylinder()">R</a>)<br>V = <a onmouseover="img_Cylinder_Pi()" onmouseout="img_Cylinder()">π</a><a onmouseover="img_Cylinder_R()" onmouseout="img_Cylinder()">R</a><sup>2</sup><a onmouseover="img_Cylinder_H()" onmouseout="img_Cylinder()">h</a></div>';
    
 document.getElementById('Sphere').innerHTML = document.getElementById('Sphere').innerHTML + '<div id="formulas-figure"><h3 style="margin:5px 0px 8px 0px;">Формулы</h3>S = 4<a onmouseover="img_Sphere_Pi()" onmouseout="img_Sphere()" >π</a><a onmouseover="img_Sphere_R()" onmouseout="img_Sphere()">R</a><sup>2</sup><br>V = 4/3<a onmouseover="img_Sphere_Pi()" onmouseout="img_Sphere()" >π</a><a onmouseover="img_Sphere_R()" onmouseout="img_Sphere()">R</a><sup>3</sup></div>';
 }

function img_cube_a(){document.getElementById('img-figure-cube').setAttribute('src','/static/Imgs/Cube-a.png')}
function img_cube(){document.getElementById('img-figure-cube').setAttribute('src','/static/Imgs/Cube.png')}
function img_Cylinder_R(){document.getElementById('img-figure-Cylinder').setAttribute('src','/static/Imgs/Cylinder-R.png')}
function img_Cylinder_H(){document.getElementById('img-figure-Cylinder').setAttribute('src','/static/Imgs/Cylinder-H.png')}
function img_Cylinder_Pi(){document.getElementById('img-figure-Cylinder').setAttribute('src','/static/Imgs/Pi.jpg')}
function img_Cylinder(){document.getElementById('img-figure-Cylinder').setAttribute('src','/static/Imgs/Cylinder.png')}
function img_Cone_S(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Cone-S.png')}
function img_Cone_L(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Cone-L.png')}
function img_Cone_H(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Cone-H.png')}
function img_Cone_R(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Cone-R.png')}
function img_Cone_Pi(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Pi.jpg')}
function img_Cone(){document.getElementById('img-figure-Cone').setAttribute('src','/static/Imgs/Cone.png')}
function img_Sphere_R(){document.getElementById('img-figure-Sphere').setAttribute('src','/static/Imgs/Sphere-R.png')}
function img_Sphere_Pi(){document.getElementById('img-figure-Sphere').setAttribute('src','/static/Imgs/Pi.jpg')}
function img_Sphere(){document.getElementById('img-figure-Sphere').setAttribute('src','/static/Imgs/Sphere.png')}
function img_Prism3_right(){document.getElementById('img-figure-Prism').setAttribute('src','/static/Imgs/Prism3_right.png')}
function img_Prism3_right_h(){document.getElementById('img-figure-Prism').setAttribute('src','/static/Imgs/Prism3_right_h.png')}
function img_Prism3_right_S(){document.getElementById('img-figure-Prism').setAttribute('src','/static/Imgs/Prism3_right_S.png')}

function Trigonometry(){
 let lenta = document.getElementById('inner-lenta');

 lenta.innerHTML = '';
    
    
 lenta.appendChild(document.createElement('h2')).setAttribute('id','trigonometric_circle-h2');   
 document.getElementById('trigonometric_circle-h2').innerHTML = 'Тригонометрический круг';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/trigonometric_circle_img.jpg" class="img-formulas-trigonometry">';
    
 lenta.appendChild(document.createElement('p')).setAttribute('id','Angle-values-p');
 document.getElementById('Angle-values-p').innerHTML = 'Значения sin, cos, tan, cot при значениях углов 0°, 30°, 60°, 90°, 120°, 135°, 150°, 180°, 210°, 225°, 240°, 270°, 300°, 315°, 330°, 360°';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/table-value-agles.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_1.png" class="img-formulas-trigonometry">';
    
 lenta.appendChild(document.createElement('h2')).setAttribute('id','function-signs-h2');
 document.getElementById('function-signs-h2').innerHTML = 'Знаки фунций';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_24.png" class="img-function-signs"><img src="/static/Imgs/Screenshot_25.png" class="img-function-signs"><img src="/static/Imgs/Screenshot_26.png" class="img-function-signs">';
//    <p class="function-sins-p">sinA</p><p class="function-sins-p">cosA</p><p class="function-sins-p">tgA и ctgA</p>';
    
 
    
//    Тригонометрические формулы

 lenta.appendChild(document.createElement('h2')).setAttribute('id','trigonometric-formulas-h2');   
 document.getElementById('trigonometric-formulas-h2').innerHTML = 'Тригонометрические формулы';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Half-angle-formulas-h3'); 
 document.getElementById('Half-angle-formulas-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Half-angle-formulas-h3').innerHTML = 'Формулы половинного угла';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_13.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_14.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_15.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_16.png" class="img-formulas-trigonometry">';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Formulas-of-double-triple-h3'); 
 document.getElementById('Formulas-of-double-triple-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Formulas-of-double-triple-h3').innerHTML = 'Формулы двойного, тройного и т.д. угла';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_2.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_3.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_4.png" class="img-formulas-trigonometry">';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Degrading-Formulas-h3');
 document.getElementById('Degrading-Formulas-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Degrading-Formulas-h3').innerHTML = 'Формулы понижения степени';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_5.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_6.png" class="img-formulas-trigonometry">';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Addition-formulas-h3');
 document.getElementById('Addition-formulas-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Addition-formulas-h3').innerHTML = 'Формулы сложения';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_7.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_8.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_9.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_10.png" class="img-formulas-trigonometry">';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Formulas-for-the-sum-and-difference-of-trigonometric-functions-h3');
 document.getElementById('Formulas-for-the-sum-and-difference-of-trigonometric-functions-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Formulas-for-the-sum-and-difference-of-trigonometric-functions-h3').innerHTML = 'Формулы суммы и разности тригонометрических функций';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_11.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_12.png" class="img-formulas-trigonometry">';
    
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Product-Formulas-h3');
 document.getElementById('Product-Formulas-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Product-Formulas-h3').innerHTML = 'Формулы произведения';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_17.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_18.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_19.png" class="img-formulas-trigonometry">';
 

 lenta.appendChild(document.createElement('h3')).setAttribute('id','Universal-trigonometric-substitution-h3');
 document.getElementById('Universal-trigonometric-substitution-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Universal-trigonometric-substitution-h3').innerHTML = 'Универсальная тригонометрическая подстановка';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_20.png" class="img-formulas-trigonometry">';
    
 
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Other-formulas-h3');
 document.getElementById('Other-formulas-h3').className = 'formulas-trigonometric-h3';
 document.getElementById('Other-formulas-h3').innerHTML = 'Другие формулы';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_21.png" class="img-formulas-trigonometry"><br><img src="/static/Imgs/Screenshot_22.png" class="img-formulas-trigonometry">';
 
    
 
}

function Logarithms(){
 let lenta = document.getElementById('inner-lenta');
    
 lenta.innerHTML = '';
    
 lenta.appendChild(document.createElement('h2')).setAttribute('id','log-theory-h2');
 document.getElementById('log-theory-h2').innerHTML = 'Теория'; 
 lenta.innerHTML = lenta.innerHTML + 'log<sub>a</sub>b = c ⇔ a<sup>c</sup> = b<br>lg b ⇔ log<sub>10</sub>b - десятичный логарифм<br>ln b ⇔ log<sub>e</sub>b - натуральный логарифм e = 2,7 (Число Эйлера)';

 lenta.appendChild(document.createElement('h2')).setAttribute('id','log-examples-h2');
 document.getElementById('log-examples-h2').innerHTML = 'Примеры';
 lenta.innerHTML = lenta.innerHTML + '<br>log<sub>2</sub>4 ⇔ 2<sup>x</sup> = 4 Отвeт: 2.';
 lenta.innerHTML = lenta.innerHTML + '<br>log<sub>2</sub>0,25 ⇔ 2<sup>x</sup> = 0,25 Отвeт: -2.';
 lenta.innerHTML = lenta.innerHTML + '<br>log<sub>7</sub>1 ⇔ 7<sup>x</sup> = 1 Отвeт: 0.';
 lenta.innerHTML = lenta.innerHTML + '<br>lg 100 ⇔ 10<sup>x</sup> = 100 Отвeт: 2.';
 lenta.innerHTML = lenta.innerHTML + '<br>ln 1 ⇔ e<sup>x</sup> = 1 Отвeт: 0.';
    
    
 lenta.appendChild(document.createElement('h2')).setAttribute('id','formulas-Logarithms-h2');
 document.getElementById('formulas-Logarithms-h2').innerHTML = 'Свойства логарифмов';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_23.png" class="img-formulas-trigonometry"><br>';


}
function Derivative(){
 let lenta = document.getElementById('inner-lenta');
    
 lenta.innerHTML = '';
 
 lenta.appendChild(document.createElement('h3')).setAttribute('id','rule-deferring-h3');
 document.getElementById('rule-deferring-h3').innerHTML = 'Правила дефферинцирования';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_27.png" class="img-Derivative">';   
    
 lenta.appendChild(document.createElement('h3')).setAttribute('id','Derivative-simple-func-h3');
 document.getElementById('Derivative-simple-func-h3').innerHTML = 'Производная простейших функций';
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_28.png" class="img-Derivative">';       
 lenta.innerHTML = lenta.innerHTML + '<img src="/static/Imgs/Screenshot_30.png" class="img-Derivative">';
}