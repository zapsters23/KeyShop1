import React, { useEffect } from "react";
import "./index.css";
import {
  Phone,
  MapPin,
  Lock,
  Key,
  MessageCircle,
  Star as StarIcon,
  Heart as HeartIcon,
} from "lucide-react";

/* ---------- ICON WRAPPERS (LUCIDE) ---------- */

const IconPhone = ({ size = 18 }) => (
  <Phone size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconWhatsApp = ({ size = 18 }) => (
  <MessageCircle size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconLocation = ({ size = 18 }) => (
  <MapPin size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconLock = ({ size = 18 }) => (
  <Lock size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconKey = ({ size = 18 }) => (
  <Key size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconMessage = ({ size = 18 }) => (
  <MessageCircle size={size} strokeWidth={1.8} aria-hidden="true" />
);

const IconStar = ({ size = 14, filled = true }) => (
  <StarIcon
    size={size}
    strokeWidth={1.5}
    fill={filled ? "currentColor" : "none"}
    aria-hidden="true"
  />
);

const IconHeart = ({ size = 14 }) => (
  <HeartIcon
    size={size}
    strokeWidth={1.5}
    fill="currentColor"
    aria-hidden="true"
  />
);

/* ---------- SCROLL HELPERS ---------- */

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function App() {
  // REAL CONTACT DETAILS
  const phonePrimary = "+91 6369972889";
  const phoneSecondary = "+91 9840797080";
  const whatsAppNumber = "+91 6369972889";
  const email = "vishalkeyshop123@gmail.com";
  const address =
    "No 18, Vetri Nagar, Kolathur, Puthagaram, Chennai, Tamil Nadu 600099";

  const phonePrimaryHref = `tel:${phonePrimary.replace(/\s+/g, "")}`;
  const phoneSecondaryHref = `tel:${phoneSecondary.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${whatsAppNumber
    .replace(/\s+/g, "")
    .replace("+", "")}`;

  const mapHref =
    "https://www.google.com/maps?q=No+18,+Vetri+Nagar,+Kolathur,+Puthagaram,+Chennai,+Tamil+Nadu+600099";

  // 🔁 IMPORTANT: replace this with the exact "src" from Google Maps → Share → Embed a map
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.021074!2d80.198!3d13.118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264d86c000001%3A0x0000000000000000!2sVetri%20Nagar%2C%20Kolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!5e0!3m2!1sen!2sin!4v1700000000000";

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Reviews for marquee
  const reviews = [
    {
      name: "Sanjay Kumar",
      location: "Vetri Nagar, Kolathur",
      rating: 5,
      text: "Duplicate house keys were ready in minutes and worked perfectly. Very neat work and polite communication.",
    },
    {
      name: "Priya Ramesh",
      location: "Puthagaram",
      rating: 5,
      text: "My car remote stopped working near home. They checked, replaced the shell and reprogrammed it the same evening.",
    },
    {
      name: "Mohammed Imran",
      location: "Perambur",
      rating: 5,
      text: "Appreciated the clear explanation of options before starting the job. Transparent pricing and no hidden charges.",
    },
    {
      name: "Lakshmi Narayanan",
      location: "Madhavaram",
      rating: 5,
      text: "Old main door lock was jamming. They adjusted and serviced it instead of forcing a replacement. Honest approach.",
    },
    {
      name: "Divya Shankar",
      location: "Kolathur",
      rating: 5,
      text: "Shared photos of my broken key on WhatsApp and got quick guidance. The new keys they cut were accurate and smooth.",
    },
    {
      name: "Arun Prasad",
      location: "Retteri",
      rating: 5,
      text: "Got spare keys made for both car and house. Professional tools, quick turnaround and the shop is easy to locate.",
    },
    {
      name: "Nithya Raj",
      location: "Jawaharlal Street, Kolathur",
      rating: 5,
      text: "Very professional and patient in answering doubts about smart locks and security options for our apartment.",
    },
  ];

  return (
    <div className="app-root">
      {/* TOP EMERGENCY STRIP */}
      <div className="emergency-strip">
        <div className="container emergency-inner">
          <span className="emergency-pill">
            <IconLock size={14} /> Emergency Lock & Key Help
          </span>
          <span className="emergency-text">
            Locked out of home or car? Call{" "}
            <a href={phonePrimaryHref}>{phonePrimary}</a> for priority support.
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <span>VK</span>
            </div>
            <div className="brand-text">
              <h1>Vishal Key Shop</h1>
              <p>Car keys · Smart locks · Duplication</p>
            </div>
          </div>

          <nav className="nav-links">
            <button onClick={() => scrollToId("hero")}>Home</button>
            <button onClick={() => scrollToId("services")}>Services</button>
            <button onClick={() => scrollToId("how-it-works")}>Process</button>
            <button onClick={() => scrollToId("why-us")}>Why Us</button>
            <button onClick={() => scrollToId("areas")}>Service Areas</button>
            <button onClick={() => scrollToId("reviews")}>Reviews</button>
            <button onClick={() => scrollToId("faq")}>FAQ</button>
            <button onClick={() => scrollToId("contact")}>Contact</button>
          </nav>

          <button
            className="nav-cta"
            onClick={() => (window.location.href = phonePrimaryHref)}
          >
            <IconPhone size={16} />
            <span>Call Now</span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section id="hero" className="section hero" data-reveal>
          <div className="container hero-grid">
            <div>
              <div className="hero-kicker">
                <IconKey size={14} />
                <span>Chennai locksmith · Kolathur & nearby</span>
              </div>
              <h2 className="hero-title">
                One call for{" "}
                <span className="accent">every key & lock</span> you own.
              </h2>
              <p className="hero-desc">
                From duplicate house keys to advanced car key programming and
                smart lock setups – Vishal Key Shop keeps your doors secure and
                your day moving.
              </p>

              <div className="hero-badges">
                <div className="hero-badge">
                  <IconKey size={14} />
                  Car & bike key programming
                </div>
                <div className="hero-badge">
                  <IconLock size={14} />
                  House & office lock solutions
                </div>
                <div className="hero-badge">
                  <IconMessage size={14} />
                  WhatsApp support with photos
                </div>
              </div>

              <div className="hero-cta-row">
                <button
                  className="btn-main glow"
                  onClick={() => (window.location.href = waHref)}
                >
                  <IconWhatsApp size={18} />
                  Chat on WhatsApp
                </button>
                <a className="btn-ghost" href={phonePrimaryHref}>
                  <IconPhone size={16} />
                  Call {phonePrimary}
                </a>
              </div>

              <p className="hero-meta">
                <strong>Location:</strong> {address}
                <br />
                <strong>Timings:</strong> Open all days · Call to confirm on
                Sundays/holidays.
              </p>

              <div className="brand-badges">
                <span>Digital key cutting equipment</span>
                <span>Neighbourhood locksmith for Kolathur</span>
                <span>Guidance for smart & digital locks</span>
              </div>
            </div>

            {/* Hero visual */}
            <aside className="hero-card" aria-hidden="true">
              <div className="hero-card-header">
                <span className="hero-chip">Today’s Workboard</span>
                <span className="hero-status">Live job overview</span>
              </div>
              <div className="lock-grid">
                <div className="lock-tile">
                  <h4>Car Key Programming</h4>
                  <p>
                    Hyundai, Maruti, Honda, Toyota and more — chipped, flip and
                    remote keys.
                  </p>
                  <div className="lock-meta">Average: 30–45 minutes</div>
                </div>
                <div className="lock-tile">
                  <h4>Key Duplication</h4>
                  <p>
                    House, office, shutter, locker, mailbox & safe — precision
                    duplicates.
                  </p>
                  <div className="lock-meta">Average: 5–10 minutes/key</div>
                </div>
                <div className="lock-tile">
                  <h4>Lock Repair & Change</h4>
                  <p>
                    Jammed, loose or broken locks repaired, re-keyed or
                    replaced.
                  </p>
                  <div className="lock-meta">On-site based on availability</div>
                </div>
                <div className="lock-tile">
                  <h4>Smart & Digital Locks</h4>
                  <p>
                    Keyless entry, keypad, RFID and hotel-style locks — setup
                    support & guidance.
                  </p>
                  <div className="lock-meta">Consult on call & WhatsApp</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Services</p>
              <h3 className="section-title">All your key & lock needs covered</h3>
              <p className="section-subtitle">
                Visit our Kolathur shop or contact us for guidance. We combine
                locksmith experience with modern programming tools.
              </p>
            </div>

            <div className="services-grid">
              <div className="card">
                <p className="card-badge">Everyday essentials</p>
                <h3>Key Duplication & Cutting</h3>
                <p>
                  Accurate duplicates for your day-to-day keys, made while you
                  wait and tested before you leave.
                </p>
                <ul>
                  <li>House & flat keys</li>
                  <li>Office, shutter & shop keys</li>
                  <li>Locker, cabinet & safe keys</li>
                </ul>
              </div>

              <div className="card">
                <p className="card-badge">On-road peace of mind</p>
                <h3>Car Key Programming</h3>
                <p>
                  Lost, damaged or extra car keys — support for multiple vehicle
                  brands, depending on model and year.
                </p>
                <ul>
                  <li>Remote & flip keys</li>
                  <li>Transponder programming</li>
                  <li>Key shell replacement</li>
                </ul>
              </div>

              <div className="card">
                <p className="card-badge">Security upgrades</p>
                <h3>Lock Installation & Repair</h3>
                <p>
                  Smooth and secure lock operation for doors and entrances at
                  home, shops and offices.
                </p>
                <ul>
                  <li>Door lock replacement</li>
                  <li>Re-key after tenant change</li>
                  <li>Master key planning</li>
                </ul>
              </div>

              <div className="card">
                <p className="card-badge">Smart access</p>
                <h3>Smart & Digital Locks</h3>
                <p>
                  Guidance in choosing and setting up digital locks and keyless
                  entry systems for apartments and homes.
                </p>
                <ul>
                  <li>PIN & combination locks</li>
                  <li>RFID / hotel style locks</li>
                  <li>Selection & setup advice</li>
                </ul>
              </div>

              <div className="card">
                <p className="card-badge">When it cannot wait</p>
                <h3>Emergency Lockout Help</h3>
                <p>
                  Locked out of house, shop or car near Kolathur? Call us — we
                  will guide you and support as per availability.
                </p>
                <ul>
                  <li>Door lockout guidance</li>
                  <li>Car lockout support</li>
                  <li>Priority for genuine emergencies</li>
                </ul>
              </div>

              <div className="card">
                <p className="card-badge">Custom & bulk</p>
                <h3>Special Keys & Bulk Orders</h3>
                <p>
                  Tailored key plans for apartments, offices and industrial
                  spaces needing controlled access.
                </p>
                <ul>
                  <li>Bulk duplicates</li>
                  <li>Numbered / pattern keys</li>
                  <li>Custom lock-key mapping</li>
                </ul>
              </div>
            </div>

            <div className="brands-row">
              <span className="brands-label">Common car brands handled:</span>
              <div className="brands-list">
                <span>Maruti Suzuki</span>
                <span>Hyundai</span>
                <span>Honda</span>
                <span>Toyota</span>
                <span>Tata & more (model dependent)</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Process</p>
              <h3 className="section-title">Simple and transparent workflow</h3>
              <p className="section-subtitle">
                Whether you walk into the shop or message us on WhatsApp, we
                keep the process clear from first contact to final testing.
              </p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Share your issue</h4>
                <p>
                  Call or WhatsApp with details and photos of your key, lock or
                  vehicle. We check feasibility and options.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Get a clear estimate</h4>
                <p>
                  We explain what can be done, expected time and approximate
                  cost before starting the work.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h4>Cut, program, test</h4>
                <p>
                  The work is completed and tested carefully with you. You leave
                  with working keys and clear guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="section" data-reveal>
          <div className="container columns-2">
            <div>
              <p className="section-kicker">Why Vishal Key Shop</p>
              <h3 className="section-title">
                More than keys — we protect your entry points.
              </h3>
              <p className="section-subtitle">
                Consistent work in and around Kolathur with a focus on
                reliability, clarity and long-term safety for families and
                businesses.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <h4>Dedicated locksmiths</h4>
                  <p>
                    Working daily with keys and locks of many types — from basic
                    padlocks to modern immobilizer keys.
                  </p>
                </div>
                <div className="feature-item">
                  <h4>Honest communication</h4>
                  <p>
                    You understand what is happening, why it is needed and how
                    much it costs — no surprises.
                  </p>
                </div>
                <div className="feature-item">
                  <h4>Updated tools</h4>
                  <p>
                    Digital cutting and programming tools to support a growing
                    list of lock and vehicle systems.
                  </p>
                </div>
                <div className="feature-item">
                  <h4>Local trust</h4>
                  <p>
                    Regular customers from Vetri Nagar, Kolathur, Puthagaram,
                    Perambur side and surrounding areas.
                  </p>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-pill">
                  Hundreds of keys cut every month
                </div>
                <div className="stat-pill">
                  Strong repeat and referral customers
                </div>
                <div className="stat-pill">Focused on quality over rush</div>
              </div>
            </div>

            <div>
              <div className="list-badge">
                <span>Quick details</span>
              </div>
              <div className="contact-card" style={{ marginTop: "1rem" }}>
                <p className="contact-label">Shop name</p>
                <p className="contact-value">Vishal Key Shop</p>

                <div className="contact-row">
                  <p className="contact-label">Address</p>
                  <p className="contact-value">{address}</p>
                </div>

                <div className="contact-row">
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">
                    <a href={phonePrimaryHref}>{phonePrimary}</a> ·{" "}
                    <a href={phoneSecondaryHref}>{phoneSecondary}</a>
                  </p>
                </div>

                <div className="contact-row">
                  <p className="contact-label">WhatsApp</p>
                  <p className="contact-value">
                    <a href={waHref} target="_blank" rel="noreferrer">
                      {whatsAppNumber}
                    </a>
                  </p>
                </div>

                <div className="contact-row">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>

                <div className="contact-actions">
                  <a className="btn-main" href={phonePrimaryHref}>
                    <IconPhone size={16} />
                    Call now
                  </a>
                  <a
                    className="btn-ghost"
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconLocation size={16} />
                    Open in Maps
                  </a>
                </div>

                <p className="card-note">
                  For car keys and complex locks, send photos on WhatsApp so we
                  can confirm feasibility and pricing faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section id="areas" className="section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Service coverage</p>
              <h3 className="section-title">Primarily serving North Chennai</h3>
              <p className="section-subtitle">
                On-site visits are subject to schedule and distance. Call or
                WhatsApp to confirm support for your exact location.
              </p>
            </div>

            <div className="area-pills">
              <span className="area-pill">Vetri Nagar</span>
              <span className="area-pill">Kolathur</span>
              <span className="area-pill">Puthagaram</span>
              <span className="area-pill">Perambur belt</span>
              <span className="area-pill">Madhavaram side</span>
              <span className="area-pill">Retteri & nearby</span>
            </div>
          </div>
        </section>

        {/* REVIEWS MARQUEE */}
        <section id="reviews" className="section reviews-section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Customer reviews</p>
              <h3 className="section-title">
                Feedback from people around Kolathur & nearby
              </h3>
              <p className="section-subtitle">
                These sample reviews reflect the type of feedback we aim for.
                Replace with your real Google or customer reviews when ready.
              </p>
            </div>

            <div className="review-marquee-wrapper">
              <div className="review-marquee">
                {reviews.concat(reviews).map((r, idx) => (
                  <article className="review-card" key={idx}>
                    <div className="review-header">
                      <div className="review-name">{r.name}</div>
                      <div className="review-location">{r.location}</div>
                    </div>
                    <p className="review-text">{r.text}</p>
                    <div className="review-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} filled={i < r.rating} />
                      ))}
                      <span className="review-rating-label">5.0</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">FAQ</p>
              <h3 className="section-title">
                Common questions about keys & locks
              </h3>
              <p className="section-subtitle">
                A few doubts we regularly answer for customers before they
                visit, especially for vehicle keys and digital locks.
              </p>
            </div>

            <div className="faq-grid">
              <div className="faq-card">
                <h4>Can you make a car key if I lost the original?</h4>
                <p>
                  In many cases yes, depending on the car brand, model and year.
                  Please share vehicle details and photos of available keys,
                  locks and RC for proper guidance.
                </p>
              </div>
              <div className="faq-card">
                <h4>How long does key duplication usually take?</h4>
                <p>
                  Standard house and office keys normally take 5–10 minutes. Car
                  keys and special locks take longer due to programming and
                  testing.
                </p>
              </div>
              <div className="faq-card">
                <h4>Do you visit homes or only work from the shop?</h4>
                <p>
                  Most work is done at the shop in Vetri Nagar. Based on
                  location and schedule, on-site support may be possible — call
                  to check availability.
                </p>
              </div>
              <div className="faq-card">
                <h4>What payment methods do you accept?</h4>
                <p>
                  Cash and UPI are typically supported. For other options, please
                  confirm with us at the time of service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" data-reveal>
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Contact & location</p>
              <h3 className="section-title">Reach Vishal Key Shop</h3>
              <p className="section-subtitle">
                Call, WhatsApp or navigate to the shop. For vehicle keys and
                special locks, photos shared on WhatsApp help us respond faster
                and more accurately.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-row">
                  <p className="contact-label">Primary phone</p>
                  <p className="contact-value">
                    <a href={phonePrimaryHref}>{phonePrimary}</a>
                  </p>
                </div>
                <div className="contact-row">
                  <p className="contact-label">Secondary phone</p>
                  <p className="contact-value">
                    <a href={phoneSecondaryHref}>{phoneSecondary}</a>
                  </p>
                </div>
                <div className="contact-row">
                  <p className="contact-label">WhatsApp</p>
                  <p className="contact-value">
                    <a href={waHref} target="_blank" rel="noreferrer">
                      {whatsAppNumber}
                    </a>
                  </p>
                </div>
                <div className="contact-row">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                <div className="contact-row">
                  <p className="contact-label">Address</p>
                  <p className="contact-value">{address}</p>
                </div>

                <div className="contact-actions">
                  <a className="btn-main" href={phonePrimaryHref}>
                    <IconPhone size={16} />
                    Call now
                  </a>
                  <a
                    className="btn-ghost"
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconWhatsApp size={16} />
                    WhatsApp enquiry
                  </a>
                  <a
                    className="btn-ghost"
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconLocation size={16} />
                    Open in Maps
                  </a>
                </div>

                <p className="card-note">
                  Save our contact as <strong>“Vishal Key Shop”</strong> so you
                  can reach us quickly during future emergencies.
                </p>
              </div>

              <div className="map-embed">
                <div className="map-header">
                  <div>
                    <p className="map-title">Find us on Google Maps</p>
                    <p className="map-subtitle">
                      Tap for live navigation to the shop
                    </p>
                  </div>
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="map-button"
                  >
                    Get Directions
                  </a>
                </div>

                <iframe
                  title="Vishal Key Shop Location"
                  src={mapEmbedSrc}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER – 4 COLUMNS + BOTTOM BAR */}
      <footer className="footer">
        <div className="container footer-top">
          {/* Brand / intro */}
          <div className="footer-col footer-brand">
            <div className="footer-logo-pill">
              <div className="footer-logo-icon">
                <IconKey size={18} />
              </div>
            </div>
            <h3 className="footer-title">Vishal Key Shop</h3>
            <p className="footer-tagline">
              Your trusted partner for all locksmith and security needs in
              Chennai.
            </p>

            <div className="footer-social-row">
              <a href={waHref} target="_blank" rel="noreferrer">
                <span className="footer-social-circle whatsapp">
                  <IconWhatsApp size={16} />
                </span>
              </a>
              <a href={phonePrimaryHref}>
                <span className="footer-social-circle phone">
                  <IconPhone size={16} />
                </span>
              </a>
              <a href={`mailto:${email}`}>
                <span className="footer-social-circle mail">
                  <IconMessage size={16} />
                </span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <button
              className="footer-link"
              type="button"
              onClick={() => scrollToId("hero")}
            >
              Home
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => scrollToId("services")}
            >
              Services
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => scrollToId("why-us")}
            >
              Why Us
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Contact
            </button>
          </div>

          {/* Services list */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <span className="footer-text">Key Duplication</span>
            <span className="footer-text">Lock Repair & Change</span>
            <span className="footer-text">Car Keys & Programming</span>
            <span className="footer-text">Smart & Digital Locks</span>
            <span className="footer-text">Emergency Support</span>
          </div>

          {/* Contact details */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">{address}</p>
            <a className="footer-text" href={phonePrimaryHref}>
              {phonePrimary}
            </a>
            <a className="footer-text" href={phoneSecondaryHref}>
              {phoneSecondary}
            </a>
            <a className="footer-text" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="container footer-bottom">
          <span className="footer-bottom-text">
            © 2025 Vishal Key Shop. All rights reserved.
          </span>
          <span className="footer-made">
  <span className="footer-heart">
    <IconHeart size={14} />
  </span>
  <a
    href="https://www.zapsters.in/"
    target="_blank"
    rel="noreferrer"
    className="footer-zapsters-link"
    style={{
      textDecoration: "none",
      color: "inherit",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    Proudly made by <span style={{ textDecoration: "underline" }}>Zapsters</span>
  </a>
</span>

        </div>
      </footer>

      {/* MOBILE QUICK ACTION BAR */}
      <div className="mobile-quick-bar">
        <a
          className="quick-btn"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className="quick-icon">
            <IconWhatsApp size={18} />
          </span>
          <span className="quick-label">WhatsApp</span>
        </a>
        <a className="quick-btn" href={phonePrimaryHref}>
          <span className="quick-icon">
            <IconPhone size={18} />
          </span>
          <span className="quick-label">Call</span>
        </a>
        <a
          className="quick-btn"
          href={mapHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className="quick-icon">
            <IconLocation size={18} />
          </span>
          <span className="quick-label">Location</span>
        </a>
      </div>
    </div>
  );
}

export default App;
