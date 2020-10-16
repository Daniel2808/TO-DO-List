

var objArray=new Array();
var flug1=true;
var flug2=true;
var flug3=true;




const btnCreat=document.getElementById("btn-create");
btnCreat.addEventListener('click',()=>
{
    let name=document.getElementById("taskname").value;
    let info=document.getElementById("taskinfo").value;
    let time=document.getElementById("time").value;
    //after the reading changed the valu to defult
    let obj=new ToDo(name,info,time);
    copyRow(obj);
    


});

const btnUpDate=document.getElementById("btn-update");


const btnDeleteAll=document.getElementById("btn-delete");
btnDeleteAll.addEventListener('click',()=>
{
    objArray.forEach((value,key)=>{
        objArray[key].remove();
    })
   let size=objArray.length;
   objArray.splice(0,size);

});

function copyRow(obj){//copy elemnt -function
    let table=document.getElementsByTagName("tbody")[0];
    let inerRow=document.getElementsByTagName("tr")[1];
    var cloneElemnt=inerRow.cloneNode(true);
    let arr=cloneElemnt.getElementsByTagName("td");
    cloneElemnt.getElementsByTagName("th")[0].innerHTML=obj.getnum();
    arr[0].innerHTML=obj.getName();
    arr[1].innerHTML=obj.getinfo();
    arr[2].innerHTML=obj.getTime();
    let temp1=document.createElement('i');
   
    temp1.className = "far fa-edit";
    arr[3].appendChild(temp1);//edit
    let temp2=document.createElement('i');
  
    temp2.className="far fa-trash-alt";
    arr[4].appendChild(temp2);//delete
    let temp3=document.createElement('i');
    
    temp3.className="far fa-square";
    arr[5].appendChild(temp3);//complete
    arr[3].style.cursor = "pointer";
    arr[4].style.cursor = "pointer";
    arr[5].style.cursor = "pointer";
    objArray.push(cloneElemnt);
    table.appendChild(cloneElemnt); 
    
    arr[3].addEventListener('click',()=>{//edit
    document.getElementById("taskname").value = obj.getName();
    document.getElementById("taskinfo").value = obj.getinfo();
    document.getElementById("time").value = obj.getTime(); 

    btnUpDate.addEventListener('click',()=>{
        obj.taseName=document.getElementById("taskname").value;
        obj.taskeDetail=document.getElementById("taskinfo").value;
        obj.time=document.getElementById("time").value;
        arr[0].innerHTML=obj.getName();
        arr[1].innerHTML=obj.getinfo();
        arr[2].innerHTML=obj.getTime();
        }
        
    );
    });

    arr[4].addEventListener('click',()=>{//delete
        objArray.forEach((valu,key)=>
        {
            const currValue = valu.getElementsByTagName('th')[0].outerText;
            const id = obj.getnum()
            if(String(id)===currValue){
                objArray[key].remove();
                objArray.splice(key,1);
            }
            
       });

       

    });

    arr[5].addEventListener('click',()=>{//complete

        if(flug3===true){
        temp3.className="far fa-check-square";
        flug3=false;
        }
        else{
            temp3.className="far fa-square";
            flug3=true;
        }

    });
}


