# דף אודות - בינה מלאכותית בגובה העיניים

דף אינטרנט סטטי להצגת החברה ושירותיה בתחום הבינה המלאכותית.

## מבנה הקבצים

```
about-us-static/
├── index.html          # קובץ ה-HTML הראשי
├── css/
│   └── about-us.css   # עיצוב הדף
├── js/
│   └── about-us.js    # פונקציונליות JavaScript
└── images/
    ├── team/          # תמונות חברי הצוות
    ├── news-logos/    # לוגואים של כלי תקשורת
    └── tech/          # תמונות טכנולוגיות ודוגמאות
```

## תכונות

- עיצוב רספונסיבי לכל המכשירים
- אנימציות חלקות עם AOS (Animate On Scroll)
- טופס יצירת קשר עם אינטגרציה ל-Make.com webhook
- סקשנים מפורטים:
  - Hero עם קריאה לפעולה
  - בעיות שהשירות פותר
  - פתרונות ויתרונות
  - תהליך העבודה
  - המלצות לקוחות
  - הצוות - כולל רועי אדרי
  - חזון החברה
  - סטטיסטיקות

## התקנה ב-GitHub Pages

### שלב 1: יצירת Repository חדש

1. היכנס ל-GitHub וצור repository חדש
2. קרא לו בשם שתרצה (למשל: `about-us-page`)
3. הגדר אותו כ-Public או Private (Public מומלץ ל-GitHub Pages)

### שלב 2: העלאת הקבצים

```bash
cd ~/dev/about-us-static
git init
git add .
git commit -m "Initial commit: Static about us page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### שלב 3: הפעלת GitHub Pages

1. עבור לעמוד ה-Repository ב-GitHub
2. לחץ על **Settings** (הגדרות)
3. בתפריט הצד, לחץ על **Pages**
4. תחת **Source**, בחר:
   - Branch: `main`
   - Folder: `/ (root)`
5. לחץ על **Save**

### שלב 4: גישה לדף

אחרי מספר דקות, הדף שלך יהיה זמין בכתובת:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## עריכת התוכן

### שינוי טקסטים
ערוך את `index.html` ושנה את התוכן הרצוי.

### שינוי עיצוב
ערוך את `css/about-us.css` לשינוי צבעים, גופנים וסגנונות.

### שינוי פונקציונליות
ערוך את `js/about-us.js` לשינוי התנהגות הדף.

### החלפת תמונות
1. העתק תמונות חדשות לתיקייה המתאימה תחת `images/`
2. עדכן את נתיבי התמונות ב-`index.html`

**שים לב:** הקובץ `whatsapp-bot.jpeg` אינו קיים בתיקייה. אם אתה רוצה להוסיף תמונה זו:
1. הוסף את הקובץ `whatsapp-bot.jpeg` לתיקייה `images/tech/`
2. התמונה תוצג אוטומטית בסקשן "צ'אט בוטים חכמים ללקוחות"

## התאמה אישית

### שינוי Webhook של הטופס

בקובץ `js/about-us.js`, שורה 133, שנה את ה-URL:
```javascript
const response = await fetch('YOUR-WEBHOOK-URL', {
```

### שינוי צבעי ערכת הנושא

בקובץ `css/about-us.css`, בראש הקובץ תחת `:root`, שנה את המשתנים:
```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #06B6D4;
    --accent-color: #F59E0B;
    /* ... */
}
```

## תמיכה בדפדפנים

הדף תומך בכל הדפדפנים המודרניים:
- Chrome/Edge (גרסה אחרונה)
- Firefox (גרסה אחרונה)
- Safari (גרסה אחרונה)
- ניידים (iOS Safari, Chrome Android)

## רישיון

© 2025 בינה מלאכותית בגובה העיניים - כל הזכויות שמורות

## יצירת קשר

לשאלות ובעיות טכניות, פנה למפתח המקורי.
