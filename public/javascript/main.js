

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


//create_element("teste1", 0);
//create_element("teste2", 1);
//create_element("teste3", 2);

// Create Footer:
function create_footer(){

    var li_All = document.createElement("li");
    var li_Active = document.createElement("li");
    var li_Complete = document.createElement("li");
    var li_Clear_Complete = document.createElement("li");

    var a_All = document.createElement("a");
    var a_Active = document.createElement("a");
    var a_Compelte = document.createElement("a");
    var a_Clear_Complete = document.createElement("a");
    
    li_All.className = "nav-item custom-hoverBorder";
    li_Active.className = "nav-item custom-hoverBorder";
    li_Complete.className = "nav-item custom-hoverBorder";
    li_Clear_Complete.className = "nav-item custom-hoverBorder";

    a_All.className = "nav-link active custom-pointer-event";
    a_All.innerHTML = "All";

    a_Active.className = "nav-link active custom-pointer-event";
    a_Active.innerHTML = "Active";

    a_Compelte.className = "nav-link active custom-pointer-event";
    a_Compelte.innerHTML = "Complete";

    a_Clear_Complete.className = "nav-link active custom-pointer-event";
    a_Clear_Complete.innerHTML = "Clear Complete";

    li_All.appendChild(a_All);
    li_Active.appendChild(a_Active);
    li_Complete.appendChild(a_Compelte);
    li_Clear_Complete.appendChild(a_Clear_Complete);

    var ul_list = document.getElementById("footer-group-id");
    ul_list.appendChild(li_All);
    ul_list.appendChild(li_Active);
    ul_list.appendChild(li_Complete);
    ul_list.appendChild(li_Clear_Complete);
}

//create_footer();

// Add element after insert text:
function putOnFocusOut(element){

    if(element.value == ""){return;}

    let tmp_length = document.getElementById("list-group-id").getElementsByTagName('li').length;
    console.log(tmp_length);
    if(tmp_length >= 1){
        create_element(element.value, tmp_length+1);
    }
    else{
        create_element(element.value, tmp_length+1);
        create_footer();
    }
}

/* ===================== */

// remove element:
function remove(element){

    element.parentNode.remove();
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
    tmp.classList.toggle("custom-strikethrough");
}

// filter 'all':


// filter 'Active':


// filter 'Complete':


// Clear All action: