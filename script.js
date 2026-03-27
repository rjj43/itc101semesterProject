const emails = [
  // ── PHISHING EMAILS (7) ──────────────────────────────────────

  // 1. Angler Phishing (fake social media support)
  {
    type: "email",
    from: `Domino's Support <span class="hoverable" data-tooltip="@Domin0s_Supp0rt">@DominosSupport</span>`,
    subject: "Re: Your recent order complaint 🍕",
    body: `<p>Hi there! We're so sorry to hear about your experience with your recent order. 😔</p>
      <p>We'd love to make this right! To process your <b>full refund + a free pizza coupon</b>, we just need to verify your account.</p>
      <p>Please fill out our quick refund form here:<br>
      <a class="hoverable" data-tooltip="http://domin0s-refunds.pizzahelp.ru/claim" href="#">dominospizza.com/refund-claim</a></p>
      <p>We'll have your refund processed within 24 hours! 🎉</p>
      <p class="sig">— Domino's Customer Care Team</p>`,
    answer: "phishing",
    explanation: "Angler Phishing — This mimics a brand's social media support account. The handle uses zeros instead of O's (@Domin0s_Supp0rt) and the refund link points to a suspicious .ru domain, not the real Domino's site.",
    attachment: null
  },

  // 2. Smishing (SMS phishing)
  {
    type: "sms",
    smsFrom: "734-555-0192",
    smsTime: "10:43 AM",
    body: `<p><b>AMEX ALERT:</b> Unusual activity detected on your card ending in 4021. Your account has been temporarily limited.</p>
      <p>Verify your identity immediately to restore access:<br>
      <a class="hoverable" data-tooltip="http://amex-secure-verify.web-login.cc/auth" href="#">amex.com/verify-account</a></p>
      <p style="opacity:0.6; font-size:0.85em;">Reply STOP to unsubscribe</p>`,
    answer: "phishing",
    explanation: "Smishing — This is a phishing text message (SMS). The sender is not an official AmEx number, and the verification link goes to 'web-login.cc' — not the real American Express domain. Legitimate banks never ask you to verify via text links.",
    attachment: null
  },

  // 3. Man-in-the-Middle (MiTM) attack
  {
    type: "email",
    from: `Equifax Security <span class="hoverable" data-tooltip="security@equifax-alerts.net">&lt;security@equifax.com&gt;</span>`,
    subject: "Action Required: Update your Equifax app now",
    body: `<p>Dear Valued Customer,</p>
      <p>We've released a critical security patch for the Equifax mobile app. To protect your credit data, please update immediately.</p>
      <p><b>Download the update here:</b><br>
      <a class="hoverable" data-tooltip="http://equifax-app-update.net/download.apk" href="#">Download Equifax App v3.8.1 (Secure Update)</a></p>
      <p>⚠️ Failing to update may expose your account to unauthorized access.</p>
      <p class="sig">Equifax Security Team</p>`,
    answer: "phishing",
    explanation: "Man-in-the-Middle (MiTM) — The email tricks you into downloading an app over insecure HTTP from a non-official domain. This fake update could intercept your data in transit. Real app updates come from official app stores, not email links.",
    attachment: null
  },

  // 4. Website Spoofing
  {
    type: "website",
    browserUrl: "http://www.amaz0n-verify.com/ap/signin",
    browserTitle: "Amazon Sign-In",
    body: `<div class="web-page">
      <div class="web-logo" style="color:#ff9900; font-size:1.6rem; font-weight:700; margin-bottom:16px;">amazon<span style="color:#ff9900;">.com</span></div>
      <div class="web-form-box">
        <h3 style="font-size:1.1rem; margin-bottom:14px; color:#d8dce6;">Sign in</h3>
        <label class="web-label">Email or mobile phone number</label>
        <div class="web-input">you@email.com</div>
        <label class="web-label">Password</label>
        <div class="web-input web-input-pw">••••••••</div>
        <div class="web-btn-primary">Sign in</div>
        <p style="font-size:0.78rem; color:#6272a4; margin-top:12px;">By continuing, you agree to Amazon's <a href="#" style="color:#0a84ff;">Conditions of Use</a> and <a href="#" style="color:#0a84ff;">Privacy Notice</a>.</p>
      </div>
      <p style="font-size:0.8rem; color:#6272a4; margin-top:16px; text-align:center;">New to Amazon? <a href="#" style="color:#0a84ff;">Create your Amazon account</a></p>
    </div>`,
    answer: "phishing",
    explanation: "Website Spoofing — This looks like an Amazon login page, but check the URL bar: it says 'amaz0n-verify.com' (with a zero instead of an 'o') and uses HTTP instead of HTTPS. The real Amazon sign-in is at amazon.com with a secure HTTPS connection.",
    attachment: null
  },

  // 5. Domain Spoofing
  {
    type: "email",
    from: `LinkedIn <span class="hoverable" data-tooltip="notifications@linkedln-mail.com">&lt;notifications@linkedin.com&gt;</span>`,
    subject: "You appeared in 12 searches this week",
    body: `<p>Hi there,</p>
      <p>Your profile has been viewed by recruiters from <b>Google</b>, <b>Apple</b>, and <b>Microsoft</b> this week!</p>
      <p>See who's looking at your profile:</p>
      <p><a class="hoverable" data-tooltip="http://linkedln-mail.com/profile-views" href="#">View your profile visitors on LinkedIn</a></p>
      <p>Upgrade to Premium to unlock all viewer details.</p>
      <p class="sig">The LinkedIn Team</p>`,
    answer: "phishing",
    explanation: "Domain Spoofing — The sender domain is 'linkedln-mail.com' (with an L instead of an I in 'linkedin'). The link also goes to this fraudulent domain. Attackers register domains that look nearly identical to real ones to steal your credentials.",
    attachment: null
  },

  // 6. Image Phishing
  {
    type: "email",
    from: `FedEx Delivery <span class="hoverable" data-tooltip="tracking@fedex-notifications.info">&lt;tracking@fedex.com&gt;</span>`,
    subject: "Your package delivery – Shipping label attached",
    body: `<p>Dear Customer,</p>
      <p>Your package is on its way! Please review the attached shipping label to confirm your delivery details.</p>
      <p>Click the image below to view your full tracking information:</p>
      <div class="fake-image hoverable" data-tooltip="shipping_label_preview.png">
        <div class="image-icon">📦</div>
        <div>shipping_label_preview.png</div>
        <div class="image-sub">Click to view full size</div>
      </div>
      <p class="sig">FedEx Automated Notifications</p>`,
    answer: "phishing",
    explanation: "Image Phishing — The 'shipping label' image has embedded malicious code. Clicking it would execute JavaScript that downloads malware. Legitimate delivery services link to their official tracking page — they don't send clickable image files via email.",
    attachment: { name: "ShippingLabel_Details.png.exe", tooltip: "ShippingLabel_Details.png.exe" }
  },

  // 7. Search Engine Phishing
  {
    type: "website",
    browserUrl: "http://best-deals-finder.biz/product/ps5-pro-bundle",
    browserTitle: "PS5 Pro Bundle – Best Deals Finder",
    body: `<div class="web-page">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div style="font-weight:700; font-size:1.1rem; color:#8be9fd;">BestDealsFinder</div>
        <div style="font-size:0.78rem; color:#50fa7b;">✓ Verified Seller</div>
      </div>
      <div class="web-divider"></div>
      <div style="display:flex; gap:18px; margin-top:14px;">
        <div class="web-product-img">📦<br><span style="font-size:0.7rem; color:#6272a4;">Product Image</span></div>
        <div style="flex:1;">
          <h3 style="font-size:1.05rem; margin-bottom:6px; color:#d8dce6;">Sony PS5 Pro + 2 Controllers + 5 Games</h3>
          <div style="margin-bottom:8px;"><span style="text-decoration:line-through; color:#6272a4;">$849.99</span> <span style="color:#50fa7b; font-weight:700; font-size:1.2rem;">$149.99</span> <span style="background:rgba(255,85,85,0.15); color:#ff5555; font-size:0.75rem; padding:2px 6px; border-radius:3px; font-weight:600;">94% OFF</span></div>
          <p style="font-size:0.82rem; color:#ff5555; font-weight:600;">⏰ Only 3 remaining at this price!</p>
          <p style="font-size:0.82rem; color:#8892a4; margin-top:6px;">Free shipping · 30-day returns</p>
        </div>
      </div>
      <div class="web-divider" style="margin:14px 0;"></div>
      <label class="web-label">Full Name</label>
      <div class="web-input">Enter your full name</div>
      <label class="web-label">Credit Card Number</label>
      <div class="web-input">XXXX-XXXX-XXXX-XXXX</div>
      <div style="display:flex; gap:10px;">
        <div style="flex:1;"><label class="web-label">Expiry</label><div class="web-input">MM/YY</div></div>
        <div style="flex:1;"><label class="web-label">CVV</label><div class="web-input">•••</div></div>
      </div>
      <div class="web-btn-primary" style="background:#50fa7b; color:#0f1117; margin-top:12px;">Buy Now – $149.99</div>
      <p style="font-size:0.72rem; color:#6272a4; margin-top:10px; text-align:center;">🔒 Secure Checkout · 256-bit encryption</p>
    </div>`,
    answer: "phishing",
    explanation: "Search Engine Phishing — This fake product page appeared in search results. The URL is 'best-deals-finder.biz' — an unknown domain, not a real retailer. A PS5 Pro bundle for $149 (94% off) is unrealistically cheap, and the page asks for credit card info directly instead of using a known payment processor.",
    attachment: null
  },

  // ── LEGITIMATE EMAILS (3) ──────────────────────────────────

  // 8. Legit – BYU email
  {
    type: "email",
    from: `BYU Financial Services <span class="hoverable" data-tooltip="financialservices@byu.edu">&lt;financialservices@byu.edu&gt;</span>`,
    subject: "Fall 2026 Tuition Statement Available",
    body: `<p>Dear Student,</p>
      <p>Your tuition statement for <b>Fall Semester 2026</b> is now available. You can view your account balance and payment options through your MyBYU portal.</p>
      <p><a class="hoverable" data-tooltip="https://my.byu.edu/financial/statement" href="#">View your statement on MyBYU</a></p>
      <p>Payment is due by <b>September 12, 2026</b>. If you have questions, contact Financial Services at (801) 422-2507 or visit us in B-34 ASB.</p>
      <p class="sig">BYU Financial Services<br>Brigham Young University<br>Provo, UT 84602</p>`,
    answer: "legit",
    explanation: "Legitimate — This is a real BYU email. The sender is from the official @byu.edu domain, the link goes to the real my.byu.edu portal over HTTPS, and it provides a verifiable phone number and physical office location.",
    attachment: null
  },

  // 9. Legit – well-known company promotion
  {
    type: "email",
    from: `Costco Wholesale <span class="hoverable" data-tooltip="offers@costco.com">&lt;offers@costco.com&gt;</span>`,
    subject: "This week's member-only savings — up to 30% off",
    body: `<p>Hi Member,</p>
      <p>Here are this week's exclusive savings for Costco members:</p>
      <ul>
        <li>Kirkland Signature Olive Oil, 2L — <b>$12.99</b> (save $4)</li>
        <li>Samsung 65" 4K Smart TV — <b>$479.99</b> (save $120)</li>
        <li>Michelin All-Season Tires (set of 4) — <b>$599.99</b> (save $180)</li>
      </ul>
      <p><a class="hoverable" data-tooltip="https://www.costco.com/weekly-deals.html" href="#">See all member deals at Costco.com</a></p>
      <p style="font-size:0.85em;color:#888;">You're receiving this because you opted in to Costco promotional emails. <a class="hoverable" data-tooltip="https://www.costco.com/email-preferences.html" href="#">Unsubscribe</a></p>
      <p class="sig">Costco Wholesale Corporation</p>`,
    answer: "legit",
    explanation: "Legitimate — This is a real Costco promotion. The sender uses the official @costco.com domain, all links point to costco.com over HTTPS, the discounts are reasonable, and there's a proper unsubscribe link.",
    attachment: null
  },

  // 10. Legit – generic spam (annoying but not malicious)
  {
    type: "email",
    from: `SurveyRewardz <span class="hoverable" data-tooltip="no-reply@surveyrewardz.com">&lt;no-reply@surveyrewardz.com&gt;</span>`,
    subject: "Complete a 5-min survey & earn a $5 gift card!",
    body: `<p>Hi there!</p>
      <p>We'd love your feedback! Take a quick 5-minute survey about your shopping habits and receive a <b>$5 Amazon gift card</b> as a thank-you.</p>
      <p><a class="hoverable" data-tooltip="https://www.surveyrewardz.com/survey/2026-spring?ref=email" href="#">Start the survey</a></p>
      <p style="font-size:0.85em; color:#888;">You signed up for SurveyRewardz on 03/14/2025. <a class="hoverable" data-tooltip="https://www.surveyrewardz.com/unsubscribe" href="#">Unsubscribe</a> | <a class="hoverable" data-tooltip="https://www.surveyrewardz.com/privacy" href="#">Privacy Policy</a></p>
      <p class="sig">SurveyRewardz Inc.<br>440 N Wolfe Rd, Sunnyvale, CA 94085</p>`,
    answer: "legit",
    explanation: "Legitimate (spam but not malicious) — While this is unsolicited marketing, it's not phishing. The links all go to the real surveyrewardz.com domain over HTTPS, the reward is modest ($5, not $500), and it includes a physical address and unsubscribe option.",
    attachment: null
  }
];

