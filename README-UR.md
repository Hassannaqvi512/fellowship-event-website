# Fellowship / Event Website — مفت Starter Project

یہ HTML, CSS, JavaScript اور Node.js/Express Backend کے ساتھ ایک ابتدائی نمونہ ہے۔

## ضروری چیزیں
- کمپیوٹر یا لیپ ٹاپ
- Node.js (LTS) انسٹال
- VS Code اختیاری مگر مفید

## اپنے کمپیوٹر پر چلانے کا طریقہ
1. ZIP فائل Extract کریں۔
2. Node.js کی سرکاری ویب سائٹ https://nodejs.org/ سے LTS ورژن انسٹال کریں۔
3. اس فولڈر کو VS Code میں کھولیں۔
4. Terminal کھولیں اور یہ کمانڈ چلائیں:

   npm install

5. پھر چلائیں:

   npm start

6. براؤزر میں کھولیں: http://localhost:3000

## درخواستیں کہاں محفوظ ہوتی ہیں؟
فارم کی درخواستیں `data/applications.json` میں محفوظ ہوتی ہیں۔ یہ صرف مقامی ڈیمو کے لیے مناسب ہے، پروڈکشن ویب سائٹ کے لیے نہیں۔

## اہم سکیورٹی/پبلشنگ نوٹس
- یہ Starter Template ہے، مکمل production-ready سسٹم نہیں۔
- اصل ایونٹ کی تاریخ، مقام، اہلیت، فیس، فنڈنگ اور سیٹس کی معلومات شائع کرنے سے پہلے درست کریں۔
- ابھی لاگ اِن، محفوظ Admin Panel، ای میل نوٹیفکیشن، CAPTCHA، شرحِ درخواست کی حد، اور مستقل production database شامل نہیں۔
- عوامی ویب سائٹ پر JSON فائل میں درخواستیں محفوظ کرنا مناسب نہیں؛ deployment کے لیے PostgreSQL/Supabase جیسا ڈیٹا بیس اور مناسب access controls استعمال کریں۔
- `.gitignore` میں درخواستوں کی فائل شامل ہے؛ درخواستوں کا ذاتی ڈیٹا public repository میں commit نہ کریں۔
- فارم میں پاسپورٹ نمبر، شناختی کارڈ، بینک معلومات یا دیگر حساس ڈیٹا نہ لیں، جب تک محفوظ اور ضروری طریقہ تیار نہ ہو۔

## مفت میں آن لائن شائع کرنا
GitHub Pages صرف static HTML/CSS/JS کے لیے ہے، یہ Express backend نہیں چلاتا۔ Backend کے لیے ایسا hosting provider منتخب کریں جس کا موجودہ free tier Node.js اور مستقل database کی ضروریات پوری کرے۔ Free-tier حدود بدل سکتی ہیں؛ deployment سے پہلے ان کی تصدیق کریں۔

## اپنی برانڈنگ تبدیل کریں
`public/index.html` میں `Global Fellowship Hub`، تاریخ، مقام، نشستوں، پروگراموں اور رابطے کی معلومات کو اپنے اصل مواد سے بدلیں۔ رنگ `public/styles.css` کے شروع میں CSS variables میں تبدیل کیے جا سکتے ہیں۔
