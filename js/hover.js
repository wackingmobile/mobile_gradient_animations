function my() {
  //timeline
  document.getElementById("dot_holder").addEventListener("mouseover", hover);
  document.getElementById("dot_holder").addEventListener("mouseout", gone);
  document.getElementById("dot_holder").addEventListener("click", clickedStuff);
  //Selection
  document.getElementById("selection").addEventListener("click", clickedStuffS);

}

//hover overtop of dot
function hover(event){
  var jan = document.getElementById("jan"),
      jan_dot = document.getElementById("jan_dot"),      
      janth = document.getElementById("janth"),      
      janth_dot = document.getElementById("janth_dot"),      
      jan_var = document.getElementById("jan_var"),      
      feb = document.getElementById("feb"),
      feb_dot = document.getElementById("feb_dot"),
      mar_dot = document.getElementById("mar_dot"),
      mar = document.getElementById("mar"),
      apr = document.getElementById("apr"),
      apr_dot = document.getElementById("apr_dot");
  if ((event.target.id)==="jan_dot") {
    jan.style.opacity=1;    
    jan_dot.style.backgroundColor="white";            
  }
  else if (jan_var.innerHTML==="on"){
      janth.style.opacity=1;
      janth_dot.style.backgroundColor="white"; 
  }
  else if ((event.target.id)==="feb_dot") {
    feb.style.opacity=1;
    feb_dot.style.backgroundColor="white";
  }
  else if ((event.target.id)==="mar_dot") {
    mar.style.opacity=1;
    mar_dot.style.backgroundColor="white";
  }
  else if ((event.target.id)==="apr_dot") {
    apr.style.opacity=1;
    apr_dot.style.backgroundColor="white";
  }
}

//hover off dot
function gone(event){
  
  if ((event.target.id)==="jan_dot"){
    jan.style.opacity=0;    
    jan_dot.style.backgroundColor="black";       
  }
  else if (jan_var.innerHTML==="on"){
      janth_dot.style.backgroundColor="black";
      janth.style.opacity=0;
  }
  
  else if ((event.target.id)==="feb_dot"){
    feb.style.opacity=0;
    feb_dot.style.backgroundColor="black";
  }
  else if ((event.target.id)==="mar_dot"){
    mar.style.opacity=0;
    mar_dot.style.backgroundColor="black";
  }
  else if ((event.target.id)==="apr_dot"){
    apr.style.opacity=0;
    apr_dot.style.backgroundColor="black";
  }
}

//click something on timeline
function clickedStuff(event){
  var click_var = document.getElementById("click_var"),
      jan_month = document.getElementsByClassName("jan");
  if (click_var.innerHTML === "true"){
    if ((event.target.id)==="jan_dot"){
      if (jan_var.innerHTML==="on"){
        jan_month[0].style.display="none";
        document.getElementById("month").style.display="none";
        select_one.style.display="none";
        select_two.style.display="none";
        click_var.innerHTML="false";
        jan_var.innerHTML="off";
      }
      
    }
    else if(jan_var.innerHTML==="on"){
      document.getElementById("month").style.display="inline-flex";
      imgJ.style.display="block";
      select_one.style.display="block";
      select_two.style.display="block";
    }
  }else{
    if ((event.target.id)==="jan_dot"){
      if (jan_var.innerHTML==="off"){
       jan_month[0].style.display="block"; 
        jan_var.innerHTML="on";
      }      
    }
    click_var.innerHTML="true";
  }
  
}


//selection

function clickedStuffS(event){
  var select_var = document.getElementById("select_var");
//  if (select_var.innerHTML==="true"){
//    
//  }else{
    if(jan_var.innerHTML==="on"){
      if((event.target.id)==="select_one"){
        imgJ.style.display="block";
        imgJ_two.style.display="none"; 
//        select_var.innerHTML="true";
      }
      else if((event.target.id)==="select_two"){
        imgJ.style.display="none";
        imgJ_two.style.display="block";  
//        select_var.innerHTML="true";
      }
    }
  }
