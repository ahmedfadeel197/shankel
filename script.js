/**
 * ==============================================================================
 * الموقع الشخصي للمدرب والمستشار البرمجي: أحمد شنكل
 * الملف البرمجي الرئيسي: script.js (Vanilla JavaScript Only)
 * ==============================================================================
 * يحتوي هذا الملف على:
 * 1. مصفوفة بيانات الشروحات البرمجية (Tutorials Data) - قابلة للتعديل والإضافة بسهولة
 * 2. مصفوفة بيانات الكورسات التدريبية (Courses Data) - قابلة للتعديل والإضافة بسهولة
 * 3. نظام تصفية وعرض الشروحات برمجياً (Tutorials Rendering & Filtering)
 * 4. نظام عرض الكورسات التدريبية برمجياً (Courses Rendering)
 * 5. إدارة نافذة حجز الكورس (Course Booking Modal & Validation)
 * 6. إدارة نافذة معاينة الشرح (Tutorial Preview Modal)
 * 7. التحقق من نموذج حجز الاستشارة (Consultation Form Validation & Handling)
 * 8. نظام التنقل المتجاوب والشريط الثابت (Sticky Nav, Mobile Menu & ScrollSpy)
 * 9. نظام الإشعارات المنبثقة (Toast Notification System)
 * ==============================================================================
 */

'use strict';

/* ==========================================================================
   1. مصفوفة بيانات الشروحات البرمجية (Tutorials Data)
   يمكن لأحمد شنكل إضافة أو تعديل أي شرح من هنا مباشرة
   ========================================================================== */
const tutorialsData = [
  {
    id: 'tut-1',
    title: 'دليل احتراف CSS Grid و Flexbox لتصميم واجهات عصرية',
    category: 'web',
    categoryLabel: 'تطوير الويب',
    description: 'شرح عملي ومفصل لكيفية بناء تخطيطات معقدة ومتجاوبة بالكامل لجميع الشاشات باستخدام تقنيات CSS الحديثة ودون الحاجة لأي مكتبات خارجية.',
    thumbnail: 'assets/tutorial-web.svg',
    duration: '18 دقيقة قراءة وتطبيق',
    level: 'جميع المستويات',
    keyTakeaways: [
      'الفرق الجوهري بين 1D Flexbox و 2D CSS Grid',
      'بناء شبكات مرنة تتكيف مع الهواتف دون الحاجة لكتابة عشرات Media Queries',
      'أفضل ممارسات دعم الاتجاهين RTL و LTR بسلاسة'
    ],
    placeholderUrl: 'https://youtube.com/watch?v=placeholder-shankal-css-grid',
    publishDate: '2026'
  },
  {
    id: 'tut-2',
    title: 'جافاسكربت الحديثة ES6+ ومفاهيم البرمجة غير المتزامنة (Async / Await)',
    category: 'javascript',
    categoryLabel: 'جافاسكربت',
    description: 'فهم عميق لكيفية عمل Event Loop والـ Promises وكتابة كود جافاسكربت نظيف ومنظم للتعامل مع البيانات والطلبات الخارجية بكفاءة.',
    thumbnail: 'assets/tutorial-js.svg',
    duration: '25 دقيقة',
    level: 'متوسط',
    keyTakeaways: [
      'فهم Event Loop و Call Stack بدقة بدون تعقيد',
      'التحول من Callback Hell إلى Promises و Async/Await بأمان',
      'معالجة الأخطاء الاحترافية باستخدام try / catch / finally'
    ],
    placeholderUrl: 'https://youtube.com/watch?v=placeholder-shankal-async-js',
    publishDate: '2026'
  },
  {
    id: 'tut-3',
    title: 'إتقان سير عمل Git و GitHub وإدارة الفروع للمطورين',
    category: 'tools',
    categoryLabel: 'أدوات وممارسات',
    description: 'دليل عملي للمبرمجين لفهم استراتيجيات الفروع (Branching Strategies)، وحل تعارضات الدمج (Merge Conflicts)، والعمل الجماعي الاحترافي.',
    thumbnail: 'assets/tutorial-git.svg',
    duration: '15 دقيقة',
    level: 'مبتدئ إلى متوسط',
    keyTakeaways: [
      'الأوامر اليومية الأساسية التي لا غنى عنها لأي مطور محترف',
      'كيفية حل التعارضات Merge Conflicts بثقة دون فقدان الكود',
      'كتابة رسائل Commit واضحة وبناء سجل إصدارات منظم'
    ],
    placeholderUrl: 'https://youtube.com/watch?v=placeholder-shankal-git-workflow',
    publishDate: '2026'
  },
  {
    id: 'tut-4',
    title: 'بناء واستهلاك RESTful APIs وربط الواجهات الأمامية باحترافية',
    category: 'web',
    categoryLabel: 'تطوير الويب',
    description: 'تعلم أسرار الربط الفعال بين واجهة المستخدم وخوادم البيانات، واستخدام Fetch API وتطبيق معايير حماية البيانات والتعامل مع حالات التحميل والأخطاء.',
    thumbnail: 'assets/tutorial-api.svg',
    duration: '22 دقيقة',
    level: 'متوسط',
    keyTakeaways: [
      'فهم بروتوكول HTTP وأساليب الطلبات GET, POST, PUT, DELETE',
      'تنظيم دوال الاتصال في طبقة خدمات (Services Layer) نظيفة',
      'عرض حالات التحميل والخطأ للمستخدم بصورة سلسة وتفاعلية'
    ],
    placeholderUrl: 'https://youtube.com/watch?v=placeholder-shankal-rest-api',
    publishDate: '2026'
  }
];

