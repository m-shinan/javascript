function grade(){
    var writtenTest=prompt("Enter your written test score");
    var labExam=prompt("Enter your lab test score");
    var assignments=prompt("Enter your assignments score");

    var totalGrade=((writtenTest*70)/100)+((labExam*20)/100)+((assignments*10)/100);

    document.write("Total grade of the student is "+totalGrade+"%");

}
grade();