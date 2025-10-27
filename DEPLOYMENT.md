# הוראות פריסה ל-GitHub Pages

## שלב 1: יצירת Repository ב-GitHub

1. עבור אל https://github.com/new
2. שם ה-Repository: `about-us-page` (או כל שם אחר)
3. תיאור (אופציונלי): "דף אודות - בינה מלאכותית בגובה העיניים"
4. בחר **Public** (נדרש ל-GitHub Pages חינם)
5. **אל תבחר** באף אחת מהאפשרויות הנוספות (README, .gitignore וכו')
6. לחץ על **Create repository**

## שלב 2: העלאת הקבצים מהטרמינל

פתח טרמינל והרץ את הפקודות הבאות:

```bash
# עבור לתיקיית הפרויקט
cd ~/dev/about-us-static

# אתחל Git repository
git init

# הוסף את כל הקבצים
git add .

# צור commit ראשון
git commit -m "Initial commit: Static about us page with Roei Adri"

# שנה את שם ה-branch ל-main
git branch -M main

# חבר את ה-repository המקומי ל-GitHub
# **החלף YOUR-USERNAME ו-YOUR-REPO-NAME בערכים שלך!**
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# העלה את הקבצים ל-GitHub
git push -u origin main
```

## שלב 3: הפעלת GitHub Pages

1. עבור לדף ה-Repository שלך ב-GitHub
2. לחץ על **Settings** (הגדרות) בתפריט העליון
3. בתפריט הצד השמאלי, לחץ על **Pages**
4. תחת **Source** (מקור), בחר:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. לחץ על **Save**
6. המתן 2-3 דקות לבניית האתר

## שלב 4: צפייה באתר

האתר שלך יהיה זמין בכתובת:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

לדוגמה, אם שם המשתמש שלך הוא `johndoe` ושם ה-repository הוא `about-us-page`, הכתובת תהיה:
```
https://johndoe.github.io/about-us-page/
```

## עדכון הדף בעתיד

כדי לעדכן את הדף אחרי שינויים:

```bash
# עבור לתיקיית הפרויקט
cd ~/dev/about-us-static

# הוסף את השינויים
git add .

# צור commit עם תיאור השינויים
git commit -m "תיאור השינוי שלך"

# העלה ל-GitHub
git push
```

אחרי כמה דקות השינויים יופיעו באתר החי.

## פתרון בעיות נפוצות

### שגיאת Jekyll: "Unknown tag 'static'"

אם תקבל שגיאה כזו ב-GitHub Actions, זה אומר ש-Jekyll מנסה לעבד את הקבצים. הפתרון:

**הקובץ `.nojekyll` כבר כלול בפרויקט!** זה אומר ל-GitHub Pages לא להשתמש ב-Jekyll ולשרת את הקבצים כמו שהם.

אם השגיאה עדיין מופיעה:
1. ודא שהקובץ `.nojekyll` הועלה ל-repository
2. הרץ:
```bash
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll to disable Jekyll processing"
git push
```

### שגיאת אימות ב-push

אם אתה מקבל שגיאת אימות, תצטרך ליצור Personal Access Token:

1. עבור אל https://github.com/settings/tokens
2. לחץ על **Generate new token** > **Generate new token (classic)**
3. תן לטוקן שם (למשל: "About Us Deploy")
4. בחר scope: **repo** (סמן את כל התיבות תחת repo)
5. לחץ **Generate token**
6. **העתק את הטוקן** (לא תוכל לראות אותו שוב!)
7. כשתתבקש להזין סיסמה ב-git push, הדבק את הטוקן במקום הסיסמה

### הדף לא מוצג נכון

- ודא שהקבצים נמצאים ב-root (/) ולא בתיקייה נוספת
- בדוק שה-branch הנכון נבחר ב-Settings > Pages
- נסה לרענן את הדף עם Ctrl+Shift+R (או Cmd+Shift+R ב-Mac)
- בדוק את לוג הבניה ב-Actions tab

### תמונות לא נטענות

- ודא שכל נתיבי התמונות הם יחסיים (לא מתחילים ב-/)
- בדוק שהתמונות נמצאות בתיקייה `images/`

## דומיין מותאם אישית (אופציונלי)

אם יש לך דומיין משלך:

1. עבור אל Settings > Pages
2. תחת **Custom domain**, הזן את הדומיין שלך
3. עקוב אחרי ההוראות להגדרת DNS

## תמיכה

לשאלות נוספות, עיין ב:
- [תיעוד GitHub Pages](https://docs.github.com/en/pages)
- [תיעוד Git](https://git-scm.com/doc)