/* ==========================================================================
   2. مصفوفة بيانات الكورسات التدريبية (Courses Data)
   يمكن لأحمد شنكل تعديل الأسعار، المواعيد، أو إضافة دورات جديدة هنا
   ========================================================================== */
const coursesData = [
  {
    id: 'course-frontend-pro',
    title: 'معسكر احتراف تطوير واجهات المستخدم (Front-End Pro)',
    level: 'مبتدئ إلى متقدم',
    levelClass: 'level-intermediate',
    description: 'برنامج تدريبي شامل يبدأ معك من أساسيات بناء الصفحات بـ HTML5 و CSS3 المعمقة، مروراً بجافاسكربت التفاعلية، وحتى بناء واجهات وتطبيقات حقيقية كاملة تدعم اللغة العربية RTL بأعلى معايير الجودة والأداء.',
    duration: '8 أسابيع (48 ساعة تدريبية تطبيقية)',
    price: '150 $ (أو ما يعادله)',
    format: 'جلسات مباشرة + تسجيلات دائمة + مراجعة مشاريع فردية',
    thumbnail: 'assets/course-frontend-pro.svg',
    badge: 'الأكثر طلباً'
  },
  {
    id: 'course-js-deep-dive',
    title: 'إتقان جافاسكربت المعمقة وأنماط التصميم (Deep JavaScript)',
    level: 'متوسط إلى متقدم',
    levelClass: 'level-advanced',
    description: 'كورس مخصص للمطورين الراغبين في فهم أسرار جافاسكربت الداخلية: الـ Prototypes، الـ Closures، نمط البرمجة الوظيفية والشيئية، وأنماط التصميم المعمارية (Design Patterns) لكتابة كود عالي الأداء وقابل للصيانة.',
    duration: '6 أسابيع (30 ساعة تدريبية)',
    price: '120 $ (أو ما يعادله)',
    format: 'ورش عمل تطبيقية مكثفة + تحديات أسبوعية',
    thumbnail: 'assets/course-js-deep.svg',
    badge: 'مستوى متقدم'
  },
  {
    id: 'course-fullstack-dev',
    title: 'معسكر بناء تطبيقات الويب المتكاملة (Full-Stack Masterclass)',
    level: 'متوسط',
    levelClass: 'level-beginner',
    description: 'رحلة متكاملة لربط مهارات الواجهات الأمامية بالخوادم وقواعد البيانات، تصميم الواجهات البرمجية REST APIs، مصادقة المستخدمين والحماية، ونشر التطبيقات السحابية على خوادم الإنتاج الحقيقية.',
    duration: '12 أسبوعاً (72 ساعة تدريبية)',
    price: '220 $ (أو ما يعادله)',
    format: 'مشروع تخرج متكامل + إرشاد مهني للتوظيف',
    thumbnail: 'assets/course-fullstack.svg',
    badge: 'شامل ومتكامل'
  }
];

/* ==========================================================================
   3. إدارة الحالة والمتغيرات العامة للنظام (State Management)
   ========================================================================== */
let activeTutorialFilter = 'all';
let currentlySelectedCourse = null;

