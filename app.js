async function saveData() {
    const name = document.getElementById('student_name').value;
    const massar = document.getElementById('massar_id').value;
    const arabic = document.getElementById('arabic_score').value;
    const math = document.getElementById('math_score').value;

    // إرسال البيانات
    const { data, error } = await supabase
        .from('students')
        .insert([{ 
            student_name: name, 
            massar_id: massar, 
            arabic_score: arabic, 
            math_score: math 
        }]);

    // إذا حدث خطأ، سيظهر لنا هنا
    if (error) {
        console.error("خطأ Supabase:", error);
        alert("خطأ: " + error.message);
    } else {
        alert("تم حفظ البيانات بنجاح!");
        // تفريغ الخانات
        document.getElementById('student_name').value = '';
        document.getElementById('massar_id').value = '';
        document.getElementById('arabic_score').value = '';
        document.getElementById('math_score').value = '';
    }
}
