import React, { useState } from 'react';
import './Todo.css';

export const Todo = () => {

  const now = new Date();
  const[input, setInput] = useState();
  const[callender, setCallender] = useState();
  //menampung semua varibel dari input
  const sendMessage = async (e) => {
    e.preventDefault();
    let inputsS = [];
    let list = document.getElementById("list");
    let li = document.createElement("li");
    if(input){
        let inputbar = document.getElementById("input");
        let inputDate = document.getElementById("inputDate");
        let btnAdd = document.getElementById("add");
        let description = document.getElementById("description");
        btnAdd.style.display = "none";
        inputbar.style.display = "none";
        inputDate.style.position = "absolute";
        inputDate.style.marginTop = 0;
        inputDate.style.marginLeft = 0;
        description.style.marginTop = "-3%";
        li.innerHTML = input;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        setInput(""); //mengosongkan input pertama
    }else if(count > 0){
      //mencari form yang menginputkan untuk ditampilkan di list item
      for (let index = 0; index < title.length; index++) {  
        inputsS.push(document.getElementById("input"+index).value);
        let inputDate = document.getElementById("inputDate"+index);
        let showDate = document.getElementById("showDate"+index);
        let dayslefts = document.getElementById("dayslefts"+index);
        if(document.getElementById("input"+index).value){
          if(inputDate.value){
            let lists = document.getElementById(index);
            li.innerHTML = inputsS[index];
            lists.appendChild(li); 
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.id = index;
            li.appendChild(span);
            document.getElementById("input"+index).style.display = "none";
            inputDate.style.position = "absolute";
            inputDate.style.marginTop = "-5.5%";
            let day = new Date(inputDate.value).getDate();
            let month = new Date(inputDate.value).getMonth();
            let year = new Date(inputDate.value).getFullYear();
            showDate.innerHTML = day+"/"+(month + 1)+"/"+year;
            if(new Date(inputDate.value).getDate() - new Date().getDate() <= 1){
              if(new Date(inputDate.value).getDate() - new Date().getDate() >= 0){
                dayslefts.innerHTML = (new Date(inputDate.value).getDate() - new Date().getDate()) + " day left";
              }
              else{
                alert("Masukkan tanggal dengan benar");
              }
            }
            else if(new Date(inputDate.value).getDate() - new Date().getDate() > 1){
              dayslefts.innerHTML = (new Date(inputDate.value).getDate() - new Date().getDate()) + " days left";
            }
            

          }else{
            alert("masukkan tanggal dengan benar!");
          }
          break;
        }else{
          alert("Masukkan Input!")
        }   
      }
    }
    else{
      alert("Masukkan Input!")
    }
    //menghapus list items/ todo items
    li.addEventListener("click", function(e){
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
      }
      else if(e.target.tagName === "SPAN"){
          if(e.target.id){
            e.target.parentElement.remove();
            document.getElementById("form"+e.target.id).style.display = "none";
          }else{
            e.target.parentElement.remove();
            document.getElementById("form").style.display = "none";
          }
      }
    }, false);
    //mengosongkan input setelah input pada form pertama
    for (let index = 0; index < title.length; index++) {
      const inpts = document.getElementById("input"+index);
      inpts.value = '';
    }
    //mengubah tanggal secara otomatis apabila input tanggal diubah
    for(let i = 0; i<count; i++){
      document.getElementById("inputDate"+i).addEventListener("change", function(){
        let tgl = document.getElementById("inputDate"+i).value;
        let day1 = new Date(tgl).getDate();
        let month1 = new Date(tgl).getMonth();
        let year1 = new Date(tgl).getFullYear();
        document.getElementById("showDate"+i).innerHTML = day1+"/"+(month1 + 1)+"/"+year1;
        let dayslefts = document.getElementById("dayslefts"+i);
        if(new Date(tgl).getDate() - new Date().getDate() <= 1){
          if(new Date(tgl).getDate() - new Date().getDate() >= 0){
            dayslefts.innerHTML = (new Date(tgl).getDate() - new Date().getDate()) + " day left";
          }
          else{
            alert("Masukkan tanggal dengan benar!");
          }
        }
        else if(new Date(tgl).getDate() - new Date().getDate() > 1){
          dayslefts.innerHTML = (new Date(tgl).getDate() - new Date().getDate()) + " days left";
        }
    })
    } 
  }
  // function save() {
  //   localStorage.setItem("data", document.getElementsByClassName("container").item);
  // }
  // function activate(){
  //   document.getElementById("testing").readOnly = false;
  // }
  const [count, setCount] = useState(0);
  let title = []; //membuat array
  //memasukkan form ke array
  for(let i=0; i<count; i++){
    title.push(<div><form id={"form"+i} style={{ marginTop: "6%" }} onSubmit={sendMessage}>
    <ul id={i}>
    </ul>
    <input type='text' id={"input"+i} placeholder='Type task title'
      style={{ marginRight: "30%", width: "60%", fontSize: "14px", padding: "5px"}}/>
      <span id={'dayslefts'+i} className='dayslefts'>
      </span> 
      <span id={"showDate"+i} className='showDates' style={{ fontSize: "12px", marginRight: "5%" }}>
      </span><br />
      <input id={"inputDate"+i} type='date' className='inputDateDll'/><br />
      <input className='description' placeholder='No description' /><br />
      <button id={'btn'+i} type='submit'>Add</button><br/>
      </form>
      </div>) 
  }
  return (
    <body>
    <div id='container' className='container'>
        <h2 style={{ textAlign: "center" }}>To-do List</h2>
        <div className='wrapper'>
          <form id='form' onSubmit={sendMessage}>
          <ul id='list'>
        </ul>
              <input style={{ marginRight: "30%", width: "60%", fontSize: "14px", padding: "5px"}} 
              id='input' placeholder='Type task title' value={input} onChange={(e)=>setInput(e.target.value)} />
              <span className='daysleft' style={{ fontSize: "12px", color: "red", marginRight: "5%" }}>{ callender==null ? "" : (new Date(callender).getDate() - now.getDate())
              <0 ? alert("Masukkan tanggal yang benar!") : new Date(callender).getDate() - now.getDate()>1 ? 
              new Date(callender).getDate() - now.getDate() +" Days Left" : 
              new Date(callender).getDate() - now.getDate() +" Day Left" }</span> 
              <span className='date' style={{ fontSize: "12px"}}>{callender==null ? "" : 
              new Date(callender).getDate()+"/"+(new Date().getMonth() + 1)
              +"/"+new Date(callender).getFullYear()}</span>
              <br />
              <input id='inputDate' className='inputDate' type='date' value={callender} onChange={(e)=>setCallender(e.target.value)} /><br />
              <input className='description' id='description' placeholder='No description' /><br />
              <button type='submit' id='add'>Add</button>
          </form>
          <div>
            {title}{/* memasukkan form tambahan ke input */} 
          </div>
          <button type='submit' onClick={() => setCount(count+1)}>Add new</button><br/>
        </div>
    </div>
    </body>
  )
}

export default Todo;