/* ==========================================================================
   4. دوال مساعدة عامة (Utility Functions)
   ========================================================================== */

/**
 * حماية النصوص من هجمات XSS عند الإدراج في الـ DOM
 * @param {string} str 
 * @returns {string} Safe string
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email 
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(String(email).trim());
}

/**
 * التحقق من معقولية رقم الهاتف (أرقام، رمز دولي اختياري، طول ملائم)
 * @param {string} phone 
 * @returns {boolean}
 */
function isValidPhone(phone) {
  // يسمح بعلامة + والمسافات والشرطات، بشرط احتواء 8 إلى 16 رقماً فعلياً
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const phoneRegex = /^\+?[0-9]{8,16}$/;
  return phoneRegex.test(cleaned);
}

/**
 * إظهار رسالة إشعار منبثقة (Toast Notification)
 * @param {string} message 
 * @param {'success'|'error'|'info'} type 
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  let iconSVG = '';
  if (type === 'success') {
    iconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  } else if (type === 'error') {
    iconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  } else {
    iconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  }

  toast.innerHTML = `
    <span class="toast-icon">${iconSVG}</span>
    <span class="toast-msg">${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  // إخفاء وحذف التنبيه بعد 4 ثوانٍ
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 4000);
}

/* ==========================================================================
   5. عرض وتصفية الشروحات (Tutorials Module)
   ========================================================================== */

/**
 * استخراج التصنيفات المتاحة ديناميكياً وبناء أزرار التصفية
 */
function initTutorialFilters() {
  const filtersContainer = document.getElementById('tutorial-filters');
  if (!filtersContainer) return;

  // جمع التصنيفات الفريدة من مصفوفة البيانات
  const categoriesMap = new Map();
  categoriesMap.set('all', 'جميع الشروحات');

  tutorialsData.forEach(tut => {
    if (tut.category && tut.categoryLabel) {
      categoriesMap.set(tut.category, tut.categoryLabel);
    }
  });

  // بناء أزرار التصفية
  let buttonsHTML = '';
  categoriesMap.forEach((label, key) => {
    const isActive = key === activeTutorialFilter ? 'active' : '';
    buttonsHTML += `
      <button 
        type="button" 
        class="filter-btn ${isActive}" 
        data-filter="${escapeHTML(key)}"
        role="tab"
        aria-selected="${key === activeTutorialFilter ? 'true' : 'false'}"
      >
        ${escapeHTML(label)}
      </button>
    `;
  });

  filtersContainer.innerHTML = buttonsHTML;

  // ربط أحداث النقر على أزرار التصفية
  const buttons = filtersContainer.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (filter === activeTutorialFilter) return;

      activeTutorialFilter = filter;

      // تحديث مظهر الأزرار
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // إعادة عرض الشروحات بعد التصفية
      renderTutorials();
    });
  });
}

/**
 * تصيير بطاقات الشروحات في الصفحة حسب التصنيف المختار
 */
