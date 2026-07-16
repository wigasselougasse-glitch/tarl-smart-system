const SUPABASE_URL = 'https://cazzykxjlddvirploffn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_l3GVD4AEkg1oW9KZD70xew_doUtcZF9';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function saveData() {
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
