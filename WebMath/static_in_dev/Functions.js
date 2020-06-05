function PageFixing(){
    let width = document.documentElement.clientWidth;
    document.getElementById('wrapper').setAttribute('Style','width:'+width+'px;');
}
function load_сalculator(){
    let calculator = document.createElement('div');
    let inner_Calculator = document.createElement('div');
    let exit = document.createElement('div');//Button exit
    let calculator_On = document.getElementById('calculator');
    let result_input = document.createElement('input');
    let table = document.createElement('table');
    let calculator_header = document.createElement('div');
    let result_input_header = document.createElement('div'); 
    let option_calc = document.createElement('div'); 
    
    if(calculator_On){//Есть ли калькулятор?
        document.getElementById('wrapper').removeChild(calculator_On);//Есть, удаляем.
    }
    else{//Нету, создаём.
        
     calculator.setAttribute('id','calculator');  
     inner_Calculator.setAttribute('id','inner-Calculator');   
     
     exit.setAttribute('id','calculator_exit');
     exit.setAttribute('onclick','delete_сalculator();');
     exit.innerHTML = '✖';
        
     result_input.setAttribute('id','result_input');
     option_calc.setAttribute('id','option-calc');   
     result_input_header.setAttribute('id','result_input_header');
     calculator_header.setAttribute('id','calculator_header');
        
     table.setAttribute('id','table_calculator');
     table.innerHTML = "<tr><th id='r-1_c-1' class='buttons_calculator' onclick="+"powx_2()"+">x<sup><small>2</small></sup></th>"
      + "<th id='r-1_c-2' class='buttons_calculator' onclick="+"powx_y()"+">x<sup><small>y</small></sup></th>"
      + "<th id='r-1_c-3' class='buttons_calculator' onclick="+"sin()"+">sin</th>"
      + "<th id='r-1_c-4' class='buttons_calculator' onclick="+"cos()"+">cos</th>"
     + "<th id='r-1_c-5' class='buttons_calculator' onclick="+"tan()"+">tan</th>"
     +  "</tr><tr><th id='r-2_c-1' class='buttons_calculator' onclick=" + "sqrt()" + ">√</th>"
     + "<th id='r-2_c-2' class='buttons_calculator' onclick="+"pow10_x()"+">10<sup><small>x</small></sup></th>"
     + "<th id='r-2_c-3' class='buttons_calculator'>Log</th>"
     + "<th id='r-2_c-4' class='buttons_calculator'>Exp</th>"
     + "<th id='r-2_c-5' class='buttons_calculator'>Mod</th>"
     +  "</tr><tr><th id='r-3_c-1' class='buttons_calculator'>⇧</th>"
     + "<th id='r-3_c-2' class='buttons_calculator' onclick=" + "clean()" + ">CE</th>"
     + "<th id='r-3_c-3' class='buttons_calculator' onclick=" + "clean()" + ">C</th>"
     + "<th id='r-3_c-4' class='buttons_calculator' onclick=" + "back()" + ">↩</th>"
     + "<th id='r-3_c-5' class='buttons_calculator' onclick=" + "insert('/')" + " >÷</th>"
     +  "</tr><tr><th id='r-4_c-1' class='buttons_calculator' onclick=" + "insert('"+Math.PI+"')" + ">π</th>"
     + "<th id='r-4_c-2' class='buttons_calculator' onclick=" + "insert('7')" + ">7</th>"
     + "<th id='r-4_c-3' class='buttons_calculator' onclick=" + "insert('8')" + ">8</th>"
     + "<th id='r-4_c-4' class='buttons_calculator' onclick=" + "insert('9')" + ">9</th>"
     + "<th id='r-4_c-5' class='buttons_calculator' onclick=" + "insert('*')" + ">×</th>"
     +  "</tr><tr><th id='r-5_c-1' class='buttons_calculator' onclick=" + "factorial_calc()" + ">n!</th>"
     + "<th id='r-5_c-2' class='buttons_calculator'onclick=" + "insert('4')" + ">4</th>"
     + "<th id='r-5_c-3' class='buttons_calculator' onclick=" + "insert('5')" + ">5</th>"
     + "<th id='r-5_c-4' class='buttons_calculator' onclick=" + "insert('6')" + ">6</th>"
     + "<th id='r-5_c-5' class='buttons_calculator' onclick=" + "insert('-')" + ">-</th>"
     +    "</tr><tr><th id='r-6_c-1' class='buttons_calculator'>±</th>"
     + "<th id='r-6_c-2' class='buttons_calculator' onclick=" + "insert('1')" + ">1</th>"
     + "<th id='r-6_c-3' class='buttons_calculator' onclick=" + "insert('2')" + ">2</th>"
     + "<th id='r-6_c-4' class='buttons_calculator'  onclick=" + "insert('3')" + ">3</th>"
     + "<th id='r-6_c-5' class='buttons_calculator' onclick=" + "insert('+')" + ">+</th>"
     +  "</tr><tr><th id='r-7_c-1' class='buttons_calculator' onclick=" + "insert('(')" + ">(</th>"
     + "<th id='r-7_c-2' class='buttons_calculator' onclick=" + "insert(')')" + ">)</th>"
     + "<th id='r-7_c-3' class='buttons_calculator' onclick=" + "insert('0')" + ">0</th>"
     + "<th id='r-7_c-4' class='buttons_calculator' onclick=" + "insert('.')" + ">.</th>"
     + "<th id='r-7_c-5' class='buttons_calculator' onclick=" + "equal()" + ">=</th></tr>"; 
    
        
      // onclick="fac()"
        
     option_calc.innerHTML = '<a onclick="Rad_Active()" class="option-calc-a" id="Rad_NotActive">Rad</a>/<a onclick="Deg_Active()" class="option-calc-a" id="Deg_NotActive">Deg</a>';
        
        
     calculator.appendChild(inner_Calculator);
        
     calculator_header.appendChild(exit);
     calculator_header.appendChild(option_calc);
        
     inner_Calculator.appendChild(calculator_header);
     inner_Calculator.appendChild(result_input_header);
     inner_Calculator.appendChild(result_input);
     inner_Calculator.appendChild(table);
     
     document.getElementById('wrapper').appendChild(calculator);

    }
}
function Rad_Active(){
    if(document.getElementById('Deg_Active')){
      document.getElementById('Deg_Active').setAttribute('id','Deg_NotActive');  
      document.getElementById('Rad_NotActive').setAttribute('id','Rad_Active');
    }else{
      document.getElementById('Rad_NotActive').setAttribute('id','Rad_Active');
    }
}
function Deg_Active(){
     if(document.getElementById('Rad_Active')){
      document.getElementById('Rad_Active').setAttribute('id','Rad_NotActive');  
      document.getElementById('Deg_NotActive').setAttribute('id','Deg_Active');
    }else{
      document.getElementById('Deg_NotActive').setAttribute('id','Deg_Active');
    }
}