function renderTutorials() {
  const container = document.getElementById('tutorials-container');
  const emptyState = document.getElementById('tutorials-empty');
  if (!container) return;

  // تصفية المصفوفة
  const filtered = activeTutorialFilter === 'all'
    ? tutorialsData
    : tutorialsData.filter(t => t.category === activeTutorialFilter);

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // بناء بطاقات الشروحات
  let cardsHTML = '';
  filtered.forEach(tut => {
    cardsHTML += `
      <article class="tutorial-card" data-id="${escapeHTML(tut.id)}">
        <div class="tutorial-thumb-wrap">
          <img 
            src="${escapeHTML(tut.thumbnail)}" 
            alt="صورة الشرح: ${escapeHTML(tut.title)}" 
            class="tutorial-thumb"
            loading="lazy"
            width="600"
            height="360"
          >
          <span class="tutorial-category-badge">${escapeHTML(tut.categoryLabel)}</span>
        </div>
        <div class="tutorial-body">
          <h3 class="tutorial-title">${escapeHTML(tut.title)}</h3>
          <p class="tutorial-desc">${escapeHTML(tut.description)}</p>
          <div class="tutorial-footer">
            <span class="tutorial-meta">⏱️ ${escapeHTML(tut.duration)}</span>
            <button 
              type="button" 
              class="btn btn-sm btn-outline view-tutorial-btn"
              data-id="${escapeHTML(tut.id)}"
            >
              عرض الشرح
            </button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = cardsHTML;

  // ربط أحداث النقر على أزرار "عرض الشرح"
  const viewBtns = container.querySelectorAll('.view-tutorial-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tutId = btn.getAttribute('data-id');
      const tutorial = tutorialsData.find(t => t.id === tutId);
      if (tutorial) {
        openTutorialModal(tutorial);
      }
    });
  });
}

/**
 * فتح نافذة معاينة الشرح البرمجي
 * @param {object} tutorial 
 */
function openTutorialModal(tutorial) {
  const backdrop = document.getElementById('tutorial-modal-backdrop');
  const titleElem = document.getElementById('tutorial-modal-title');
  const bodyElem = document.getElementById('tutorial-modal-body');

  if (!backdrop || !titleElem || !bodyElem) return;

  titleElem.textContent = tutorial.title;

  let pointsList = '';
  if (tutorial.keyTakeaways && Array.isArray(tutorial.keyTakeaways)) {
    pointsList = tutorial.keyTakeaways.map(p => `<li>${escapeHTML(p)}</li>`).join('');
  }

  bodyElem.innerHTML = `
    <img 
      src="${escapeHTML(tutorial.thumbnail)}" 
      alt="${escapeHTML(tutorial.title)}" 
      class="tutorial-modal-thumb"
    >
    <div class="tutorial-modal-meta">
      <span class="badge-course-price">${escapeHTML(tutorial.categoryLabel)}</span>
      <span class="tutorial-meta">⏳ المدة التقديرية: ${escapeHTML(tutorial.duration)}</span>
      <span class="tutorial-meta">📊 المستوى: ${escapeHTML(tutorial.level)}</span>
    </div>
    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.25rem;">
      ${escapeHTML(tutorial.description)}
    </p>

    <div class="tutorial-modal-points">
      <h4>📌 أبرز المحاور والنقاط المستفادة:</h4>
      <ul>${pointsList}</ul>
    </div>

    <div class="modal-alert-info">
      <p>
        <strong>ملاحظة لأحمد شنكل:</strong> هذا الزر أدناه مرتبط برابط توضيحي تجريبي (Placeholder URL). يمكن تحديث الرابط الحقيقي الموجه للفيديو أو المقال من مصفوفة الشروحات في ملف <code>script.js</code>.
      </p>
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap;">
      <a 
        href="${escapeHTML(tutorial.placeholderUrl)}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn-primary"
      >
        <span>مشاهدة الشرح كاملاً (رابط تجريبي)</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
      <button type="button" class="btn btn-secondary close-tut-modal-action">
        إغلاق النافذة
      </button>
    </div>
  `;

  // ربط زر الإغلاق الداخلي
  const innerCloseBtn = bodyElem.querySelector('.close-tut-modal-action');
  if (innerCloseBtn) {
    innerCloseBtn.addEventListener('click', closeTutorialModal);
  }

  // إظهار المودال
  backdrop.classList.add('is-active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTutorialModal() {
  const backdrop = document.getElementById('tutorial-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-active');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   6. عرض الكورسات التدريبية (Courses Module)
   ========================================================================== */

/**
 * تصيير بطاقات الكورسات في الصفحة
 */
function renderCourses() {
  const container = document.getElementById('courses-container');
  if (!container) return;

  let coursesHTML = '';
  coursesData.forEach(course => {
    coursesHTML += `
      <article class="course-card" data-course-id="${escapeHTML(course.id)}">
        <div class="course-thumb-wrap">
          <img 
            src="${escapeHTML(course.thumbnail)}" 
            alt="غلاف كورس: ${escapeHTML(course.title)}" 
            class="course-thumb"
            loading="lazy"
            width="600"
            height="360"
          >
          <span class="course-level-badge ${escapeHTML(course.levelClass)}">
            <span class="status-indicator"></span>
            ${escapeHTML(course.level)}
          </span>
        </div>

        <div class="course-body">
          <h3 class="course-name">${escapeHTML(course.title)}</h3>
          <p class="course-desc">${escapeHTML(course.description)}</p>

          <div class="course-meta-list">
            <div class="course-meta-item">
              <span class="meta-icon">⏳</span>
              <span>${escapeHTML(course.duration)}</span>
            </div>
            <div class="course-meta-item">
              <span class="meta-icon">💻</span>
              <span>${escapeHTML(course.format)}</span>
            </div>
          </div>

          <div class="course-footer">
            <div class="course-price-wrap">
              <span class="price-label">تكلفة الاستثمار في الكورس:</span>
              <strong class="price-value">${escapeHTML(course.price)}</strong>
            </div>

            <button 
              type="button" 
              class="btn btn-primary book-course-trigger-btn"
              data-course-id="${escapeHTML(course.id)}"
            >
              <span>احجز الكورس</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = coursesHTML;

  // ربط أحداث النقر على أزرار "احجز الكورس"
  const bookBtns = container.querySelectorAll('.book-course-trigger-btn');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course-id');
      const course = coursesData.find(c => c.id === courseId);
      if (course) {
        openCourseBookingModal(course);
      }
    });
  });
}

