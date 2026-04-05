const emails = [
  // ── PHISHING EMAILS (13) ─────────────────────────────────────

  // 1. Angler Phishing (fake social media support)
  {
    type: "email",
    from: `Domino's Support <span class="hoverable" data-tooltip="@Domin0s_Supp0rt">@DominosSupport</span>`,
    subject: "Re: Your recent order complaint 🍕",
    body: `
      <div class="social-dm-frame">
        <div class="social-dm-header">
          <div class="social-dm-platform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3 4.79a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 23 6.29l-.54-.29z" fill="#8892a4"/>
            </svg>
            <span style="color:#8892a4; font-size:0.78rem; margin-left:4px;">Direct Message</span>
          </div>
          <div class="social-dm-user">
            <div class="social-dm-avatar" style="background:#0068a8; color:#fff; overflow:hidden;">
              <img src="img/dominos-fake-avatar.png" alt="" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.parentElement.textContent='D';">
            </div>
            <div>
              <div class="social-dm-name">Domino's Support <span style="color:#8892a4; font-weight:400;">@Domin0s_Supp0rt</span></div>
              <div class="social-dm-subtext">Not following you</div>
            </div>
          </div>
        </div>
        <div class="social-dm-body">
          <p>Hi there! We're so sorry to hear about your experience with your recent order. 😔</p>
          <p>We'd love to make this right! To process your <b>full refund + a free pizza coupon</b>, we just need to verify your account.</p>
          <p>Please fill out our quick refund form here:<br>
          <a class="hoverable" data-tooltip="http://domin0s-refunds.pizzahelp.ru/claim" href="#">dominospizza.com/refund-claim</a></p>
          <p>We'll have your refund processed within 24 hours! 🎉</p>
        </div>
        <div class="social-dm-footer">
          <span style="color:#6272a4; font-size:0.78rem;">2:34 PM · Apr 3, 2026</span>
        </div>
      </div>`,
    answer: "phishing",
    explanation: `<b>Angler Phishing</b> — Angler phishing targets people on social media by impersonating a brand's official customer support account. Attackers monitor public complaints on platforms like X/Twitter and Instagram, then swoop in with fake "support" accounts to intercept frustrated customers before the real brand can respond. <br><br><b>Red flags in this example:</b> The handle uses zeros instead of O's (<code>@Domin0s_Supp0rt</code> vs. the real <code>@DominosSupport</code>). The refund link points to a <code>.ru</code> domain (<code>pizzahelp.ru</code>), not Domino's actual site. The account also says "Not following you," which is unusual for a real brand support account engaging in an active customer service thread. A real refund would be processed through the brand's official website or app, never through a third-party link sent via DM.`,
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
    explanation: `<b>Smishing (SMS Phishing)</b> — Smishing uses text messages instead of email to deliver phishing attacks. It's especially dangerous because people tend to trust texts more than email, and phone screens make it harder to inspect full URLs before tapping. Attackers impersonate banks, delivery services, and government agencies to create urgency. <br><br><b>Red flags in this example:</b> The sender is a random 10-digit phone number (<code>734-555-0192</code>), not an official AmEx short code (the real AmEx uses short codes like 36521). The link displays as <code>amex.com</code> but actually points to <code>web-login.cc</code> — a completely unrelated domain. Legitimate banks never ask you to verify your identity through a text message link. If you receive a message like this, call the number on the back of your card directly.`,
    attachment: null
  },

  // 3. Man-in-the-Middle (MiTM) attack
  {
    type: "website",
    browserUrl: "http://free-wifi-connect.net/portal/login",
    browserTitle: "Free Airport WiFi – Connect",
    body: `<div class="web-page">
      <img src="img/airport-wifi-bg.png" alt="" style="width:100%; height:80px; object-fit:cover; border-radius:8px 8px 0 0; opacity:0.4; margin-bottom:-8px;" onerror="this.style.display='none';">
      <div style="text-align:center; margin-bottom:18px;">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="28" fill="#252840"/>
          <path d="M28 38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#8be9fd"/>
          <path d="M20.5 30.5a10.6 10.6 0 0 1 15 0" stroke="#8be9fd" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M16 26a17 17 0 0 1 24 0" stroke="#8be9fd" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.7"/>
          <path d="M11.5 21.5a23.4 23.4 0 0 1 33 0" stroke="#8be9fd" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.4"/>
        </svg>
        <h3 style="font-size:1.15rem; margin:10px 0 4px; color:#e5e5ea;">SLC Airport Free WiFi</h3>
        <p style="font-size:0.82rem; color:#8892a4;">Connect to browse the internet for free</p>
      </div>
      <div class="web-form-box">
        <p style="font-size:0.82rem; color:#8892a4; margin-bottom:12px;">Sign in with your email to get complimentary internet access throughout the terminal.</p>
        <label class="web-label">Email Address</label>
        <div class="web-input">you@email.com</div>
        <label class="web-label">Password</label>
        <div class="web-input web-input-pw">••••••••</div>
        <div style="display:flex; align-items:center; gap:6px; margin:10px 0;">
          <div style="width:14px; height:14px; border:1px solid #3a3f58; border-radius:3px; background:#252840;"></div>
          <span style="font-size:0.78rem; color:#8892a4;">Remember me on this device</span>
        </div>
        <div class="web-btn-primary" style="background:#8be9fd; color:#0f1117;">Connect to WiFi</div>
        <p style="font-size:0.72rem; color:#6272a4; margin-top:10px; text-align:center;">By connecting, you agree to our <a href="#" style="color:#0a84ff;">Terms of Service</a></p>
      </div>
      <p style="font-size:0.72rem; color:#6272a4; margin-top:14px; text-align:center;">Powered by AirNet Hospitality Services</p>
    </div>`,
    answer: "phishing",
    explanation: `<b>Man-in-the-Middle (MiTM) Attack</b> — In a MiTM attack, the attacker secretly positions themselves between you and the service you're communicating with, intercepting and potentially altering data flowing in both directions. A common method is the "evil twin" — a fake WiFi hotspot that mimics a legitimate network. Once you connect, all your browsing, login credentials, and data pass through the attacker's equipment. <br><br><b>Red flags in this example:</b> The URL is <code>http://</code> (not HTTPS), meaning all data you submit is transmitted in plain text and can be read by anyone on the network. The portal asks for an email <em>and password</em> — legitimate airport WiFi never requires your email password, only an email address at most. The domain <code>free-wifi-connect.net</code> is generic and unaffiliated with any real airport or ISP. To stay safe on public WiFi, use a VPN, avoid entering credentials on HTTP pages, and never reuse passwords.`,
    attachment: null
  },

  // 4. Website Spoofing
  {
    type: "website",
    browserUrl: "http://www.amaz0n-verify.com/ap/signin",
    browserTitle: "Amazon Sign-In",
    body: `<div class="web-page">
      <div style="text-align:center; margin-bottom:16px;">
        <svg width="100" height="32" viewBox="0 0 200 64" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="44" font-family="'DM Sans', Arial, sans-serif" font-size="38" font-weight="700" fill="#f8f8f2">amazon</text>
          <path d="M10 52 Q60 64 130 52" stroke="#ff9900" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M125 47 L132 52 L125 52" fill="#ff9900"/>
        </svg>
      </div>
      <div class="web-form-box">
        <h3 style="font-size:1.1rem; margin-bottom:14px; color:#d8dce6;">Sign in</h3>
        <label class="web-label">Email or mobile phone number</label>
        <div class="web-input">you@email.com</div>
        <label class="web-label">Password</label>
        <div class="web-input web-input-pw">••••••••</div>
        <div class="web-btn-primary">Sign in</div>
        <p style="font-size:0.78rem; color:#6272a4; margin-top:12px;">By continuing, you agree to Amazon's <a href="#" style="color:#0a84ff;">Conditions of Use</a> and <a href="#" style="color:#0a84ff;">Privacy Notice</a>.</p>
      </div>
      <div class="web-divider" style="margin:16px 0;"></div>
      <p style="font-size:0.8rem; color:#6272a4; text-align:center;">New to Amazon? <a href="#" style="color:#0a84ff;">Create your Amazon account</a></p>
    </div>`,
    answer: "phishing",
    explanation: `<b>Website Spoofing</b> — Website spoofing involves creating a near-perfect replica of a legitimate website to steal login credentials. Attackers clone the visual design, branding, and layout of real sites — often down to the fonts and images — making the fake virtually indistinguishable at first glance. Victims typically arrive via phishing emails, ads, or search results. <br><br><b>Red flags in this example:</b> The URL says <code>amaz0n-verify.com</code> — using a zero instead of the letter "o" and appending "-verify" to seem official. The connection uses HTTP instead of HTTPS (note the ⚠️ warning icon, not the 🔒 lock). The real Amazon sign-in page is at <code>amazon.com/ap/signin</code> over a secure HTTPS connection. Always check the URL bar carefully before entering credentials, and bookmark important login pages so you never rely on links to reach them.`,
    attachment: null
  },

  // 5. Domain Spoofing
  {
    type: "email",
    from: `LinkedIn <span class="hoverable" data-tooltip="notifications@linkedln-mail.com">&lt;notifications@linkedin.com&gt;</span>`,
    subject: "You appeared in 12 searches this week",
    body: `
      <div style="text-align:center; margin-bottom:14px;">
        <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="4" fill="#0a66c2"/>
          <text x="6" y="26" font-family="'DM Sans', Arial, sans-serif" font-size="20" font-weight="700" fill="#fff">in</text>
        </svg>
      </div>
      <p>Hi there,</p>
      <p>Your profile has been viewed by recruiters from <b>Google</b>, <b>Apple</b>, and <b>Microsoft</b> this week!</p>
      <p>See who's looking at your profile:</p>
      <p><a class="hoverable" data-tooltip="http://linkedln-mail.com/profile-views" href="#">View your profile visitors on LinkedIn</a></p>
      <p>Upgrade to Premium to unlock all viewer details.</p>
      <p class="sig">The LinkedIn Team<br>
      <span style="font-size:0.78rem;">Sunnyvale, CA 94085</span></p>
      <p style="font-size:0.82em; color:#6272a4; margin-top:12px;">You are receiving LinkedIn notification emails. <a class="hoverable" data-tooltip="http://linkedln-mail.com/unsubscribe" href="#">Unsubscribe</a> · <a class="hoverable" data-tooltip="http://linkedln-mail.com/help" href="#">Help</a></p>`,
    answer: "phishing",
    explanation: `<b>Domain Spoofing (DNS Spoofing)</b> — Domain spoofing exploits how humans read URLs by registering a domain that's nearly identical to a trusted one. Attackers rely on visual similarity — swapping characters that look alike (l/I, 0/O, rn/m), adding hyphens or subdomains, or using different TLDs. Unlike website spoofing which clones a page's <em>appearance</em>, domain spoofing specifically targets the <em>domain name</em> to pass casual inspection. <br><br><b>Red flags in this example:</b> The sender's actual domain is <code>linkedln-mail.com</code> — using a lowercase L ("l") where LinkedIn has a lowercase I ("i"). At a normal reading speed, "linkedln" and "linkedin" look identical. All links also go to this same fraudulent domain. The unsubscribe and help links also point to the fake domain, which is a strong tell — legitimate emails route these to the company's real site. Hover over sender addresses and links to see where they actually point.`,
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
      <div class="fake-image hoverable" data-tooltip="http://fedex-notifications.info/download/tracking_detail.js">
        <img src="img/fake-shipping-label.png" alt="Shipping Label Preview" style="width:100%; border-radius:6px; margin-bottom:6px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" style="margin-bottom:6px; display:none;">
          <rect x="5" y="5" width="110" height="70" rx="4" fill="none" stroke="#3a3f58" stroke-width="1" stroke-dasharray="4,3"/>
          <rect x="10" y="12" width="60" height="6" rx="2" fill="#3a3f58"/>
          <rect x="10" y="22" width="45" height="4" rx="2" fill="#2e3150"/>
          <rect x="10" y="30" width="50" height="4" rx="2" fill="#2e3150"/>
          <rect x="10" y="38" width="38" height="4" rx="2" fill="#2e3150"/>
          <rect x="75" y="12" width="35" height="35" fill="#2e3150" rx="3"/>
          <rect x="80" y="17" width="25" height="10" fill="#3a3f58" rx="1"/>
          <rect x="80" y="30" width="25" height="12" rx="1" fill="none" stroke="#3a3f58" stroke-width="1"/>
          <text x="85" y="40" font-size="6" fill="#3a3f58" font-family="monospace">|||||||</text>
          <rect x="10" y="52" width="100" height="6" rx="2" fill="#3a3f58" opacity="0.5"/>
          <rect x="10" y="62" width="70" height="4" rx="2" fill="#2e3150"/>
        </svg>
        <div style="font-size:0.88rem;">shipping_label_preview.png</div>
        <div class="image-sub">Click to view full size (2.4 MB)</div>
      </div>
      <p class="sig">FedEx Automated Notifications<br>
      <span style="font-size:0.78rem; color:#6272a4;">Tracking #: 7891-2045-8833</span></p>`,
    answer: "phishing",
    explanation: `<b>Image Phishing</b> — Image phishing hides malicious code inside image files or uses images to bypass text-based email filters. Some variants embed JavaScript or executable code within image metadata; others disguise executable files as images using double file extensions (e.g., <code>.png.exe</code>). Because email scanners primarily analyze text, embedding the phishing payload in an image can slip past spam filters. <br><br><b>Red flags in this example:</b> The sender's actual domain is <code>fedex-notifications.info</code>, not the official <code>fedex.com</code>. Hovering over the image reveals it would download a JavaScript file (<code>tracking_detail.js</code>), not a PNG image — this script could install malware or steal credentials. The file size (2.4 MB) is also suspiciously large for a simple shipping label image. Legitimate carriers display tracking info on their website, not through downloadable image files. Also note the attached file: <code>ShippingLabel_Details.png.exe</code> — the double extension is a classic trick to disguise an executable as an image.`,
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
        <div class="web-product-img">
          <img src="img/ps5-product.png" alt="Product" style="width:100%; height:100%; object-fit:contain; border-radius:8px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <div style="display:none;">
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="18" width="50" height="30" rx="6" fill="#3a3f58"/>
              <rect x="8" y="20" width="28" height="26" rx="2" fill="#252840" stroke="#48484a" stroke-width="0.5"/>
              <circle cx="22" cy="33" r="6" fill="none" stroke="#48484a" stroke-width="1"/>
              <circle cx="22" cy="33" r="2" fill="#48484a"/>
              <rect x="40" y="24" width="4" height="4" rx="2" fill="#0a84ff" opacity="0.7"/>
              <rect x="40" y="32" width="4" height="4" rx="2" fill="#ff5555" opacity="0.7"/>
              <rect x="40" y="40" width="4" height="4" rx="2" fill="#50fa7b" opacity="0.7"/>
              <rect x="46" y="28" width="6" height="10" rx="1" fill="#3a3f58" stroke="#48484a" stroke-width="0.5"/>
            </svg>
            <span style="font-size:0.62rem; color:#6272a4; margin-top:2px;">Product Image</span>
          </div>
        </div>
        <div style="flex:1;">
          <h3 style="font-size:1.05rem; margin-bottom:6px; color:#d8dce6;">Sony PS5 Pro + 2 Controllers + 5 Games</h3>
          <div style="display:flex; align-items:center; gap:4px; margin-bottom:4px;">
            <span style="color:#ffb86c;">★★★★★</span>
            <span style="font-size:0.75rem; color:#6272a4;">(2,847 reviews)</span>
          </div>
          <div style="margin-bottom:8px;"><span class="strikethrough">$849.99</span> <span class="sale" style="font-size:1.2rem;">$149.99</span> <span style="background:rgba(255,85,85,0.15); color:#ff5555; font-size:0.75rem; padding:2px 6px; border-radius:3px; font-weight:600;">94% OFF</span></div>
          <p style="font-size:0.82rem; color:#ff5555; font-weight:600;">⏰ Only 3 remaining at this price!</p>
          <p style="font-size:0.82rem; color:#8892a4; margin-top:6px;">Free shipping · 30-day returns</p>
        </div>
      </div>
      <div class="web-divider" style="margin:14px 0;"></div>
      <div class="deal-box">
        <div class="deal-urgency">🔥 FLASH SALE — Ends in 04:23:17</div>
      </div>
      <label class="web-label">Full Name</label>
      <div class="web-input">Enter your full name</div>
      <label class="web-label">Shipping Address</label>
      <div class="web-input">Enter your address</div>
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
    explanation: `<b>Search Engine Phishing</b> — Search engine phishing exploits paid ads and SEO manipulation to make fake product listings appear in search results alongside legitimate ones. Attackers create convincing storefronts with "too-good-to-be-true" deals, then collect your credit card and personal information directly on the page rather than using a legitimate payment processor like Stripe or PayPal. <br><br><b>Red flags in this example:</b> The URL is <code>best-deals-finder.biz</code> — a generic domain with a <code>.biz</code> TLD, not a recognized retailer. A PS5 Pro bundle for $149.99 (94% off) is absurdly unrealistic. The "Verified Seller" badge is self-assigned and meaningless. The countdown timer and "Only 3 remaining" are high-pressure urgency tactics designed to prevent you from thinking critically. Most importantly, the page asks for credit card details directly on the page — legitimate retailers use secure, established payment processors and never collect raw card data on a product page. The 2,847 "reviews" on an unknown site are also fabricated.`,
    attachment: null
  },

  // 8. Evil Twin Phishing (fake WiFi reconnection email)
  {
    type: "email",
    from: `BYU IT Services <span class="hoverable" data-tooltip="helpdesk@byu-itsupport.net">&lt;helpdesk@byu.edu&gt;</span>`,
    subject: "Wi-Fi Security Alert – Reconnection Required",
    body: `
      <div style="text-align:center; margin-bottom:14px;">
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#002e5d"/>
          <text x="22" y="28" text-anchor="middle" font-family="'DM Sans', serif" font-size="16" font-weight="700" fill="#fff">BYU</text>
        </svg>
      </div>
      <p>Dear Student,</p>
      <p>Our security team has detected a vulnerability in the campus Wi-Fi network (<b>BYU-WiFi</b>). To protect your data, we've rolled out a security patch that requires all users to re-authenticate.</p>
      <p>Please disconnect from your current Wi-Fi and reconnect using the secure portal below:</p>
      <p><a class="hoverable" data-tooltip="http://byu-secure-login.com/wifi/reconnect" href="#">https://wifi.byu.edu/reconnect</a></p>
      <p>⚠️ You must complete this step within <b>24 hours</b> to maintain network access. Devices that have not re-authenticated will be automatically disconnected.</p>
      <p>If you have any questions, contact the IT Service Desk at (801) 422-4000.</p>
      <p class="sig">BYU Information Technology<br>
      Brigham Young University<br>
      2027 CTB, Provo, UT 84602</p>`,
    answer: "phishing",
    explanation: `<b>Evil Twin Phishing</b> — An evil twin attack creates a fake Wi-Fi network that mimics a legitimate one (like "BYU-WiFi" or "Starbucks_Free_WiFi"). When victims connect, all their internet traffic passes through the attacker's device, allowing them to capture login credentials, session cookies, and other sensitive data. The email component often serves as the lure — pushing users off a real network and onto the attacker's fake one. <br><br><b>Red flags in this example:</b> The displayed sender shows <code>helpdesk@byu.edu</code>, but the actual address is <code>helpdesk@byu-itsupport.net</code> — a lookalike domain, not BYU's real <code>.edu</code> address. The "secure portal" link displays as <code>wifi.byu.edu</code> but actually points to <code>byu-secure-login.com</code>, an unrelated domain over HTTP. Legitimate IT departments push Wi-Fi updates through device settings or official portals, not email links. The 24-hour deadline creates artificial pressure to act without verifying.`,
    attachment: null
  },

  // 9. Watering Hole Phishing (compromised course materials site)
  {
    type: "website",
    browserUrl: "http://byu-coursework-portal.com/cs260/materials",
    browserTitle: "CS 260 – Course Materials",
    body: `<div class="web-page">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#002e5d"/>
          <text x="16" y="21" text-anchor="middle" font-family="'DM Sans', serif" font-size="11" font-weight="700" fill="#fff">BYU</text>
        </svg>
        <div>
          <div style="font-weight:700; font-size:1.05rem; color:#e5e5ea;">CS 260 — Web Programming</div>
          <div style="font-size:0.78rem; color:#8892a4;">Fall 2026 · Prof. Jensen</div>
        </div>
      </div>
      <div class="web-divider"></div>
      <h3 style="font-size:0.95rem; margin:14px 0 10px; color:#d8dce6;">📁 Updated Materials — Week 12</h3>
      <div style="background:#252840; border:1px solid #2e3150; border-radius:6px; padding:12px 14px; margin-bottom:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
        <span style="font-size:1.2rem;">📄</span>
        <div style="flex:1;">
          <div style="font-size:0.88rem; color:#d8dce6;">Lecture12_React_Hooks.pdf</div>
          <div style="font-size:0.72rem; color:#6272a4;">2.1 MB · Uploaded Apr 2, 2026</div>
        </div>
        <span style="color:#0a84ff; font-size:0.82rem;">Download</span>
      </div>
      <div style="background:#252840; border:1px solid #2e3150; border-radius:6px; padding:12px 14px; margin-bottom:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
        <span style="font-size:1.2rem;">📄</span>
        <div style="flex:1;">
          <div style="font-size:0.88rem; color:#d8dce6;">Assignment6_Starter_Code.zip</div>
          <div style="font-size:0.72rem; color:#6272a4;">4.8 MB · Uploaded Apr 2, 2026</div>
        </div>
        <span style="color:#0a84ff; font-size:0.82rem;">Download</span>
      </div>
      <div style="background:#252840; border:1px solid #2e3150; border-radius:6px; padding:12px 14px; margin-bottom:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
        <span style="font-size:1.2rem;">🔗</span>
        <div style="flex:1;">
          <div style="font-size:0.88rem; color:#d8dce6;">Study Guide — Midterm 2 Review</div>
          <div style="font-size:0.72rem; color:#6272a4;">External link · Added Apr 1, 2026</div>
        </div>
        <span style="color:#0a84ff; font-size:0.82rem;">Open</span>
      </div>
      <div class="web-divider" style="margin:14px 0;"></div>
      <p style="font-size:0.78rem; color:#6272a4;">Last updated: April 2, 2026 · <a href="#" style="color:#0a84ff;">Report an issue</a></p>
    </div>`,
    answer: "phishing",
    explanation: `<b>Watering Hole Phishing</b> — Instead of targeting individuals directly, a watering hole attack infects a website that a specific group of people visits regularly — like a course portal, industry forum, or internal wiki. The attacker either compromises the real site or creates a convincing replica. When victims visit and download files or click links, malware is silently installed on their device. It's named after predators who wait at watering holes for prey to come to them. <br><br><b>Red flags in this example:</b> The URL is <code>byu-coursework-portal.com</code> — a generic <code>.com</code> domain, not BYU's actual learning management system (which would be on <code>learningsuite.byu.edu</code> or <code>byu.instructure.com</code>). The site uses HTTP instead of HTTPS (note the ⚠️ icon). While the page looks like a legitimate course portal with realistic file names and sizes, downloading files from this fake site could install malware. Always access course materials through your university's official LMS, not through links sent separately.`,
    attachment: null
  },

  // 10. Whaling (targeting high-level individual)
  {
    type: "email",
    from: `Dr. Richard L. Hammond <span class="hoverable" data-tooltip="r.hammond@byu-faculty.org">&lt;r.hammond@byu.edu&gt;</span>`,
    subject: "Urgent: Budget Approval Needed Before 5 PM",
    body: `<p>Hi,</p>
      <p>I hope I'm not catching you at a bad time. I'm in a board meeting and can't make a phone call, but I need this handled before end of day.</p>
      <p>The provost's office has flagged our department's annual research budget for review. I need you to <b>review and digitally sign the attached reallocation form</b> so we don't lose our Q3 funding allocation.</p>
      <p>I've uploaded the document to our secure review portal:</p>
      <p><a class="hoverable" data-tooltip="http://secure-doc-review.net/byu/budget-approval" href="#">Open Budget Reallocation Form (BYU DocuSign)</a></p>
      <p>Please use your BYU credentials to log in and sign. This needs to be completed by <b>5:00 PM today</b> — if we miss the deadline, the funds will be returned to the general pool.</p>
      <p>Thank you for handling this quickly. I'll follow up after my meeting.</p>
      <p class="sig">Dr. Richard L. Hammond<br>Department Chair, Information Systems<br>
      Brigham Young University<br>
      (801) 422-XXXX</p>`,
    answer: "phishing",
    explanation: `<b>Whaling</b> — Whaling is a highly targeted phishing attack aimed at senior leaders — executives, department chairs, deans, or anyone with authority over finances, sensitive data, or system access. Unlike mass phishing, whaling emails are carefully researched and personalized. They often impersonate another leader and involve urgent financial requests, document approvals, or credential harvesting. The name comes from "going after the big fish." <br><br><b>Red flags in this example:</b> The sender displays as <code>r.hammond@byu.edu</code> but the real address is <code>r.hammond@byu-faculty.org</code> — a lookalike domain. The email creates urgency with a same-day deadline and the threat of losing funding. The "DocuSign" link goes to <code>secure-doc-review.net</code>, not the real DocuSign domain. The claim of being "in a board meeting" conveniently explains why they can't call to verify — a classic social engineering tactic to prevent out-of-band confirmation. Legitimate budget approvals follow established institutional workflows, not ad-hoc email requests with external links.`,
    attachment: null
  },

  // 11. Clone Phishing (re-sent legitimate-looking email with swapped link)
  {
    type: "email",
    from: `Jake Morrison <span class="hoverable" data-tooltip="jake.m0rrison.byu@gmail.com">&lt;jake.morrison@byu.edu&gt;</span>`,
    subject: "Re: Assignment 6 Files — resending",
    body: `<p>Hey,</p>
      <p>Sorry about that — looks like the link I sent earlier expired. Here's an updated one:</p>
      <p><a class="hoverable" data-tooltip="http://byubox-files.com/shared/assignment6-starter.zip" href="#">https://byu.box.com/s/assignment6-starter-code</a></p>
      <p>Same files as before, just a new link. Let me know if it works this time!</p>
      <p>– Jake</p>
      <div style="border-left:3px solid #2a2d3e; padding-left:14px; margin-top:18px; color:#6272a4; font-size:0.85rem;">
        <p style="margin-bottom:4px;"><b style="color:#8892a4;">From:</b> Jake Morrison</p>
        <p style="margin-bottom:4px;"><b style="color:#8892a4;">Date:</b> April 1, 2026 at 3:22 PM</p>
        <p style="margin-bottom:4px;"><b style="color:#8892a4;">Subject:</b> Assignment 6 Files</p>
        <p style="margin-top:8px;">Here are the starter files for Assignment 6. I zipped everything together so it's easier to download.</p>
        <p><a href="#" style="color:#6272a4; text-decoration:underline;">https://byu.box.com/s/a6-starter-code-cs260</a></p>
        <p>– Jake</p>
      </div>`,
    answer: "phishing",
    explanation: `<b>Clone Phishing</b> — Clone phishing duplicates a real, previously delivered email and re-sends it with a malicious link or attachment swapped in. Because the victim recognizes the message — same sender name, same subject, same formatting — they're far more likely to trust it. The attacker usually adds a plausible excuse for re-sending, like "the link expired" or "updated version." <br><br><b>Red flags in this example:</b> The sender displays as <code>jake.morrison@byu.edu</code> but the actual address is <code>jake.m0rrison.byu@gmail.com</code> — a Gmail address with a zero instead of "o" in Morrison. The new link appears to point to <code>byu.box.com</code> (BYU's real Box file sharing) but actually goes to <code>byubox-files.com</code>, a completely different domain. The quoted "original" email at the bottom is fabricated to build trust. If someone re-sends you a link, verify it by contacting them through a separate channel — don't just click the new one.`,
    attachment: null
  },

  // 12. Deceptive Phishing (fake account security alert)
  {
    type: "email",
    from: `Microsoft Account Team <span class="hoverable" data-tooltip="security@microsoftonline-alerts.com">&lt;account-security@microsoft.com&gt;</span>`,
    subject: "Your Microsoft account has been locked",
    body: `
      <div style="text-align:center; margin-bottom:14px;">
        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
          <rect x="0" y="0" width="10" height="10" fill="#f25022"/>
          <rect x="12" y="0" width="10" height="10" fill="#7fba00"/>
          <rect x="0" y="12" width="10" height="10" fill="#00a4ef"/>
          <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
        </svg>
        <span style="font-weight:600; color:#e5e5ea; margin-left:6px; font-size:1rem;">Microsoft</span>
      </div>
      <p>We detected unusual sign-in activity on your Microsoft account.</p>
      <div style="background:#252840; border:1px solid #2e3150; border-radius:6px; padding:14px; margin:14px 0;">
        <p style="margin:4px 0; font-size:0.85rem;"><span style="color:#6272a4;">Location:</span> <span style="color:#d8dce6;">Moscow, Russia</span></p>
        <p style="margin:4px 0; font-size:0.85rem;"><span style="color:#6272a4;">Device:</span> <span style="color:#d8dce6;">Unknown Linux device</span></p>
        <p style="margin:4px 0; font-size:0.85rem;"><span style="color:#6272a4;">Time:</span> <span style="color:#d8dce6;">April 3, 2026 at 2:14 AM</span></p>
        <p style="margin:4px 0; font-size:0.85rem;"><span style="color:#6272a4;">Status:</span> <span style="color:#ff5555; font-weight:600;">Account Locked</span></p>
      </div>
      <p>If this wasn't you, please verify your identity immediately to secure your account and restore access:</p>
      <p style="text-align:center; margin:16px 0;">
        <a class="hoverable" data-tooltip="http://microsoftonline-alerts.com/account/verify?id=8x2kf9" href="#" style="display:inline-block; background:#0078d4; color:#fff; padding:10px 24px; border-radius:4px; text-decoration:none; font-weight:600;">Verify My Identity</a>
      </p>
      <p>If this <em>was</em> you, you can ignore this email.</p>
      <p style="font-size:0.82em; color:#6272a4; margin-top:16px;">This is a mandatory security notification. You cannot unsubscribe from account alerts.<br>Microsoft Corporation, One Microsoft Way, Redmond, WA 98052</p>`,
    answer: "phishing",
    explanation: `<b>Deceptive Phishing</b> — Deceptive phishing is the most common form of phishing. The attacker impersonates a well-known company (Microsoft, Google, Apple, Netflix, etc.) and fabricates an account security problem — a lockout, suspicious login, or expiring password — to frighten the victim into clicking a link and entering their credentials on a fake login page. These emails are sent in bulk to millions of people, relying on sheer volume to catch anyone who happens to have an account with that service. <br><br><b>Red flags in this example:</b> The sender displays as <code>account-security@microsoft.com</code> but the actual address is <code>security@microsoftonline-alerts.com</code> — a domain designed to look official but not owned by Microsoft. The "Verify My Identity" button links to <code>microsoftonline-alerts.com</code>, not Microsoft's real domain (<code>microsoft.com</code> or <code>login.microsoftonline.com</code>). The fabricated login details (Moscow, Linux device, 2:14 AM) are designed to trigger alarm. Legitimate Microsoft security alerts direct you to <code>account.microsoft.com</code> — and you should always navigate there manually rather than clicking email links.`,
    attachment: null
  },

  // 13. Social Engineering (SMS requesting 2FA code)
  {
    type: "sms",
    smsFrom: "801-555-0347",
    smsTime: "3:17 PM",
    body: `<p>Hi, this is Marcus from BYU IT Support. We're seeing an authentication error on your account that's blocking access to campus services.</p>
      <p>I've triggered a password reset on our end. You should receive a 6-digit verification code shortly — can you send it to me here so I can complete the fix?</p>
      <p>This needs to be done in the next few minutes or your account will be locked for 48 hours. Sorry for the inconvenience.</p>`,
    answer: "phishing",
    explanation: `<b>Social Engineering</b> — Social engineering manipulates human psychology rather than exploiting technical vulnerabilities. The attacker builds trust by impersonating someone in a position of authority (IT support, a manager, campus security) and creates urgency to pressure the victim into sharing sensitive information — passwords, verification codes, or personal data. It's the foundation underlying most phishing attacks, but in its purest form, it relies entirely on conversation and manipulation rather than fake links or websites. <br><br><b>Red flags in this example:</b> A legitimate IT support person will <em>never</em> ask you to share a verification code via text. That 6-digit code is specifically designed to prove that <em>you</em> are the account owner — if you forward it to someone else, they can use it to take over your account. This is called a <b>2FA interception attack</b>. The personal name ("Marcus"), the specific technical language ("authentication error"), and the tight deadline ("next few minutes") are all social engineering tactics designed to make you act before thinking. Real IT support will ask you to use the code yourself on an official page, or they'll walk you through the process in person.`,
    attachment: null
  },

  // ── LEGITIMATE EMAILS (3) ──────────────────────────────────

  // 14. Legit – BYU email
  {
    type: "email",
    from: `BYU Financial Services <span class="hoverable" data-tooltip="financialservices@byu.edu">&lt;financialservices@byu.edu&gt;</span>`,
    subject: "Fall 2026 Tuition Statement Available",
    body: `
      <div style="text-align:center; margin-bottom:14px;">
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#002e5d"/>
          <text x="22" y="28" text-anchor="middle" font-family="'DM Sans', serif" font-size="16" font-weight="700" fill="#fff">BYU</text>
        </svg>
      </div>
      <p>Dear Student,</p>
      <p>Your tuition statement for <b>Fall Semester 2026</b> is now available. You can view your account balance and payment options through your MyBYU portal.</p>
      <p><a class="hoverable" data-tooltip="https://my.byu.edu/financial/statement" href="#">View your statement on MyBYU</a></p>
      <p>Payment is due by <b>September 12, 2026</b>. If you have questions, contact Financial Services at <b>(801) 422-2507</b> or visit us in <b>B-34 ASB</b>.</p>
      <p style="font-size:0.85em; color:#6272a4; margin-top:14px;">This is an automated notification from Brigham Young University. Please do not reply to this message.</p>
      <p class="sig">BYU Financial Services<br>Brigham Young University<br>Provo, UT 84602</p>`,
    answer: "legit",
    explanation: `<b>Legitimate Email</b> — This is a genuine university communication. Here's why you can trust it: <br><br><b>Trust indicators:</b> The sender uses BYU's official <code>@byu.edu</code> domain — a <code>.edu</code> domain that can only be registered by accredited educational institutions. The link points to <code>https://my.byu.edu</code> (HTTPS, real BYU subdomain). It includes a verifiable phone number and physical office location (B-34 ASB) you can independently confirm. The email doesn't create artificial urgency — it gives a clear due date well in advance. It doesn't ask you to click a link to "verify your account" or enter credentials; it simply directs you to your existing portal. The tone is professional and measured, with no threats or pressure tactics.`,
    attachment: null
  },

  // 15. Legit – well-known company promotion
  {
    type: "email",
    from: `Costco Wholesale <span class="hoverable" data-tooltip="offers@costco.com">&lt;offers@costco.com&gt;</span>`,
    subject: "This week's member-only savings — up to 30% off",
    body: `
      <div style="text-align:center; margin-bottom:14px;">
        <svg width="80" height="28" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="40" rx="4" fill="#e31837"/>
          <text x="80" y="28" text-anchor="middle" font-family="'DM Sans', Arial, sans-serif" font-size="20" font-weight="700" fill="#fff" letter-spacing="2">COSTCO</text>
        </svg>
      </div>
      <p>Hi Member,</p>
      <p>Here are this week's exclusive savings for Costco members:</p>
      <ul>
        <li>Kirkland Signature Olive Oil, 2L — <b>$12.99</b> (save $4)</li>
        <li>Samsung 65" 4K Smart TV — <b>$479.99</b> (save $120)</li>
        <li>Michelin All-Season Tires (set of 4) — <b>$599.99</b> (save $180)</li>
      </ul>
      <p><a class="hoverable" data-tooltip="https://www.costco.com/weekly-deals.html" href="#">See all member deals at Costco.com</a></p>
      <p style="font-size:0.85em;color:#888;">You're receiving this because you opted in to Costco promotional emails. <a class="hoverable" data-tooltip="https://www.costco.com/email-preferences.html" href="#">Unsubscribe</a> | <a class="hoverable" data-tooltip="https://www.costco.com/privacy-policy.html" href="#">Privacy Policy</a></p>
      <p class="sig">Costco Wholesale Corporation<br>
      <span style="font-size:0.78rem;">999 Lake Dr, Issaquah, WA 98027</span></p>`,
    answer: "legit",
    explanation: `<b>Legitimate Email</b> — This is a real Costco promotional email. Here's what makes it trustworthy: <br><br><b>Trust indicators:</b> The sender uses the official <code>@costco.com</code> domain. All links — including the unsubscribe and privacy policy — point to <code>costco.com</code> over HTTPS. The discounts are realistic and specific (15–25% off, not 90%+ off). It doesn't demand immediate action, ask for personal information, or threaten account suspension. The email includes Costco's real corporate address in Issaquah, WA, and provides clear opt-out mechanisms as required by the CAN-SPAM Act. <br><br><b>Compare with phishing:</b> Unlike phishing emails, this one doesn't use urgency language ("ACT NOW!"), doesn't link to unfamiliar domains, and the discount percentages are reasonable for a real retailer.`,
    attachment: null
  },

  // 16. Legit – generic spam (annoying but not malicious)
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
    explanation: `<b>Legitimate (Spam, but Not Phishing)</b> — This is an important distinction: not every annoying or unsolicited email is a phishing attempt. This is marketing spam from a real (if minor) company. <br><br><b>Why it's not phishing:</b> All links consistently point to <code>surveyrewardz.com</code> over HTTPS — the sending domain and link domains match. The reward is modest and realistic ($5, not "$500 FREE!"). It includes a physical mailing address and a clear unsubscribe option, both legally required by the CAN-SPAM Act. It references a specific sign-up date, which adds credibility. <br><br><b>The lesson:</b> Learning to distinguish between "annoying but harmless" and "actively malicious" is a key skill. Phishing emails typically impersonate well-known brands, use mismatched domains, create false urgency, and try to harvest credentials or financial data. This email does none of those things — it's just a company you signed up with sending you marketing.`,
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
    resultEl.innerHTML = `<span class="result-icon">✅</span> <b>Correct!</b><br><br>${currentEmail.explanation}`;
  } else {
    resultArea.className = "result-incorrect";
    resultEl.innerHTML = `<span class="result-icon">❌</span> <b>Incorrect.</b><br><br>${currentEmail.explanation}`;
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