function delete_сalculator(){
    let calculator = document.getElementById('calculator');
    let parent = document.getElementById('wrapper');
    parent.removeChild(calculator);
}
function insert(x){
    
    if((x=='+') || (x=='-') || (x=='*') || (x=='/') || (x=='(') || (x==')')|| (x=='.')){
       let exp = document.getElementById('result_input').value; 
       if(((exp[exp.length-1]=='+') || (exp[exp.length-1]=='-') || (exp[exp.length-1]=='*') || (exp[exp.length-1]=='/') || (exp[exp.length-1]=='(') || (exp[exp.length-1]==')') || (exp[exp.length-1]=='.')) || (exp=='')){
          }else{
              let input = document.getElementById('result_input');
              input.value += x;
          }
       }else{
    let input = document.getElementById('result_input');
    input.value += x;
    }

}
function clean(){
    document.getElementById('result_input').value = "";
    document.getElementById('r-3_c-4').setAttribute('onclick','back()');
    document.getElementById('result_input_header').innerHTML = '';
}
function back(){
    let exp = document.getElementById('result_input').value; 
    document.getElementById('result_input').value = exp.substring(0, exp.length-1);
}
function equal(){
    let exp = document.getElementById('result_input').value; 
    if (exp){
        document.getElementById('result_input_header').innerHTML = exp;
        document.getElementById('result_input').value = eval(exp);
        document.getElementById('r-3_c-4').setAttribute('onclick','');
       }
}
function fac(x){
    if(x>1){
    return x*fac(x-1);
   }else{return 1;}
}
function factorial_calc(){
    let x = document.getElementById('result_input').value;
    if((document.getElementById('result_input').value=="")||(document.getElementById('result_input').value=='Ошибка!')){
      document.getElementById('result_input').value = 'Ошибка!';
    }else{
      document.getElementById('result_input_header').innerHTML = x + '!';
      document.getElementById('result_input').value = fac(x);
    }
}