/* ==========================================================================
   7. إدارة نافذة حجز الكورس (Course Booking Modal & Form)
   ========================================================================== */

/**
 * فتح نافذة حجز الكورس مع تعبئة بيانات الكورس المختار تلقائياً
 * @param {object} course 
 */
function openCourseBookingModal(course) {
  currentlySelectedCourse = course;

  const backdrop = document.getElementById('course-modal-backdrop');
  const titleDisplay = document.getElementById('book-course-display');
  const priceDisplay = document.getElementById('book-course-price-badge');
  const courseIdInput = document.getElementById('book-course-id');
  const courseTitleInput = document.getElementById('book-course-title');
  const bookingForm = document.getElementById('course-booking-form');
  const confirmationState = document.getElementById('book-confirmation-state');

  if (!backdrop) return;

  // ضبط بيانات الكورس في النموذج
  if (titleDisplay) titleDisplay.textContent = course.title;
  if (priceDisplay) priceDisplay.textContent = course.price;
  if (courseIdInput) courseIdInput.value = course.id;
  if (courseTitleInput) courseTitleInput.value = course.title;

  // إعادة ضبط النموذج وحالة التأكيد
  if (bookingForm) {
    bookingForm.reset();
    bookingForm.style.display = 'block';
    clearFormErrors(bookingForm);
  }
  if (confirmationState) {
    confirmationState.style.display = 'none';
  }

  // تفعيل المودال
  backdrop.classList.add('is-active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // التركيز على حقل الاسم تلقائياً لتسهيل الاستخدام
  setTimeout(() => {
    const nameInput = document.getElementById('book-name');
    if (nameInput) nameInput.focus();
  }, 100);
}

/**
 * إغلاق نافذة حجز الكورس
 */
function closeCourseBookingModal() {
  const backdrop = document.getElementById('course-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-active');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * تنظيف رسائل وأشكال الخطأ في أي نموذج
 * @param {HTMLFormElement} form 
 */
function clearFormErrors(form) {
  const errorContainers = form.querySelectorAll('.field-error');
  errorContainers.forEach(div => {
    div.textContent = '';
    div.classList.remove('is-visible');
  });

  const invalidInputs = form.querySelectorAll('.form-control.is-invalid');
  invalidInputs.forEach(input => {
    input.classList.remove('is-invalid');
  });
}

/**
 * عرض خطأ لحقل معين
 * @param {string} fieldId 
 * @param {string} errorId 
 * @param {string} message 
 */
function setFieldError(fieldId, errorId, message) {
  const input = document.getElementById(fieldId);
  const errorElem = document.getElementById(errorId);

  if (input) {
    input.classList.add('is-invalid');
  }
  if (errorElem) {
    errorElem.textContent = message;
    errorElem.classList.add('is-visible');
  }
}

/**
 * تهيئة نموذج حجز الكورس والتحقق من المدخلات
 */
function initCourseBookingForm() {
  const form = document.getElementById('course-booking-form');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const backdrop = document.getElementById('course-modal-backdrop');
  const finishConfirmBtn = document.getElementById('confirm-finish-btn');

  // أزرار الإغلاق
  if (closeBtn) closeBtn.addEventListener('click', closeCourseBookingModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeCourseBookingModal);
  if (finishConfirmBtn) finishConfirmBtn.addEventListener('click', closeCourseBookingModal);

  // إغلاق عند النقر على الخلفية المعتمة
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeCourseBookingModal();
      }
    });
  }

  // تنظيف الأخطاء عند الكتابة التفاعلية
  ['book-name', 'book-email', 'book-phone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        el.classList.remove('is-invalid');
        const err = document.getElementById(`${id}-error`);
        if (err) {
          err.textContent = '';
          err.classList.remove('is-visible');
        }
      });
    }
  });

  // معالجة الإرسال
  if (form) {
    form.addEventListener('submit', handleCourseBookingSubmit);
  }
}

