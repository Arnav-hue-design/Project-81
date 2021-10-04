People_array = [];
function submit(){
    var display_people_array=[];
    for(var i=1;i<=4;i++){
        var name_people=document.getElementById("name_of_the_people_"+i).value;
        student_array.push(name_student);
    }
    var length_student_array=student_array.length;
    for (var j=0;j<=length_student_array;j++){
        display_student_array.push("<h4>name-"+student_array[j]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=student_array;
    var remove_comas=student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    var student_array_sorting=[];
    var length_student_array=student_array.length;
    for (var k=0;k<=length_student_array;k++){
        student_array_sorting.push("<h4>name-"+student_array[k]+"</h4>");
        var remove_comas=student_array_sorting.join(" ");
        document.getElementById("display_name_without_comas").innerHTML=remove_comas;
    }
}