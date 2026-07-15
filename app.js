// استبدل ما بين القوسين بما نسخته
const supabaseUrl = 'ألصق_رابط_URL_هنا';
const supabaseKey = 'ألصق_مفتاح_anon_هنا';

// هذا السطر يقوم بالاتصال الفعلي
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

console.log("تم الاتصال بـ Supabase بنجاح!");