/**
 * معالجة إرسال طلب حجز الكورس مع التحقق الكامل
 * @param {Event} e 
 */
function handleCourseBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;
  clearFormErrors(form);

  const nameVal = document.getElementById('book-name').value.trim();
  const emailVal = document.getElementById('book-email').value.trim();
  const phoneVal = document.getElementById('book-phone').value.trim();
  const notesVal = document.getElementById('book-notes').value.trim();
  const courseTitle = document.getElementById('book-course-title').value;

  let isValid = true;

  // 1. التحقق من الاسم الكامل
  if (!nameVal) {
    setFieldError('book-name', 'book-name-error', 'يرجى كتابة الاسم الكامل.');
    isValid = false;
  } else if (nameVal.length < 3) {
    setFieldError('book-name', 'book-name-error', 'يرجى كتابة اسم صحيح يتكون من 3 أحرف على الأقل.');
    isValid = false;
  }

  // 2. التحقق من البريد الإلكتروني
  if (!emailVal) {
    setFieldError('book-email', 'book-email-error', 'يرجى إدخال البريد الإلكتروني.');
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    setFieldError('book-email', 'book-email-error', 'صيغة البريد الإلكتروني غير صحيحة (مثال: name@example.com).');
    isValid = false;
  }

  // 3. التحقق من رقم الهاتف
  if (!phoneVal) {
    setFieldError('book-phone', 'book-phone-error', 'يرجى إدخال رقم الهاتف للتواصل.');
    isValid = false;
  } else if (!isValidPhone(phoneVal)) {
    setFieldError('book-phone', 'book-phone-error', 'يرجى إدخال رقم هاتف مناسب (مثال: 05XXXXXXXX أو +966...).');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // حالة المعالجة المؤقتة وتجنب التكرار
  const submitBtn = document.getElementById('book-submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');

  submitBtn.disabled = true;
  if (btnText) btnText.textContent = 'جارٍ تسجيل الطلب...';
  if (btnSpinner) btnSpinner.style.display = 'inline-block';

  // محاكاة استجابة المعالجة للواجهة الأمامية
  setTimeout(() => {
    submitBtn.disabled = false;
    if (btnText) btnText.textContent = 'تأكيد طلب الحجز';
    if (btnSpinner) btnSpinner.style.display = 'none';

    // حفظ الطلب محلياً في الـ localStorage لتمكين أحمد من مراجعة التجارب إن رغب
    const bookingRecord = {
      courseId: currentlySelectedCourse ? currentlySelectedCourse.id : '',
      courseTitle: courseTitle || (currentlySelectedCourse ? currentlySelectedCourse.title : ''),
      coursePrice: currentlySelectedCourse ? currentlySelectedCourse.price : '',
      fullName: nameVal,
      email: emailVal,
      phone: phoneVal,
      notes: notesVal,
      date: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ahmed_shankal_course_bookings') || '[]');
      existing.push(bookingRecord);
      localStorage.setItem('ahmed_shankal_course_bookings', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }

    // عرض شاشة التأكيد الجميلة داخل المودال
    displayCourseConfirmationState(bookingRecord);
    showToast('تم تسجيل طلب حجز الكورس بنجاح!', 'success');
  }, 600);
}

/**
 * عرض بطاقة ملخص الحجز داخل المودال
 * @param {object} record 
 */
function displayCourseConfirmationState(record) {
  const form = document.getElementById('course-booking-form');
  const confirmationState = document.getElementById('book-confirmation-state');
  const summaryBox = document.getElementById('booking-summary-content');

  if (form) form.style.display = 'none';
  if (confirmationState) confirmationState.style.display = 'block';

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="success-detail-row">
        <span class="success-detail-label">الكورس المطلوب:</span>
        <span class="success-detail-value">${escapeHTML(record.courseTitle)}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">التكلفة المحددة:</span>
        <span class="success-detail-value" style="color: var(--accent);">${escapeHTML(record.coursePrice)}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">الاسم:</span>
        <span class="success-detail-value">${escapeHTML(record.fullName)}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">البريد الإلكتروني:</span>
        <span class="success-detail-value" dir="ltr">${escapeHTML(record.email)}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">الهاتف:</span>
        <span class="success-detail-value" dir="ltr">${escapeHTML(record.phone)}</span>
      </div>
      ${record.notes ? `
        <div class="success-detail-row" style="flex-direction: column; gap: 0.25rem;">
          <span class="success-detail-label">ملاحظاتك:</span>
          <span class="success-detail-value" style="font-weight: normal; color: var(--text-secondary);">${escapeHTML(record.notes)}</span>
        </div>
      ` : ''}
    `;
  }
}

/* ==========================================================================
   8. نموذج حجز الاستشارة (Consultation Form Module)
   ========================================================================== */

function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const resetBtn = document.getElementById('consult-reset-btn');

  // تنظيف الأخطاء عند إدخال البيانات
  ['consult-name', 'consult-email', 'consult-phone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        el.classList.remove('is-invalid');
        const err = document.getElementById(`${id}-error`);
        if (err) {
          err.textContent = '';
          err.classList.remove('is-visible');
        }
      });
    }
  });

  if (form) {
    form.addEventListener('submit', handleConsultationSubmit);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const formCard = document.getElementById('consultation-form');
      const successBox = document.getElementById('consult-success');
      if (formCard) {
        formCard.reset();
        clearFormErrors(formCard);
        formCard.style.display = 'block';
      }
      if (successBox) {
        successBox.style.display = 'none';
      }
    });
  }
}

/**
 * معالجة إرسال طلب الاستشارة
 * @param {Event} e 
 */
function handleConsultationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  clearFormErrors(form);

  const nameInput = document.getElementById('consult-name');
  const emailInput = document.getElementById('consult-email');
  const phoneInput = document.getElementById('consult-phone');
  const typeInput = document.getElementById('consult-type');
  const detailsInput = document.getElementById('consult-details');

  const nameVal = nameInput ? nameInput.value.trim() : '';
  const emailVal = emailInput ? emailInput.value.trim() : '';
  const phoneVal = phoneInput ? phoneInput.value.trim() : '';
  const typeVal = typeInput ? typeInput.options[typeInput.selectedIndex].text : '';
  const detailsVal = detailsInput ? detailsInput.value.trim() : '';

  let isValid = true;

  // 1. التحقق من الاسم الكامل
  if (!nameVal) {
    setFieldError('consult-name', 'consult-name-error', 'يرجى كتابة الاسم الكامل.');
    isValid = false;
  } else if (nameVal.length < 3) {
    setFieldError('consult-name', 'consult-name-error', 'يرجى كتابة اسم صحيح يتكون من 3 أحرف على الأقل.');
    isValid = false;
  }

  // 2. التحقق من البريد الإلكتروني
  if (!emailVal) {
    setFieldError('consult-email', 'consult-email-error', 'يرجى إدخال البريد الإلكتروني.');
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    setFieldError('consult-email', 'consult-email-error', 'صيغة البريد الإلكتروني غير صحيحة (مثال: name@example.com).');
    isValid = false;
  }

  // 3. التحقق من رقم الهاتف
  if (!phoneVal) {
    setFieldError('consult-phone', 'consult-phone-error', 'يرجى إدخال رقم الهاتف.');
    isValid = false;
  } else if (!isValidPhone(phoneVal)) {
    setFieldError('consult-phone', 'consult-phone-error', 'يرجى إدخال رقم هاتف مناسب لتلقي الموعد.');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // حالة التحميل وتأمين الزر لمنع الإرسال المزدوج
  const submitBtn = document.getElementById('consult-submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');

  submitBtn.disabled = true;
  if (btnText) btnText.textContent = 'جارٍ إرسال الطلب...';
  if (btnSpinner) btnSpinner.style.display = 'inline-block';

  // محاكاة وقت الإرسال
  setTimeout(() => {
    submitBtn.disabled = false;
    if (btnText) btnText.textContent = 'إرسال طلب الاستشارة';
    if (btnSpinner) btnSpinner.style.display = 'none';

    // حفظ الطلب في التخزين المحلي كنسخة تجريبية
    const consultRecord = {
      fullName: nameVal,
      email: emailVal,
      phone: phoneVal,
      type: typeInput.value ? typeVal : 'استشارة عامة',
      details: detailsVal,
      date: new Date().toISOString()
    };

    try {
      const list = JSON.parse(localStorage.getItem('ahmed_shankal_consultations') || '[]');
      list.push(consultRecord);
      localStorage.setItem('ahmed_shankal_consultations', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // إخفاء النموذج وإظهار بطاقة النجاح
    form.style.display = 'none';
    const successBox = document.getElementById('consult-success');
    const summaryBox = document.getElementById('consult-success-summary');

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="success-detail-row">
          <span class="success-detail-label">الاسم:</span>
          <span class="success-detail-value">${escapeHTML(consultRecord.fullName)}</span>
        </div>
        <div class="success-detail-row">
          <span class="success-detail-label">البريد الإلكتروني:</span>
          <span class="success-detail-value" dir="ltr">${escapeHTML(consultRecord.email)}</span>
        </div>
        <div class="success-detail-row">
          <span class="success-detail-label">رقم الهاتف:</span>
          <span class="success-detail-value" dir="ltr">${escapeHTML(consultRecord.phone)}</span>
        </div>
        <div class="success-detail-row">
          <span class="success-detail-label">مجال الاستشارة:</span>
          <span class="success-detail-value">${escapeHTML(consultRecord.type)}</span>
        </div>
        ${consultRecord.details ? `
          <div class="success-detail-row" style="flex-direction: column; gap: 0.25rem;">
            <span class="success-detail-label">تفاصيل الموضوع:</span>
            <span class="success-detail-value" style="font-weight: normal; color: var(--text-secondary);">${escapeHTML(consultRecord.details)}</span>
          </div>
        ` : ''}
      `;
    }

    if (successBox) {
      successBox.style.display = 'block';
    }

    showToast('تم إرسال طلب الاستشارة بنجاح!', 'success');
  }, 600);
}

