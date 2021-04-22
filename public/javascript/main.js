

// Add element:
function create_element(todo_content, index){
    
    var li_tag = document.createElement("li");
    var div_tag = document.createElement("div");
    var input_tag = document.createElement("input");
    var label_tag = document.createElement("label");
    var button_tag = document.createElement("button");
    var span_tag_content = document.createElement("span");
    var span_tag_closeBt = document.createElement("span");

    li_tag.className = "list-group-item d-flex justify-content-between align-items-center";
    
    div_tag.className = "form-check";

    input_tag.className = "form-check-input";
    input_tag.type = "checkbox";
    input_tag.onclick = function(){toggleLineThrough(this);}

    label_tag.className = "form-check-label";
    label_tag.id = index + "-label";
    label_tag.htmlFor = index + "-label";

    span_tag_content.className = "";
    span_tag_content.innerHTML = todo_content;

    button_tag.className = "close";
    button_tag.type = "button";
    button_tag.setAttribute("aria-label", "close");
    button_tag.onclick = function(){remove(this);}

    span_tag_closeBt.setAttribute("aria-hidden", "true");
    span_tag_closeBt.innerHTML = "x";

    button_tag.appendChild(span_tag_closeBt);
    label_tag.appendChild(span_tag_content);
    div_tag.appendChild(input_tag);
    div_tag.appendChild(label_tag);

    li_tag.appendChild(div_tag);
    li_tag.appendChild(button_tag);

    var ul_list = document.getElementById("list-group-id");
    ul_list.appendChild(li_tag);
}


// Create Footer:
function create_footer(){

    var li_Number = document.createElement("li");
    var li_All = document.createElement("li");
    var li_Active = document.createElement("li");
    var li_Complete = document.createElement("li");
    var li_Clear_Complete = document.createElement("li");

    var span_Number = document.createElement("span");
    var a_All = document.createElement("a");
    var a_Active = document.createElement("a");
    var a_Compelte = document.createElement("a");
    var a_Clear_Complete = document.createElement("a");
    
    li_Number.className = "nav-item";
    li_Number.innerHTML = "itens left";

    li_All.className = "nav-item custom-hoverBorder";
    li_Active.className = "nav-item custom-hoverBorder";
    li_Complete.className = "nav-item custom-hoverBorder";
    li_Clear_Complete.className = "nav-item custom-hoverBorder";


    span_Number.className = "nav-link active custom-spanNumber";
    span_Number.id = "span-number";
    span_Number.innerHTML = "0";

    a_All.className = "nav-link active custom-pointer-event";
    a_All.innerHTML = "All";
    a_All.onclick = function(){filterAll();}

    a_Active.className = "nav-link active custom-pointer-event";
    a_Active.innerHTML = "Active";
    a_Active.onclick = function(){filterActive();}

    a_Compelte.className = "nav-link active custom-pointer-event";
    a_Compelte.innerHTML = "Complete";
    a_Compelte.onclick = function(){filterComplete();}

    a_Clear_Complete.className = "nav-link active custom-pointer-event";
    a_Clear_Complete.innerHTML = "Clear Complete";
    a_Clear_Complete.onclick = function(){filterClearAll();}

    li_Number.appendChild(span_Number);
    li_All.appendChild(a_All);
    li_Active.appendChild(a_Active);
    li_Complete.appendChild(a_Compelte);
    li_Clear_Complete.appendChild(a_Clear_Complete);

    var ul_list = document.getElementById("footer-group-id");

    ul_list.appendChild(li_Number);
    ul_list.appendChild(li_All);
    ul_list.appendChild(li_Active);
    ul_list.appendChild(li_Complete);
    ul_list.appendChild(li_Clear_Complete);
}

// Add itens in span:
function addItensLeft(){

    var tmp_span = document.getElementById("span-number");
    console.log(tmp_span);
    let value = parseInt(tmp_span.innerHTML,10)+1;
    tmp_span.innerHTML = value;
}

// remove itens from span:
function minustensLeft(){

    var tmp_span = document.getElementById("span-number");
    console.log(tmp_span);
    let value = parseInt(tmp_span.innerHTML,10)-1;
    tmp_span.innerHTML = value;
}

// Add element after insert text:
function putOnFocusOut(element){

    if(element.value == ""){return;}

    let tmp_length = document.getElementById("list-group-id").getElementsByTagName('li').length;
    if(tmp_length >= 1){
        create_element(element.value, tmp_length+1);
        addItensLeft();
    }
    else{
        create_element(element.value, tmp_length+1);
        create_footer();
        addItensLeft();
    }

    element.value = "";
}

// remove element:
function remove(element){

    element.parentNode.remove();
    minustensLeft();
    let tmp_length = document.getElementById("list-group-id").getElementsByTagName('li').length;

    if(tmp_length != 0){return;}

    let footer_ul = document.getElementById("footer-group-id");
    if(footer_ul){
        while (footer_ul.firstChild) {
            footer_ul.removeChild(footer_ul.firstChild);
        }
    }
  }

  function clean_footer(){
    let tmp_length = document.getElementById("list-group-id").getElementsByTagName('li').length;

    if(tmp_length != 0){return;}

    let footer_ul = document.getElementById("footer-group-id");
    if(footer_ul){
        while (footer_ul.firstChild) {
            footer_ul.removeChild(footer_ul.firstChild);
        }
    }
  }


// toggle line through:
function toggleLineThrough(element){
    var tmp = element.parentNode.getElementsByTagName('span')[0];
    if(tmp.classList.contains("custom-strikethrough")){
        addItensLeft();
    }
    else{
        minustensLeft();
    }
    tmp.classList.toggle("custom-strikethrough");
}


// filter 'all':
function filterAll(){
    let list_li = document.getElementById("list-group-id").getElementsByTagName('li');
    
    for(var index = 0; index < list_li.length; index++){
            list_li[index].classList.remove("d-none");
            list_li[index].classList.add("d-flex");
    }
}

// filter 'Active':
function filterActive(){
    let list_li = document.getElementById("list-group-id").getElementsByTagName('li');
    
    for(var index = 0; index < list_li.length; index++){

        let span_tag = list_li[index].getElementsByTagName('span')[0];

        if(span_tag.classList.contains("custom-strikethrough")){
            list_li[index].classList.add("d-none");
            list_li[index].classList.remove("d-flex");
        }
        else{
            list_li[index].classList.remove("d-none");
            list_li[index].classList.add("d-flex");
        }
    }
}

// filter 'Complete':
function filterComplete(){
    let list_li = document.getElementById("list-group-id").getElementsByTagName('li');

    for(var index = 0; index < list_li.length; index++){

        let span_tag = list_li[index].getElementsByTagName('span')[0];

        if(span_tag.classList.contains("custom-strikethrough")){
            list_li[index].classList.remove("d-none");
            list_li[index].classList.add("d-flex");
        }
        else{
            list_li[index].classList.add("d-none");
            list_li[index].classList.remove("d-flex");
        }
    }
}

// Clear All action:
function filterClearAll(){
    let list_li = document.getElementById("list-group-id").getElementsByTagName('li');
    var temp_array = [];
    for(var index = 0; index < list_li.length; index++){

        let span_tag = list_li[index].getElementsByTagName('span')[0];
        if(span_tag.classList.contains("custom-strikethrough")){
           temp_array.push(list_li[index]);
        }
    }
    for(var index2 = 0; index2 < temp_array.length; index2++){ temp_array[index2].remove();}
    clean_footer();
}