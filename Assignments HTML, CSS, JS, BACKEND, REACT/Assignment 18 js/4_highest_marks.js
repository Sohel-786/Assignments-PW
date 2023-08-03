let marks = [75,99,61,98,35];

function highest_finder(marks){
    let h_marks = marks[0];
    marks.forEach(el => {
        (el > h_marks) ? h_marks = el : null;
    });

    console.log(h_marks);
}

highest_finder(marks);