function sqrt(){
    if((document.getElementById('result_input').value == '') || (document.getElementById('result_input').value == 'Ошибка!')){
        document.getElementById('result_input').value = 'Ошибка!'; 
    
    }else{
     let value = document.getElementById('result_input').value;
     document.getElementById('result_input_header').innerHTML = '√(' + value + ')';
     document.getElementById('result_input').value = Math.sqrt(value);
     }
    }

function pow10_x(){
     let value = document.getElementById('result_input').value;
     document.getElementById('result_input_header').innerHTML =  '10<sup>' + value + '</sup>';
     document.getElementById('result_input').value = Math.pow(10,value);

}
function powx_2(){
     let value = document.getElementById('result_input').value;
     document.getElementById('result_input_header').innerHTML =  value + '<sup>2</sup>';
     document.getElementById('result_input').value = Math.pow(value,2);
}
function powx_y(){
     let value = document.getElementById('result_input').value;
     document.getElementById('result_input').value = '';
     document.getElementById('result_input_header').innerHTML =  value + '^';
     
//     document.getElementById('result_input').value = Math.pow(x,y);
}
function sin(){
    let value = document.getElementById('result_input').value;
    document.getElementById('result_input_header').innerHTML = 'Sin(' + value + ')';
    document.getElementById('result_input').value = Math.sin(value).toFixed(5);
    
}
function cos(){
    let value = document.getElementById('result_input').value;
    document.getElementById('result_input_header').innerHTML = 'Cos(' + value + ')';
    document.getElementById('result_input').value = Math.cos(value).toFixed(5);
}
function load_theory_main(){
   let check_algebra = document.createElement('algebra');
   let check_geometry = document.getElementById('geometry');
   document.getElementById('wrapper').setAttribute('onload','load_theory_main()');
   
    
   if((check_geometry)&&(check_algebra)){}
   else{
       
    document.getElementById('inner-lenta').innerHTML = '';
       
    document.getElementById('inner-lenta').appendChild(document.createElement('p')).setAttribute('id','geometry');
    document.getElementById('inner-lenta').appendChild(document.createElement('p')).setAttribute('id','algebra');
    
     document.getElementById('geometry').className = "themes";
     document.getElementById('algebra').className = "themes";
    
     document.getElementById('geometry').innerHTML = '<h1>Геометрия</h1><br><p id="" class="Science_section" onclick="Stereometry()">Стереометрия</p>';
     document.getElementById('algebra').innerHTML = '<h1>Алгебра</h1><br><p id="" class="Science_section" onclick="Trigonometry()">Тригонометрия</p><p id="" class="Science_section" onclick="Logarithms()">Логорифмы</p><p id="" class="Science_section" onclick="Derivative()">Производная</p>';
    }


}
// onmouseover="" onmouseout="img_Sphere()"  
function load_img_src(id,src){
     src = '/static/Imgs/' + src 
     document.getElementById(id).setAttribute('src',src);
}
function load_paint_paper(){
    let paint_paper = document.getElementById('border-div-paint-paper');
    
    if(paint_paper){
      document.getElementById('wrapper').removeChild(paint_paper);
    }else{
    
      let div = document.createElement('div'),
          menu = document.createElement('div'),
          tools_option = document.createElement('div'),
          tools = document.createElement('div'),
          pen = document.createElement('img'),
          canvas = document.createElement('canvas'),
          canvas2 = document.createElement('canvas'),
          Eraser = document.createElement('img'),
          text = document.createElement('img'),
          line = document.createElement('img'),
          clean_all = document.createElement('img'),
          pen_color = document.createElement('input'),
          pen_color_value_div = document.createElement('div'),
          pen_size = document.createElement('input'),
          button_exit_paint = document.createElement('div'),
          top_border_paint_paper = document.createElement('div'),
          bottom_border_paint_paper = document.createElement('div'),
          left_border_paint_paper = document.createElement('div'),
          right_border_paint_paper = document.createElement('div'),
          border_div_paint_paper = document.createElement('div');
        
      border_div_paint_paper.setAttribute('id','border-div-paint-paper');
      top_border_paint_paper.setAttribute('id','top_border_paint_paper');
      top_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      bottom_border_paint_paper.setAttribute('id','bottom_border_paint_paper');
      bottom_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      right_border_paint_paper.setAttribute('id','right_border_paint_paper');
      right_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      left_border_paint_paper.setAttribute('id','left_border_paint_paper');
      left_border_paint_paper.setAttribute('onmouseover','move_canvas()');
        
      div.setAttribute('id','div-paint-paper');
      menu.setAttribute('id','div-menu-paint-paper');
      
      clean_all.setAttribute('id','clean_all-paint-paper');
      clean_all.setAttribute('src','/static/Imgs/clean-all-NotActive.png'); 
      clean_all.setAttribute('onclick',"clean_all_canvas_paint()");
      clean_all.setAttribute('onmouseover',"load_img_src('clean_all-paint-paper','clean-all-Active.png')");
      clean_all.setAttribute('onmouseout',"load_img_src('clean_all-paint-paper','clean-all-NotActive.png')");
        
      pen.setAttribute('id','pen-NotActive-paint-paper');
      pen.setAttribute('src','/static/Imgs/Pen-NotActive.png'); 
      pen.setAttribute('onmouseover',"load_img_src('pen-NotActive-paint-paper','Pen-Active.png')");
      if(!document.getElementById('pen-Active-paint-paper')){pen.setAttribute('onmouseout',"load_img_src('pen-NotActive-paint-paper','Pen-NotActive.png')");}
      pen.setAttribute('onclick',"pen_activator()");
      
       
      text.setAttribute('id','text-NotActive-paint-paper');
      text.setAttribute('src','/static/Imgs/Text-NotActive.png');
      text.setAttribute('onmouseover',"load_img_src('text-NotActive-paint-paper','Text-Active.png')");
      text.setAttribute('onmouseout',"load_img_src('text-NotActive-paint-paper','Text-NotActive.png')");  
        
      line.setAttribute('id','line-NotActive-paint-paper');
      line.setAttribute('src','/static/Imgs/Line-NotActive.png');
      line.setAttribute('onmouseover',"load_img_src('line-NotActive-paint-paper','Line-Active.png')");
      line.setAttribute('onmouseout',"load_img_src('line-NotActive-paint-paper','Line-NotActive.png')");  
        
      tools.setAttribute('id','tools-paint-paper');
        
      tools_option.setAttribute('id','tools-option');
      
      pen_color.setAttribute('id','pen-color-input');
      pen_color.setAttribute('value','#000000');
      pen_color.addEventListener('input', Painting);
        
      pen_color_value_div.setAttribute('id','pen_color_value_div');
        
      pen_size.setAttribute('id','pen-size-input');
      pen_size.setAttribute('value','2');
      pen_size.addEventListener('input', Painting);
        
      button_exit_paint.setAttribute('id','button-exit-paint');
      button_exit_paint.innerHTML = '✖'; 
      button_exit_paint.setAttribute('onclick','load_paint_paper()'); 
        
      Eraser.setAttribute('id','Eraser-NotActive'); 
      Eraser.setAttribute('src','/static/Imgs/Eraser-NotActive.png');
      Eraser.setAttribute('onmouseover',"load_img_src('Eraser-NotActive','Eraser-Active.png')");
      if(!document.getElementById('Eraser-Active')){Eraser.setAttribute('onmouseout',"load_img_src('Eraser-NotActive','Eraser-NotActive.png')");}
      Eraser.setAttribute('onclick',"Eraser_activator()");
        
      canvas2.setAttribute('id','canvas2-paint-paper');
      canvas2.setAttribute('height','565');
      canvas2.setAttribute('width','400');
      canvas2.setAttribute('onmouseover','Painting()');
      canvas2.setAttribute('background','#00000066');
    
      canvas.setAttribute('id','canvas-paint-paper');
      canvas.setAttribute('height','565');
      canvas.setAttribute('width','400');
      canvas.setAttribute('onmouseover','Painting()');
      canvas.setAttribute('background','#ddd');
      
      
      tools_option.appendChild(pen_size);
      tools_option.appendChild(pen_color);
      tools_option.appendChild(pen_color_value_div);  
     
      tools.appendChild(clean_all);
      tools.appendChild(pen);  
      tools.appendChild(Eraser); 
      tools.appendChild(text); 
      tools.appendChild(line); 
      tools.appendChild(button_exit_paint);
        
      menu.appendChild(tools);
      menu.appendChild(tools_option);  
        
      div.appendChild(menu);
      div.appendChild(canvas);
//      div.appendChild(canvas2);
        
        
      border_div_paint_paper.appendChild(top_border_paint_paper);  
      border_div_paint_paper.appendChild(left_border_paint_paper);
      border_div_paint_paper.appendChild(div);
      border_div_paint_paper.appendChild(right_border_paint_paper);
      border_div_paint_paper.appendChild(bottom_border_paint_paper);
        
      document.getElementById('wrapper').appendChild(border_div_paint_paper);
}
}
function pen_activator(){
    load_img_src('pen-NotActive-paint-paper','Pen-Active.png');
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onmouseover',"");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onmouseout',"");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onclick',"pen_deactivator()");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('id','pen-Active-paint-paper');
    if(document.getElementById('Eraser-Active')){Eraser_deactivator();}
}
function pen_deactivator(){
    load_img_src('pen-Active-paint-paper','Pen-NotActive.png');
    document.getElementById('pen-Active-paint-paper').setAttribute('onmouseover',"load_img_src('pen-NotActive-paint-paper','Pen-Active.png')");
    document.getElementById('pen-Active-paint-paper').setAttribute('onmouseout',"load_img_src('pen-NotActive-paint-paper','Pen-NotActive.png')");
    document.getElementById('pen-Active-paint-paper').setAttribute('onclick',"pen_activator()");
    document.getElementById('pen-Active-paint-paper').setAttribute('id','pen-NotActive-paint-paper');
//    document.getElementById('canvas-paint-paper').removeEventListener('mousemove', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mousedown', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mouseout',StopDraw);
    
}
function Eraser_activator(){
    load_img_src('Eraser-NotActive','Eraser-Active.png');
    document.getElementById('Eraser-NotActive').setAttribute('onmouseover',"");
    document.getElementById('Eraser-NotActive').setAttribute('onmouseout',"");
    document.getElementById('Eraser-NotActive').setAttribute('onclick',"Eraser_deactivator()");
    document.getElementById('Eraser-NotActive').setAttribute('id','Eraser-Active');
    if(document.getElementById('pen-Active-paint-paper')){pen_deactivator();}
}
function Eraser_deactivator(){
    load_img_src('Eraser-Active','Eraser-NotActive.png');
//    document.getElementById('Eraser-NotActive').setAttribute('onmouseover',"load_img_src('Eraser-Active','Eraser-Active.png')");
    document.getElementById('Eraser-Active').setAttribute('onmouseout',"load_img_src('Eraser-NotActive','Eraser-NotActive.png')");
    document.getElementById('Eraser-Active').setAttribute('onclick',"Eraser_activator()");
    document.getElementById('Eraser-Active').setAttribute('id','Eraser-NotActive');
//    document.getElementById('canvas-paint-paper').removeEventListener('mousemove', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mousedown', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mouseout',StopDraw);
}
function move_canvas(){
       let HTML = document.documentElement,
           div = document.getElementById('border-div-paint-paper'),
           isMouseDown = false;
       let move = function(e){
           if(isMouseDown){div.setAttribute('style','left:'+e.clientX+'px;bottom:'+((HTML.clientHeight)-(e.clientY))+'px;');}
           
           }
       let StopMove = function(){
           if(!isMouseDown){
           HTML.removeEventListener('mouseup',function(){isMouseDown = false;});
           HTML.removeEventListener('mousedown',function(){isMouseDown = true;});
           HTML.removeEventListener('mousemove',move); 
           HTML.removeEventListener('mouseout',StopMove)}
       }
       
       HTML.addEventListener('mouseup',function(){isMouseDown = false;});
       HTML.addEventListener('mousedown',function(){isMouseDown = true;});
       HTML.addEventListener('mousemove',move); 
       HTML.addEventListener('mouseout',StopMove); 
  
}
function Painting(){
  let canvas = document.getElementById('canvas-paint-paper'),
      ctx = canvas.getContext('2d'),    
//      canvas2 = document.getElementById('canvas2-paint-paper'),
//      ctx2 = canvas2.getContext('2d'),
      border_div_paint_paper = document.getElementById('border-div-paint-paper'),
      menuHeight = document.getElementById('div-menu-paint-paper').height,
      menuWidth = document.getElementById('div-menu-paint-paper').width,
      cnvsWidth = canvas.width,
      isMouseDown = false,
      cnvsHeight = canvas.height,
      clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight,
      pen_color = document.getElementById('pen-color-input').value,
      pen_color_value_div = document.getElementById('pen_color_value_div'),
      canvas_margin_left = window.getComputedStyle(border_div_paint_paper).left,
      canvas_margin_bottom = window.getComputedStyle(border_div_paint_paper).bottom,
      pen_size = document.getElementById('pen-size-input').value;
      
//canvas_margin_left.splice(-2,2);  
//console.log(canvas_margin_left);
//    
canvas.addEventListener('mouseup',function(){isMouseDown = false;ctx.lineWidth = pen_size;});
canvas.addEventListener('mousedown',function(){
    isMouseDown = true;
    pen_size = document.getElementById('pen-size-input').value;
    pen_color = document.getElementById('pen-color-input').value;
    ctx.lineWidth = pen_size;
    ctx.beginPath();
});   
    
    
let pen_size_change = function(e){
    document.getElementById('wrapper').setAttribute('style','overflow-y:hidden');
    if((e.deltaY>0)&&(e.deltaY!=0)){
     if(document.getElementById('pen-size-input').value>2){
        document.getElementById('pen-size-input').value = Number(document.getElementById('pen-size-input').value) - 1;
        document.getElementById('wrapper').setAttribute('style','');
    }
    }else{
      if(document.getElementById('pen-size-input').value<99){
         document.getElementById('pen-size-input').value = Number(document.getElementById('pen-size-input').value) + 1;
         document.getElementById('wrapper').setAttribute('style','');
    }
}
};
    
    

    canvas.onwheel = pen_size_change;// Увеличение размера кисти при прокрутке
    
      pen_color_value_div.setAttribute('style','background:'+pen_color+';');
    
  let StopDraw = function(){
        isMouseDown = false;
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mousedown', draw);
        canvas.removeEventListener('mouseout',StopDraw);
  }  
  
  let draw = function(e){
          let Pos_x=e.clientX,
              Pos_y=e.clientY;
      
      
//          Pos_x = (clientWidth-canvas_margin_left)+(Pos_x-canvas_margin_left);
          Pos_y = Pos_y-(clientHeight-cnvsHeight);
      
//             ctx2.beginPath();
//             ctx2.fillStyle = '#ddd';
//             ctx2.fillRect(0,0,canvas2.width,canvas2.height);
//             ctx2.fillStyle = '#ffffff00';
//             ctx2.fillRect(0,0,canvas2.width,canvas2.height);
//             ctx2.arc(Pos_x,Pos_y,pen_size/2,0,Math.PI * 2);
//             ctx2.stroke();
      
//          console.log('x = '+Pos_x+' y = '+Pos_y);
         if(isMouseDown){             
             ctx.lineTo(Pos_x,Pos_y);
             ctx.stroke();
             
             ctx.beginPath();
             ctx.arc(Pos_x,Pos_y,pen_size/2,0,Math.PI * 2);
             ctx.fill();
             
             ctx.beginPath();
             ctx.moveTo(Pos_x,Pos_y);
             
          }
                               
     
  }


  
  
    if(document.getElementById('pen-Active-paint-paper')){  
//        ctx2.strokeStyle = '#000';
        ctx.fillStyle = pen_color;
        ctx.strokeStyle = pen_color;
        ctx.lineWidth = pen_size;
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', draw);
        canvas.addEventListener('mouseout', StopDraw);
//        canvas.onwheel = pen_size_change;// Увеличение размера кисти при прокрутке
        }
    
    if(document.getElementById('Eraser-Active')){
//        ctx2.fillStyle = '#ddd';
//        ctx2.strokeStyle = '#000';
        ctx.fillStyle = '#ddd';
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = pen_size;
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', draw);
        canvas.addEventListener('mouseout', StopDraw);
//        canvas.onwheel = pen_size_change;// Увеличение размера кисти при прокрутке
        }
}

function clean_all_canvas_paint(){
       let canvas = document.getElementById('canvas-paint-paper'),
           ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "#ddd";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function page_up(){
    console.log(document.event.pageY);
}
function test(){
    document.onmousewheel = function(e){
      console.log(e);
    }
}