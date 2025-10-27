# רשימת שינויים

## [2.0.0] - 2025-10-27 - אופטימיזציית SEO מלאה 🎯

**דירוג SEO: A+ | מוכן לפרודקשן | eye-level-ai.com**

### נוסף - SEO Best Practices
- **Meta Tags מתקדמים**:
  - Primary meta tags (title, description, keywords, robots)
  - Open Graph tags מלאים (Facebook/LinkedIn)
  - Twitter Cards (summary_large_image)
  - Canonical URL ו-hreflang
  - Favicon links (32x32, 16x16, apple-touch-icon)

- **Schema.org Structured Data**:
  - Organization schema עם 4 מייסדים
  - Service schema עם קטלוג שירותים
  - WebPage schema עם breadcrumbs
  - JSON-LD format תקני

- **קבצי SEO טכניים**:
  - `sitemap.xml` - מפת אתר מלאה כולל תמונות
  - `robots.txt` - הנחיות מפורטות לרובוטים
  - `SEO_GUIDE.md` - מדריך SEO מקיף

- **Semantic HTML ו-Accessibility**:
  - תגי `<header>`, `<main>`, `<section>` עם role attributes
  - Skip to main content link
  - ARIA labels לכל הסקשנים
  - Screen reader only content (.sr-only class)

- **אופטימיזציית תמונות**:
  - Alt texts מפורטים לכל התמונות
  - Lazy loading (`loading="lazy"`)
  - Width & Height attributes למניעת layout shift
  - תגי `<figure>` ו-`<figcaption>` סמנטיים

- **Performance Optimization**:
  - Preconnect לדומיינים חיצוניים
  - Resource hints
  - Optimized loading strategy

### שונה
- כותרת הדף: "בינה מלאכותית בגובה העיניים | פתרונות AI מתקדמים לעסקים בישראל"
- Meta description משכנעת ואופטימלית (160 תווים)
- Structure נכון של H1-H6
- כל ה-URLs עודכנו ל-`eye-level-ai.com`
- CNAME קיים עם הדומיין הנכון

### תיעוד נוסף
- `FINAL_SEO_SUMMARY.md` - סיכום מקיף של כל האופטימיזציות
- `SEO_GUIDE.md` - מדריך SEO מפורט
- Checklist מלא לפני העלאה

## [1.1.1] - 2025-10-27

### תוקן
- הוספת קובץ `.nojekyll` למניעת עיבוד Jekyll ב-GitHub Pages
- תיקון CHANGELOG.md - הסרת תגי Django שגרמו לשגיאות Jekyll
- עדכון `.gitignore` עם חריגות Jekyll

## [1.1.0] - 2025-10-27

### שונה
- **תפקיד יובל ביאליק**: שונה מ-"מייסד ומנכ"ל משותף" ל-"מייסד שותף ואחראי פיתוח עסקי"
- **תצוגת הצוות**: כל 4 חברי הצוות מוצגים כעת בשורה אחת במסכים גדולים
  - במובייל (768px ומטה): 2 בשורה
  - במובייל קטן (480px ומטה): 1 בשורה
- עדכון CSS עבור grid של הצוות: `grid-template-columns: repeat(4, 1fr)`

## [1.0.0] - 2025-10-27

### נוסף
- הוספת רועי אדרי לסקשן "מי אנחנו"
  - תמונה מ-URL חיצוני: https://i.ibb.co/Gv5ssYvy/roie.jpg
  - תפקיד: מנכ״ל החברה ואחראי טכנולוגיה
  - תיאור מפורט של התפקיד והאחריות

- יצירת גרסה סטטית של הדף
  - הסרת כל תגי Django (static tags ועוד)
  - נתיבים יחסיים לכל הקבצים
  - מוכן להעלאה ל-GitHub Pages

- תיקיית `about-us-static` ב-`~/dev/`
  - מבנה מאורגן: css/, js/, images/
  - כל הקבצים הסטטיים מועתקים

- קבצי תיעוד:
  - README.md עם הוראות שימוש והתקנה
  - DEPLOYMENT.md עם הוראות פריסה מפורטות ל-GitHub Pages
  - CHANGELOG.md (קובץ זה)
  - .gitignore עם חריגות נפוצות

### שונה
- עיצוב הצוות תומך כעת ב-4 חברי צוות במקום 3
- הגריד מתאים אוטומטית למספר החברים

### הערות
- תמונת whatsapp-bot.jpeg לא נכללה - יש להוסיף ידנית אם נדרש
- כל התמונות האחרות מועתקות ופועלות