/* ==========================================================================
   9. التنقل المتجاوب والقائمة والشريط الثابت (Navigation & ScrollSpy)
   ========================================================================== */

function initNavigation() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 1. تأثير الظل على الشريط العلوي عند التمرير
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // 2. فتح وإغلاق القائمة في شاشات الجوال
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // إغلاق القائمة عند النقر على أي رابط تنقل
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // إغلاق القائمة عند النقر في الخارج
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target) && mainNav.classList.contains('is-open')) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    mainNav.classList.add('is-open');
    mobileToggle.classList.add('is-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'إغلاق القائمة الرئيسية');
  }

  function closeMobileNav() {
    mainNav.classList.remove('is-open');
    mobileToggle.classList.remove('is-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'فتح القائمة الرئيسية');
  }

  // 3. تمييز الرابط النشط تلقائياً بناءً على موضع التمرير (ScrollSpy)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const dataNav = link.getAttribute('data-nav');
            if (dataNav === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
}

/* ==========================================================================
   10. دعم التنقل عبر لوحة المفاتيح وإمكانية الوصول (Accessibility)
   ========================================================================== */

function initAccessibilityKeys() {
  // إغلاق النوافذ المنبثقة عند الضغط على زر Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const courseBackdrop = document.getElementById('course-modal-backdrop');
      if (courseBackdrop && courseBackdrop.classList.contains('is-active')) {
        closeCourseBookingModal();
      }

      const tutorialBackdrop = document.getElementById('tutorial-modal-backdrop');
      if (tutorialBackdrop && tutorialBackdrop.classList.contains('is-active')) {
        closeTutorialModal();
      }
    }
  });

  // ربط زر إغلاق نافذة الشرح
  const tutCloseBtn = document.getElementById('tutorial-modal-close-btn');
  const tutBackdrop = document.getElementById('tutorial-modal-backdrop');
  if (tutCloseBtn) tutCloseBtn.addEventListener('click', closeTutorialModal);
  if (tutBackdrop) {
    tutBackdrop.addEventListener('click', (e) => {
      if (e.target === tutBackdrop) closeTutorialModal();
    });
  }
}

/* ==========================================================================
   11. تحديث السنة تلقائياً في التذييل
   ========================================================================== */
function initFooterYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   12. التهيئة عند تحميل المستند (Document Ready)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. تهيئة الشروحات وعناصر التصفية
  initTutorialFilters();
  renderTutorials();

  // 2. تهيئة الكورسات التدريبية
  renderCourses();

  // 3. تهيئة نافذة حجز الكورس
  initCourseBookingForm();

  // 4. تهيئة نموذج حجز الاستشارة
  initConsultationForm();

  // 5. تهيئة شريط التنقل والقوائم
  initNavigation();

  // 6. تهيئة أزرار لوحة المفاتيح والوصول
  initAccessibilityKeys();

  // 7. ضبط سنة حقوق الملكية
  initFooterYear();
});
