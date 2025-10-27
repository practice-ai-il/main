# התחלה מהירה 🚀

## מה יש כאן?

דף סטטי מלא להצגת החברה "בינה מלאכותית בגובה העיניים" - **כולל רועי אדרי בסקשן "מי אנחנו"**.

## איך להעלות ל-GitHub Pages? (3 דקות!)

### 1️⃣ צור Repository חדש ב-GitHub
עבור אל: https://github.com/new
- שם: `about-us-page`
- סוג: **Public**
- **אל תבחר** README או .gitignore

### 2️⃣ העלה את הקבצים

```bash
cd ~/dev/about-us-static
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/about-us-page.git
git push -u origin main
```

**זכור להחליף `YOUR-USERNAME` בשם המשתמש שלך ב-GitHub!**

⚠️ **חשוב:** הקובץ `.nojekyll` כלול ומונע מ-Jekyll לעבד את הקבצים - זה נדרש כדי שהדף יעבוד!

### 3️⃣ הפעל GitHub Pages

1. עבור אל Settings > Pages
2. בחר Branch: **main**, Folder: **/ (root)**
3. שמור ⏰ המתן 2-3 דקות

### 4️⃣ גלוש לאתר שלך! 🎉

```
https://eye-level-ai.com/
```

**או** אם אתה משתמש ב-GitHub Pages ללא דומיין מותאם:
```
https://YOUR-USERNAME.github.io/about-us-page/
```

---

## מה נוסף?

✅ **רועי אדרי** - נוסף לסקשן "מי אנחנו" (4 חברי צוות סה"כ)
✅ **עיצוב רספונסיבי** - נראה מעולה בכל מכשיר
✅ **טופס יצירת קשר** - מחובר ל-Make.com webhook
✅ **אנימציות** - AOS (Animate On Scroll)
✅ **תמונות** - כל התמונות כלולות (חוץ מ-whatsapp-bot.jpeg)

---

## שאלות נפוצות

**❓ התמונה של רועי לא נטענת?**
התמונה מגיעה מ-URL חיצוני. אם אינה עובדת, הורד אותה והוסף ל-`images/team/roie.jpg` ושנה את ה-URL ב-`index.html`.

**❓ הטופס לא עובד?**
בדוק את קובץ `js/about-us.js` שורה 133 - ודא שה-webhook של Make.com תקין.

**❓ רוצה לשנות צבעים?**
פתח `css/about-us.css` ושנה את המשתנים תחת `:root`.

---

📚 **לתיעוד מלא:** קרא את `README.md`
📋 **הוראות פריסה מפורטות:** קרא את `DEPLOYMENT.md`
📝 **היסטוריית שינויים:** קרא את `CHANGELOG.md`
