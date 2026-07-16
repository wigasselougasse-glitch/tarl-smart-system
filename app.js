async function saveData() {
    alert("تم الضغط على الزر!"); // <-- هذا السطر سيخبرنا هل الكود يعمل أم لا

    const name = document.getElementById('student_name').value;
    const massar = document.getElementById('massar_id').value;
    const arabic = document.getElementById('arabic_score').value;
    const math = document.getElementById('math_score').value;

    const { data, error } = await supabase
        .from('students')
        .insert([{ 
            student_name: name, 
            massar_id: massar, 
            arabic_score: arabic, 
            math_score: math 
        }]);

    if (error) {
        alert("خطأ: " + error.message);
    } else {
        alert("تم حفظ البيانات بنجاح!");
        document.getElementById('student_name').value = '';
        document.getElementById('massar_id').value = '';
        document.getElementById('arabic_score').value = '';
        document.getElementById('math_score').value = '';
    }
}