// Shuffle
emails.sort(() => Math.random() - 0.5);

let currentIndex = 0;
let currentEmail;
let score = 0;
let total = 0;
let answered = false;

function updateProgress() {
  const pct = ((currentIndex) / emails.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("question-val").textContent =
    `${Math.min(currentIndex + 1, emails.length)} / ${emails.length}`;
}

function showEmail() {
  if (currentIndex >= emails.length) {
    showGameOver();
    return;
  }

  answered = false;
  document.getElementById("btn-legit").disabled = false;
  document.getElementById("btn-phishing").disabled = false;
  document.getElementById("btn-legit").classList.remove("selected", "correct-choice", "wrong-choice");
  document.getElementById("btn-phishing").classList.remove("selected", "correct-choice", "wrong-choice");

  currentEmail = emails[currentIndex];

  const emailEl = document.getElementById("email");

  if (currentEmail.type === "sms") {
    emailEl.className = "sms-mode";
    emailEl.innerHTML = `
      <div class="sms-phone">
        <div class="sms-status-bar">
          <span>9:41</span>
          <span class="sms-carrier">LTE 📶</span>
        </div>
        <div class="sms-header-bar">
          <span class="sms-back">‹</span>
          <div class="sms-contact">
            <div class="sms-avatar">?</div>
            <div class="sms-number">${currentEmail.smsFrom}</div>
          </div>
          <span class="sms-info">ⓘ</span>
        </div>
        <div class="sms-thread">
          <div class="sms-time-label">Today ${currentEmail.smsTime}</div>
          <div class="sms-bubble-incoming">
            <div id="body">${currentEmail.body}</div>
          </div>
        </div>
        <div class="sms-input-bar">
          <div class="sms-input-field">Text Message</div>
          <div class="sms-send">↑</div>
        </div>
      </div>`;
  } else if (currentEmail.type === "website") {
    emailEl.className = "website-mode";
    emailEl.innerHTML = `
      <div class="browser-frame">
        <div class="browser-toolbar">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="browser-nav">
            <span class="nav-btn">◀</span>
            <span class="nav-btn">▶</span>
            <span class="nav-btn">⟳</span>
          </div>
          <div class="browser-url-bar">
            <span class="url-lock">${currentEmail.browserUrl.startsWith('https') ? '🔒' : '⚠️'}</span>
            <span class="url-text">${currentEmail.browserUrl}</span>
          </div>
          <div class="browser-menu">⋯</div>
        </div>
        <div class="browser-tab-bar">
          <div class="browser-tab active-tab">${currentEmail.browserTitle}</div>
        </div>
        <div class="browser-content">
          <div id="body">${currentEmail.body}</div>
        </div>
      </div>`;
  } else {
    emailEl.className = "";
    emailEl.innerHTML = `
      <div class="email-header">
        <div class="email-meta">
          <p class="email-field"><span class="label">From:</span> <span id="from"></span></p>
          <p class="email-field"><span class="label">To:</span> <span id="to">you@email.com</span></p>
          <p class="email-field"><span class="label">Subject:</span> <span id="subject"></span></p>
        </div>
      </div>
      <div class="email-divider"></div>
      <div id="body"></div>
      <div id="attachment-area"></div>`;

    document.getElementById("from").innerHTML = currentEmail.from;
    document.getElementById("subject").textContent = currentEmail.subject;
    document.getElementById("body").innerHTML = currentEmail.body;

    // Attachments
    const attachArea = document.getElementById("attachment-area");
    if (currentEmail.attachment) {
      attachArea.innerHTML = `
        <div class="attachment hoverable" data-tooltip="${currentEmail.attachment.tooltip}">
          <span class="attach-icon">📎</span>
          <span>${currentEmail.attachment.name}</span>
        </div>`;
      attachArea.style.display = "block";
    } else {
      attachArea.innerHTML = "";
      attachArea.style.display = "none";
    }
  }

  document.getElementById("result").innerHTML = "";
  document.getElementById("result-area").className = "";
  document.getElementById("btn-next").style.display = "none";

  updateProgress();
  initTooltips();
}

function initTooltips() {
  document.querySelectorAll(".hoverable").forEach(el => {
    // Remove old listeners by cloning
    const clone = el.cloneNode(true);
    el.parentNode.replaceChild(clone, el);

    clone.addEventListener("mouseenter", showTooltip);
    clone.addEventListener("mouseleave", hideTooltip);
    clone.addEventListener("touchstart", showTooltip);
  });
}

function showTooltip(e) {
  const el = e.currentTarget;
  if (el.querySelector(".tooltip")) return;

  const tip = document.createElement("div");
  tip.className = "tooltip";
  tip.textContent = el.getAttribute("data-tooltip");
  el.appendChild(tip);

  // Position adjustment
  requestAnimationFrame(() => {
    const rect = tip.getBoundingClientRect();
    if (rect.left < 8) tip.style.left = "0";
    if (rect.right > window.innerWidth - 8) {
      tip.style.left = "auto";
      tip.style.right = "0";
      tip.style.transform = "none";
    }
  });
}

function hideTooltip(e) {
  const tip = e.currentTarget.querySelector(".tooltip");
  if (tip) tip.remove();
}

function guess(answer) {
  if (answered) return;
  answered = true;
  total++;

  const isCorrect = answer === currentEmail.answer;
  if (isCorrect) score++;

  document.getElementById("score-val").textContent = score;

  const resultArea = document.getElementById("result-area");
  const resultEl = document.getElementById("result");

  if (isCorrect) {
    resultArea.className = "result-correct";
    resultEl.innerHTML = `<span class="result-icon">✅</span> <b>Correct!</b> ${currentEmail.explanation}`;
  } else {
    resultArea.className = "result-incorrect";
    resultEl.innerHTML = `<span class="result-icon">❌</span> <b>Incorrect.</b> ${currentEmail.explanation}`;
  }

  // Highlight buttons
  const legitBtn = document.getElementById("btn-legit");
  const phishBtn = document.getElementById("btn-phishing");
  legitBtn.disabled = true;
  phishBtn.disabled = true;

  if (answer === "legit") {
    legitBtn.classList.add("selected");
    legitBtn.classList.add(isCorrect ? "correct-choice" : "wrong-choice");
  } else {
    phishBtn.classList.add("selected");
    phishBtn.classList.add(isCorrect ? "correct-choice" : "wrong-choice");
  }

  document.getElementById("btn-next").style.display = "inline-block";
}

function nextEmail() {
  currentIndex++;
  updateProgress();
  showEmail();
}

function showGameOver() {
  document.getElementById("email-container").style.display = "none";
  document.getElementById("button-row").style.display = "none";
  document.getElementById("result-area").style.display = "none";
  document.getElementById("btn-next").style.display = "none";

  const pct = Math.round((score / emails.length) * 100);
  const gameOver = document.getElementById("game-over");
  gameOver.style.display = "block";

  let title, emoji;
  if (pct >= 90) { title = "Phishing Expert!"; emoji = "🛡️"; }
  else if (pct >= 70) { title = "Good Eye!"; emoji = "👁️"; }
  else if (pct >= 50) { title = "Getting There"; emoji = "📚"; }
  else { title = "Keep Practicing"; emoji = "⚠️"; }

  document.getElementById("final-title").textContent = `${emoji} ${title}`;
  document.getElementById("final-score").textContent =
    `You correctly identified ${score} out of ${emails.length} messages (${pct}%)`;

  document.getElementById("progress-fill").style.width = "100%";
}

// Start
showEmail();
