import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CalendarClock,
  Car,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FileText,
  Headphones,
  Home,
  Layers,
  Map,
  MessageCircle,
  Navigation,
  Package,
  Radar,
  Route,
  ScanLine,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { Button } from "./components/ui/button";
import "./styles.css";

const phoneImage = new URL("../ref_img/image.png", import.meta.url).href;
const routeMapImage = new URL("../ref_img/map.png", import.meta.url).href;

function ShipmentCard({ tone = "orange", id, badge, from, to, progress }) {
  return (
    <article className={`shipment-card ${tone}`}>
      <div className="shipment-top">
        <span className="ship-icon">
          <Zap size={15} strokeWidth={2.4} />
        </span>
        <div>
          <p>Tracking ID</p>
          <strong>{id}</strong>
        </div>
        <span className="status-badge">{badge}</span>
      </div>
      <div className="progress-track">
        <span style={{ width: progress }} />
      </div>
      <div className="shipment-route">
        <span>
          <small>Sender</small>
          {from}
        </span>
        <span>
          <small>To</small>
          {to}
        </span>
      </div>
    </article>
  );
}

function StatPill({ icon, title, value, accent = "blue" }) {
  return (
    <article className="stat-pill">
      <span className={`stat-icon ${accent}`}>{icon}</span>
      <span>
        <small>{title}</small>
        <strong>{value}</strong>
      </span>
    </article>
  );
}

function TimelineCard({ title, items, compact = false }) {
  return (
    <article className="dashboard-card timeline-card">
      <h3>{title}</h3>
      <div className={`timeline-list ${compact ? "compact" : ""}`}>
        {items.map((item, index) => (
          <div className="timeline-row" key={`${title}-${item}-${index}`}>
            <span className="time-label">Time</span>
            <span className={`timeline-dot ${index === 0 ? "active" : ""}`} />
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function TrackingDashboard() {
  const timelineItems = [
    "Out for Delivery",
    "Arrived at Hub",
    "Predicted ETA Update",
    "Delivered",
  ];

  return (
    <div className="dashboard-section" id="demo" aria-label="Dynamic tracking dashboard">
      <div className="dashboard-shell">
        <div className="dashboard-grid">
          <article className="dashboard-card route-card">
            <h2>Dynamic Tracking Dashboard</h2>
            <p>Route Predictor</p>
            <div className="route-predictor" aria-hidden="true">
              <span className="route-node blue">?</span>
              <span className="route-line blue" />
              <span className="route-node orange">Hub</span>
              <span className="route-line orange" />
              <span className="route-node orange">Zone</span>
              <span className="route-line muted" />
              <span className="route-node gray">✓</span>
            </div>
            
          </article>

          <article className="dashboard-card mini-map-card" aria-label="Route preview map">
            <img src={routeMapImage} alt="Live route preview map" />
            <span className="map-pin">●</span>
          </article>

          <article className="dashboard-card distance-card">
            <small>Distance Remaining</small>
            <strong>7.3 km</strong>
            <span>Estimated Time</span>
            <p>18 minutes <em>(at 2:45 PM)</em></p>
          </article>

          <TimelineCard title="Notification Timeline" items={timelineItems} />
          <TimelineCard title="Upcoming alerts" items={timelineItems} compact />

          <article className="dashboard-card layers-card">
            <h3>Real-time Map Layers</h3>
            <div className="layer-grid">
              <span className="layer-active">
                <Share2 size={20} strokeWidth={1.8} />
              </span>
              <span>
                <Map size={20} strokeWidth={1.8} />
              </span>
              <span>
                <Layers size={20} strokeWidth={1.8} />
              </span>
              <span>
                <Navigation size={20} strokeWidth={1.8} />
              </span>
              <span>
                <Route size={20} strokeWidth={1.8} />
              </span>
              <span>
                <Car size={20} strokeWidth={1.8} />
              </span>
            </div>
            <div className="layer-labels">
              <span>Rider<br />Location</span>
              <span>Road<br />Conditions</span>
              <span>Traffic<br />Flow</span>
            </div>
          </article>

          
        </div>
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <section className="feature-section" aria-label="Live parcel tracking">
      <div className="feature-shell">
        <div className="feature-copy">
          <a href="#demo" className="feature-eyebrow">
            Live tracking
            <ChevronRight size={13} strokeWidth={2.2} />
          </a>
          <h2>
            Know exactly
            <span>where your parcel is.</span>
          </h2>
          <p>
            Eliminate uncertainty. Enter your tracking ID for continuous, precision updates.
            From real-time location and granular route progress to precise ETA windows and
            instant notifications, stay informed at every step.
          </p>
        </div>

        <figure className="feature-map">
          <img src={routeMapImage} alt="Parcel route summary map" />
        </figure>

        <TrackingDashboard />
      </div>
    </section>
  );
}

function DeliveryToolsSection() {
  const tools = [
    {
      icon: <Radar size={21} strokeWidth={1.9} />,
      title: "Rider management",
      copy: "Assign work, monitor capacity, and keep every delivery team visible.",
    },
    {
      icon: <CreditCard size={21} strokeWidth={1.9} />,
      title: "Flexible payments",
      copy: "Support prepaid, cash-on-delivery, and business account workflows.",
    },
    {
      icon: <ShieldCheck size={21} strokeWidth={1.9} />,
      title: "Business controls",
      copy: "Protect orders with proof, permissions, and clear delivery histories.",
    },
  ];
  const deliverySteps = [
    {
      icon: <CircleDollarSign size={18} strokeWidth={2} />,
      title: "Book pickup",
      copy: "Create an order, choose the route, and confirm package details.",
    },
    {
      icon: <Truck size={18} strokeWidth={2} />,
      title: "Rider dispatched",
      copy: "Assign the closest rider and share status with your customer.",
    },
    {
      icon: <Radar size={18} strokeWidth={2} />,
      title: "Track live",
      copy: "Follow every checkpoint, route update, and ETA change.",
    },
    {
      icon: <ShieldCheck size={18} strokeWidth={2} />,
      title: "Delivered",
      copy: "Capture proof of delivery and close the order instantly.",
    },
  ];
  const pricingPlans = [
    {
      title: "Starter",
      note: "Perfect for personal deliveries",
      price: "LKR.1500",
      cta: "Start free",
      features: ["Real-time tracking", "Up to 50 parcels", "Email updates", "Basic support"],
    },
    {
      title: "Business",
      note: "Growing teams and courier workflows",
      price: "LKR.17999",
      cta: "Choose plan",
      featured: true,
      features: ["Route automation", "Rider dashboard", "Team roles", "SMS notifications"],
    },
    {
      title: "Custom",
      note: "Built for high-demand delivery networks",
      price: "Contact us",
      cta: "Contact us",
      features: ["Custom routing", "API integration", "Advanced analytics", "Dedicated support"],
    },
  ];

  return (
    <section className="tools-section" id="tools" aria-label="Delivery operations tools">
      <div className="tools-shell">
        <div className="section-heading tools-heading">
          <a href="#tools" className="eyebrow">
            Admin suite
            <ChevronRight size={13} strokeWidth={2.2} />
          </a>
          <h2>
            Everything you need
            <span>to track deliveries</span>
          </h2>
        </div>

        <div className="tools-bento">
          <article className="tools-card tools-card-wide invoice-card">
            <div className="invoice-preview">
              <div>
                <small>Order charges</small>
                <strong>$248.00</strong>
              </div>
              <span>Paid</span>
            </div>
            <div className="invoice-preview muted">
              <div>
                <small>Delivery estimate</small>
                <strong>LKR. 1500</strong>
              </div>
              <span>Ready</span>
            </div>
            <h3>Smart Annotations</h3>
            <p>Simplify the heavy work with smart admin dashboards with simple tools </p>
          </article>

          <article className="tools-card tools-card-wide alert-card">
            <div className="alert-preview">
              <span>
                <MessageCircle size={18} strokeWidth={2} />
              </span>
              <div>
                <strong>New request</strong>
                <small>Customer notification queued</small>
              </div>
              <em>+12 min</em>
            </div>
            <h3>Parcel notifications</h3>
            <p>Send pickup, delay, ETA, and delivered updates automatically.</p>
          </article>

          {tools.map((tool) => (
            <article className="tools-card compact-tool" key={tool.title}>
              <span className="tool-icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.copy}</p>
            </article>
          ))}

          <article className="tools-card schedule-card">
            <span className="tool-icon">
              <CalendarClock size={21} strokeWidth={1.9} />
            </span>
            <div className="schedule-pills">
              <span>Morning run</span>
              <span>Returns</span>
            </div>
            <div className="schedule-stack">
              <span>
                <strong>Pickup</strong>
                <em>10:30 AM</em>
              </span>
              <span>
                <strong>Drop-off</strong>
                <em>01:45 PM</em>
              </span>
            </div>
            <h3>Delivery scheduling</h3>
            <p>Plan recurring routes and keep high-priority jobs on time.</p>
          </article>
        </div>

        <div className="delivery-flow">
          <div className="flow-copy">
            <a href="#steps" className="eyebrow">
              Smart process
              <ChevronRight size={13} strokeWidth={2.2} />
            </a>
            <h2>
              Delivering, in 4
              <span>simple steps.</span>
            </h2>
            <div className="route-loop" aria-hidden="true">
              <span className="route-loop-dot">
                <Zap size={13} strokeWidth={2.5} />
              </span>
              <div className="route-loop-card">
                <strong>Your package is safe.</strong>
                <small>Track movement, verify proof, and notify every user.</small>
              </div>
              <Button className="flow-button">
                <Truck size={14} strokeWidth={2.4} />
                Get started
              </Button>
            </div>
          </div>

          <div className="flow-timeline" id="steps">
            {deliverySteps.map((step, index) => (
              <article className="flow-step-card" key={step.title}>
                <span className={`flow-step-icon ${index === 0 ? "active" : ""}`}>
                  {step.icon}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pricing-section" id="pricing">
          <div className="section-heading pricing-heading">
            <a href="#pricing" className="eyebrow">
              Pricing
              <ChevronRight size={13} strokeWidth={2.2} />
            </a>
            <h2>Plans for every scale</h2>
            <p>Choose a plan that matches your delivery volume.</p>
            <div className="billing-toggle" aria-label="Billing period">
              <span>Monthly</span>
              <strong />
              <span>Yearly</span>
            </div>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.title}>
                <h3>{plan.title}</h3>
                <p>{plan.note}</p>
                <strong className="plan-price">{plan.price}</strong>
                <span className="plan-subtext">
                  {plan.title === "Custom" ? "For enterprise teams" : "per active delivery team"}
                </span>
                <Button className={`plan-button ${plan.featured ? "featured" : ""}`}>
                  {plan.cta}
                  <ArrowRight size={14} strokeWidth={2.6} />
                </Button>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Headphones size={13} strokeWidth={2.2} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-inner">
          <nav className="hero-nav" aria-label="Main navigation">
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#pricing">Pricing</a>
              <a href="blog">Blog</a>
            </div>
            <a className="brand" href="#home" aria-label="TracemyPack home">
              <span className="brand-mark">
                <Boxes size={17} strokeWidth={2.4} />
              </span>
              <span>
                <strong>Trace</strong>
                <em>myPack</em>
              </span>
            </a>
            <Button className="nav-cta">
              Get started
              <ArrowRight size={15} strokeWidth={2.6} />
            </Button>
          </nav>

          <div className="hero-copy">
            <a href="#soon" className="eyebrow">
              Learn more about TracemyPack
              <ChevronRight size={13} strokeWidth={2.2} />
            </a>
            <h1>
              Tracking made simple
              <span>for modern businesses</span>
            </h1>
            <p>
              The all in-one courier & logistics platform that connects senders, riders, and
              businesses - with real-time tracking, instant updates.
            </p>
            <div className="hero-actions">
              <Button className="primary-action">
                <span>
                  <Zap size={15} strokeWidth={2.4} />
                </span>
                <span>
                  CheckIn now
                  <small>24 day bet that - No need handover</small>
                </span>
              </Button>
              <a className="demo-link" href="#demo">
                Request demo <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Delivery dashboard preview">
            <div className="shipment-stack">
              <ShipmentCard
                id="48TO-8989-09"
                badge="In transit"
                from="Senby Remdo"
                to="A Botrog ayf CLobing"
                progress="68%"
              />
              <ShipmentCard
                tone="navy"
                id="AGTG.8969-09"
                badge="Offshore"
                from="Senby Remdo"
                to="Ternar Oledng"
                progress="36%"
              />
              <div className="note-card">
                <span>Tracking ID</span>
                <strong>0010-0007PO</strong>
                <small>Delivered</small>
              </div>
            </div>

            <figure className="phone-frame">
              <img src={phoneImage} alt="Live delivery map on a phone" />
            </figure>

            <div className="stats-stack">
              <StatPill
                title="Patent packages"
                value="120"
                icon={<Package size={18} strokeWidth={2.3} />}
              />
              <StatPill
                title="Belcever"
                value="10"
                accent="pink"
                icon={<Clock3 size={18} strokeWidth={2.3} />}
              />
              <StatPill
                title="Guten kiccoenst"
                value="45"
                icon={<Package size={18} strokeWidth={2.3} />}
              />
              <StatPill
                title="Cuption pastiotase"
                value="45"
                icon={<Package size={18} strokeWidth={2.3} />}
              />
            </div>
          </div>
        </div>
      </section>
      <FeatureSection />
      <DeliveryToolsSection />
    </main>
  );
}

function BlogPage() {
  const articleGroups = [
    {
      icon: <Home size={15} strokeWidth={2.3} />,
      title: "Getting Started",
      articles: [
        {
          title: "What is TraceMyPack?",
          slug: "what-is-tracemypack",
          intro: "TraceMyPack is a delivery tracking platform for courier teams, shops, and businesses that need real-time visibility from pickup to delivery.",
          sections: [
            {
              heading: "Product overview",
              body: [
                "TraceMyPack helps courier companies, delivery agencies, and logistics teams modernize their operations through real-time tracking, driver management, automated notifications, and centralized delivery monitoring.",
                
                "Traditional delivery systems often provide limited visibility into shipment progress, leaving customers uncertain about the location and arrival time of their packages while increasing the workload on support teams. TraceMyPack bridges this gap by creating a transparent delivery workflow that keeps dispatchers, drivers, businesses, and customers connected through live updates and accurate delivery information.",
                
                "From order creation and rider assignment to real-time tracking and proof of delivery, the platform provides the tools needed to improve operational efficiency, reduce customer inquiries, increase delivery visibility, and deliver a more reliable customer experience.",
                { img: "D:\\web_dev\\New folder\\ref_img\\dash.png", alt: "Delivery route preview", caption: "Delivery zones and sample route." },
                "Hello there"
              ],
              
            },
            
            {
            heading: "Who it helps",
            body: [
              "TraceMyPack serves every stakeholder involved in the delivery process. From business owners seeking operational visibility to customers waiting for important packages, the platform provides the tools needed to create a more transparent, efficient, and reliable delivery experience.",
              
              "Each user benefits from access to real-time information, streamlined workflows, and delivery insights that help reduce delays, improve communication, and eliminate uncertainty throughout the delivery journey."
            ],
            list: [
              "Business owners who need visibility into delivery operations",
              "Dispatchers responsible for coordinating deliveries and drivers",
              "Drivers managing pickups, routes, and proof of delivery",
              "Customer support teams resolving delivery-related questions",
              "Online stores requiring reliable shipment tracking",
              "Courier agencies looking to modernize their delivery workflow",
              "Logistics managers monitoring performance and efficiency",
              "Customers who want accurate delivery updates and tracking"
            ]
          },
          ],
        },
        {
          title: "How it works",
          slug: "how-it-works",
          aliases: ["how-it-work"],
          intro: "TraceMyPack works by turning each delivery into a trackable workflow with assigned riders, live checkpoints, customer updates, and final proof capture.",
          sections: [
            {
              heading: "Layers of TraceMyPack",
              body: [
                {img: "D:\\web_dev\\New folder\\ref_img\\app.png" ,alt: "Driver App vs Customer App"},
                "The TraceMyPack platform consists of two primary experiences: the Driver Application and the Customer Tracking Experience. The driver application is designed to help delivery personnel efficiently manage their daily assignments while providing delivery companies with real-time visibility into field operations.",
    
            "Drivers receive delivery tasks directly from their courier company through a dedicated mobile application. Instead of relying on phone calls, paper records, or manual coordination, drivers have access to a structured workspace that clearly displays all assigned deliveries, delivery priorities, customer information, package details, and route progress.",
            
            "A live map provides a visual overview of all delivery destinations, allowing drivers to understand what deliveries are ahead of them and where they need to travel next. This helps improve route awareness, reduce navigation errors, and create a more organized delivery workflow throughout the day.",
            
            "As deliveries progress, drivers can update package statuses, record delivery events, capture proof of delivery, and communicate important information back to dispatch teams. Every action is synchronized in real time, ensuring that operations teams and customers always have access to the latest delivery information.",
            
            "By giving drivers a clear view of their workload, route progress, and delivery responsibilities, the application helps reduce confusion, improve delivery efficiency, and create a more reliable experience for both delivery companies and their customers."
          
            ],
            },
            {
              heading: "Driver Portal",
              body: [
                "The driver is assigned all scheduled orders for the following day, allowing them to plan their route and workload in advance. Through the mobile application, drivers can view a live GPS navigation map that guides them directly to each customer's location, reducing confusion and minimizing delivery delays. The system provides real-time route assistance, optimized navigation, and clear delivery instructions for every assigned package.",
                {img: "ref_img\\dri_job.png" ,alt: "Delivery route preview", caption: "Delivery zones and sample route."},
                "As drivers progress through their deliveries, the platform continuously updates the status of each order, enabling both the delivery company and customers to stay informed about the package's journey. Drivers can mark deliveries as completed, report issues, confirm successful handovers, and receive new updates instantly through the application. This creates a streamlined workflow that improves operational efficiency, increases delivery accuracy, and ensures a better overall experience for drivers, businesses, and customers alike.",
                "Additionally, the application helps drivers manage multiple deliveries simultaneously by organizing tasks based on priority, location, and delivery schedules. By having complete visibility of upcoming stops and delivery requirements, drivers can complete more deliveries in less time while maintaining high service standards and reducing operational costs for the delivery service provider."]
            },
            {
              heading: "Customer Tracking",
              body: [
                "On the customer side, the system provides a transparent and real-time delivery experience that keeps users informed at every stage of their order journey. Once an order is placed, customers can track its status from dispatch to final delivery through a live interface that shows where their package is at any given moment. The platform integrates live GPS tracking, allowing customers to view the exact movement of the delivery driver on a map. This reduces uncertainty and eliminates the need for constant manual updates or support inquiries. Customers also receive timely notifications at key stages such as order confirmation, pickup, route departure, and imminent arrival. In addition, estimated delivery times are dynamically updated based on real-time traffic and driver progress, giving customers a more accurate expectation of when their package will arrive. If needed, they may also access delivery details, contact support, or communicate delivery instructions directly through the system. Overall, the customer side is designed to enhance trust, convenience, and transparency—turning the delivery process into a predictable and smooth experience rather than a black box.",
                "A real-time map that shows the driver's current location and an estimated time of arrival (ETA).",
                "Step-by-step delivery timeline with checkpoints (picked up, en route, near you, delivered) so customers always know what happened and what's next.",
                "Smart ETA updates that adjust as the rider moves, plus push/SMS/email notifications for key events (assigned, on the way, delayed, delivered).",
                "Customer actions such as providing delivery instructions, marking a preferred drop-off location, or requesting a reschedule directly from the tracking view.",
                "Secure proof of delivery including photo, signature, or delivered-to details, visible to the customer immediately after completion.",
                "In-app contact options to reach the driver or support with a single tap, plus delivery status history for easy dispute resolution and support handoffs.",
                "Post-delivery feedback and ratings to help improve service quality and provide actionable insights to the delivery team."
              ]
            }
          ],
        },
        {
          title: "Quick setup",
          slug: "quick-setup",
          intro: "Use this setup checklist to configure TraceMyPack for your first delivery workflow.",
          sections: [
            {
              heading: "Simple Flow to Assign Tasks",
              body: [
                "The operater can assign tasks to the drivers using the most simplyfied way so no frustration is needed.",
                "TracemyPack offers a simple four step workflow the operator to create orders systematicaly",
                
                {img: "ref_img\\hiw1.png", alt:"First step",caption: "Use this to create tasks for the drivers"},
                "Select the 'Add Order' option in your dashboard then follow the instruction , this small setup can be configured as per the need of your company.",

              ]
              //list: ["Add your business profile and delivery zones", "Invite admins, dispatchers, and riders", "Create package types and delivery fee rules", "Configure customer notification templates", "Create a test delivery and verify the tracking flow"],
            },
            {
              heading: "Driver Dashboard",
              body: [
                "The Driver Dashboard gives drivers a single, mobile-first view of their day: an ordered manifest of assigned stops, counts and priorities, estimated route distance and ETA, and any dispatch notes. Drivers review the manifest before departure, confirm vehicle readiness, and use the built-in optimized route to navigate from stop to stop; tapping a stop reveals navigation, contact details, delivery instructions, and pickup controls.",
                "During deliveries the dashboard keeps the system in sync—drivers scan or confirm parcels, mark stop states (En route, Arrived, Delayed), capture proof of delivery (photo, signature, recipient name), and file structured exceptions when needed. Events are queued offline and automatically synced, dispatch can push reassignments or urgent tasks, and an end-of-shift summary reconciles completed stops, unresolved items, and proof for audit and reporting."
              ],
              list: [
                "Review manifest and confirm vehicle readiness",
                "Start optimized route and navigate to first stop",
                "Scan/confirm pickups and update counts",
                "Mark stop states: En route → Arrived → Delivered",
                "Capture proof (photo/signature) and add notes",
                "Handle exceptions with structured reasons and photos",
                "Receive and accept urgent reassignments from dispatch",
                "Sync offline events when network is available",
                "Run end-of-shift reconciliation and submit report"
              ]
            },
          ],
        },
      ],
    },
    {
      icon: <Layers size={15} strokeWidth={2.3} />,
      title: "Operations",
      articles: [
        {
          title: "Syncing your tools",
          slug: "syncing-your-tools",
          intro: "Connect TraceMyPack with the tools your team already uses for orders, support, and customer communication.",
          sections: [
            {
              heading: "Typical sync points",
              list: ["Import orders from your shop or admin system", "Export delivery status to customer support", "Send notification events to SMS or email tools", "Use APIs to keep internal dashboards updated"],
            },
            {
              heading: "Best practice",
              body: ["Keep TraceMyPack as the delivery source of truth. External systems should create or read deliveries, but rider progress and proof events should stay centralized in the tracking workflow."],
            },
          ],
        },
        {
          title: "Route planning",
          slug: "route-planning",
          intro: "Route planning helps dispatchers group deliveries by location, priority, rider capacity, and time windows.",
          sections: [
            {
              heading: "Planning a route",
              body: ["Start by grouping deliveries by zone. Then prioritize urgent packages, identify return pickups, and assign riders based on workload. Dispatchers can monitor each route and adjust when delays happen."],
            },
            {
              heading: "What to monitor",
              list: ["Remaining parcel count", "Distance to next stop", "Delayed or blocked deliveries", "Rider availability", "Customer ETA changes"],
            },
          ],
        },
        {
          title: "Team workflows",
          slug: "team-workflows",
          intro: "TraceMyPack supports clear roles for admins, dispatchers, riders, and support agents.",
          sections: [
            {
              heading: "Suggested roles",
              list: ["Admins configure pricing, users, and system settings", "Dispatchers create deliveries and assign riders", "Riders update delivery progress and proof", "Support agents use tracking history to answer customer questions"],
            },
            {
              heading: "Operational rhythm",
              body: ["Review pending deliveries at the start of the day, assign routes before pickup windows, monitor exceptions during transit, and reconcile proof of delivery before closing daily operations."],
            },
          ],
        },
      ],
    },
    {
      icon: <Sparkles size={15} strokeWidth={2.3} />,
      title: "Advanced Features",
      articles: [
        {
          title: "Smart notifications",
          slug: "smart-notifications",
          intro: "Smart notifications keep customers informed without requiring manual calls from your team.",
          sections: [
            {
              heading: "Useful notification moments",
              list: ["Delivery created", "Rider assigned", "Package picked up", "ETA changed", "Delivery delayed", "Delivered successfully"],
            },
            {
              heading: "Tone and timing",
              body: ["Keep messages short, status-focused, and action-oriented. Send updates only when the customer needs to know something meaningful, especially when the ETA or delivery state changes."],
            },
          ],
        },
        {
          title: "Proof of delivery",
          slug: "proof-of-delivery",
          intro: "Proof of delivery gives your business a clear record that a parcel reached the correct destination.",
          sections: [
            {
              heading: "Proof options",
              list: ["Customer signature", "Rider completion note", "Timestamped delivery status", "Recipient name", "Failed delivery reason"],
            },
            {
              heading: "Why it matters",
              body: ["A reliable proof trail reduces disputes, improves support response time, and helps managers identify recurring delivery issues."],
            },
          ],
        },
        {
          title: "API integrations",
          slug: "api-integrations",
          intro: "APIs let teams connect TraceMyPack with ecommerce, billing, support, or custom operational systems.",
          sections: [
            {
              heading: "Common API workflows",
              list: ["Create delivery orders from an online store", "Fetch live tracking status for a customer portal", "Send delivery events to support software", "Export completed deliveries for reporting"],
            },
            {
              heading: "Implementation tip",
              body: ["Begin with order creation and status reading before adding advanced automation. This keeps integration scope small and makes testing easier."],
            },
          ],
        },
      ],
    },
    {
      icon: <MessageCircle size={15} strokeWidth={2.3} />,
      title: "Community",
      articles: [
        {
          title: "Customer stories",
          slug: "customer-stories",
          intro: "See how different teams can use TraceMyPack to improve delivery communication and reduce support workload.",
          sections: [
            {
              heading: "Small shop workflow",
              body: ["A small retail team can create deliveries from daily orders, assign a rider, and share tracking links so customers know when packages are on the way."],
            },
            {
              heading: "Courier workflow",
              body: ["A courier team can use zones, rider dashboards, proof of delivery, and exception tracking to keep dispatch decisions organized throughout the day."],
            },
          ],
        },
        {
          title: "Release notes",
          slug: "release-notes",
          intro: "Track product updates, new delivery features, and workflow improvements.",
          sections: [
            {
              heading: "Latest focus areas",
              list: ["Cleaner admin dashboard views", "Better delivery step tracking", "Pricing plan improvements", "More flexible customer notification flows"],
            },
          ],
        },
        {
          title: "Support channels",
          slug: "support-channels",
          intro: "Use support channels to resolve delivery issues, onboarding questions, and integration setup.",
          sections: [
            {
              heading: "Before contacting support",
              list: ["Check the delivery tracking ID", "Review the latest rider status", "Confirm the customer contact details", "Capture screenshots or timestamps for issues"],
            },
            {
              heading: "What support can help with",
              body: ["Support can help with account setup, workflow configuration, tracking issues, proof of delivery questions, and integration planning."],
            },
          ],
        },
      ],
    },
  ];
  const allArticles = articleGroups.flatMap((group) =>
    group.articles.map((article) => ({ ...article, group: group.title }))
  );
  const currentSlug = window.location.pathname.replace(/^\/blog\/?/, "").replace(/\/$/, "");
  const currentArticle = allArticles.find(
    (article) => article.slug === currentSlug || article.aliases?.includes(currentSlug)
  );
  const isIndex = !currentSlug;
  const quickLinks = allArticles.slice(0, 3);
  const latestArticles = allArticles.slice(3, 9);
  const sidebarGroups = [
    ...articleGroups,
  ];
  const categories = [
    {
      icon: <Package size={22} strokeWidth={2.1} />,
      title: "Getting Started",
      copy: "Learn the basics of tracking, delivery updates, and customer visibility.",
    },
    {
      icon: <Route size={22} strokeWidth={2.1} />,
      title: "Advanced Features",
      copy: "Explore automation, route insights, proof capture, and integrations.",
    },
  ];

  // Accept pasted image URLs or Windows paths and normalize them for the browser.
  const normalizeImageSrc = (src) => {
    if (!src) return src;
    if (typeof src !== "string") return src;
    // already a web/data URL or absolute root path
    if (/^(https?:)|^data:|^\//i.test(src)) return src;
    // normalize backslashes to forward slashes
    const normalized = src.replace(/\\\\/g, "/").replace(/\\/g, "/");
    // if path contains ref_img folder, map to a root-served path: /ref_img/...
    const refMatch = normalized.match(/(ref_img\/.*)$/i);
    if (refMatch) {
      return `/${encodeURI(refMatch[1])}`;
    }
    // fallback: encode and return the normalized string
    return encodeURI(normalized);
  };

  const isLikelyImageString = (value) => {
    if (!value || typeof value !== "string") return false;
    if (/ref_img[\\/]/i.test(value)) return true;
    if (/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(value)) return true;
    // windows absolute path with an image filename
    if (/^[a-zA-Z]:[\\/].*\.(png|jpe?g|gif|webp|svg)$/i.test(value)) return true;
    return false;
  };

  return (
    <main className="blog-page-shell">
      <div className="blog-shell">
        <nav className="hero-nav blog-nav" aria-label="Blog navigation">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/#about">About us</a>
            <a href="/#pricing">Pricing</a>
            <a href="/blog">Blog</a>
          </div>
          <a className="brand" href="/" aria-label="TracemyPack home">
            <span className="brand-mark">
              <Boxes size={17} strokeWidth={2.4} />
            </span>
            <span>
              <strong>Trace</strong>
              <em>myPack</em>
            </span>
          </a>
          <Button className="nav-cta">
            Get started
            <ArrowRight size={15} strokeWidth={2.6} />
          </Button>
        </nav>

        <section className="blog-layout" aria-label="TraceMyPack blog">
          <aside className="blog-sidebar" aria-label="Blog categories">
            {sidebarGroups.map((group) => (
              <div className="sidebar-group" key={group.title}>
                <a href={`/blog/${group.articles[0].slug}`}>
                  <span>
                    {group.icon}
                    {group.title}
                  </span>
                  <ChevronRight size={14} strokeWidth={2.4} />
                </a>
                <div className="sidebar-links">
                  {group.articles.map((article) => (
                    <a
                      className={currentArticle?.slug === article.slug ? "active" : ""}
                      href={`/blog/${article.slug}`}
                      key={article.slug}
                    >
                      {article.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          <article className="blog-content" id="article">
            <div className="blog-hero-card">
              <a href="#article" className="eyebrow">
                {currentArticle?.group || "Delivery playbook"}
                <ChevronRight size={13} strokeWidth={2.2} />
              </a>
              <h1>
                {currentArticle?.title || "Getting Started"}
                <span>with TraceMyPack</span>
              </h1>
              <p>
                {currentArticle?.intro ||
                  "Learn how to set up tracking, keep riders aligned, and give customers clear delivery updates from pickup to proof of delivery."}
              </p>
              <div className="blog-search">
                <Search size={17} strokeWidth={2.2} />
                <span>Search guides, releases, and delivery tips</span>
              </div>
            </div>

            {currentArticle ? (
              <>
                {currentArticle.sections.map((section) => (
                  <section className="blog-article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body?.map((block, idx) => {
                          // string paragraph or image string
                          if (typeof block === "string") {
                            if (isLikelyImageString(block)) {
                              const src = normalizeImageSrc(block);
                              return (
                                <figure className="blog-figure" key={`img-${idx}`}>
                                  <img src={src} alt={section.heading} loading="lazy" decoding="async" />
                                </figure>
                              );
                            }
                            return <p key={`p-${idx}`}>{block}</p>;
                          }

                          // object with an `img` property
                          if (block && block.img) {
                            const src = normalizeImageSrc(block.img);
                            return (
                              <figure className="blog-figure" key={`img-${idx}`}>
                                <img src={src} alt={block.alt || section.heading} loading="lazy" decoding="async" />
                                {block.caption && <figcaption>{block.caption}</figcaption>}
                              </figure>
                            );
                          }

                          return null;
                        })}
                    {section.list && (
                      <ul className="blog-body-list">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
                <section className="blog-article-section">
                  <h2>Keep reading</h2>
                  <div className="article-list">
                    {latestArticles.slice(0, 4).map((article) => (
                      <a href={`/blog/${article.slug}`} key={article.slug}>
                        <FileText size={17} strokeWidth={2.2} />
                        <span>{article.title}</span>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <>
                {!isIndex && (
                  <section className="blog-article-section">
                    <h2>Article not found</h2>
                    <p>This guide does not exist yet. Choose one of the available TraceMyPack guides below.</p>
                  </section>
                )}
                <section className="blog-article-section">
                  <h2>Overview</h2>

  <p class="lead">
    TraceMyPack is a modern delivery operations platform that connects dispatchers,
    drivers, businesses, and customers through a single real-time logistics ecosystem.
    From order creation to final delivery confirmation, every stage of the delivery
    journey is tracked, monitored, and optimized to provide complete operational
    visibility and a better customer experience.
  </p>

  <h3>📦 Delivery Management</h3>
  <p>
    Create deliveries in seconds, organize shipments, assign riders, manage delivery
    priorities, and track package progress from pickup to delivery. Every order is
    automatically recorded with a detailed timeline, ensuring teams always know where
    a package is, who is responsible for it, and what stage it is currently in.
  </p>

  <h3>🗺️ Live Tracking & Visibility</h3>
  <p>
    Monitor active deliveries in real time through live GPS tracking, route progress,
    delivery milestones, and estimated arrival times. Operations teams gain a complete
    overview of their fleet while customers receive accurate and transparent updates
    without needing to contact support.
  </p>

  <h3>🚚 Driver Operations</h3>
  <p>
    Equip drivers with a dedicated mobile application designed for efficient delivery
    execution. Drivers can view assigned deliveries, navigate optimized routes, update
    delivery statuses, scan packages, capture proof of delivery, and communicate with
    customers directly from a streamlined workflow.
  </p>

  <h3>👥 Customer Experience</h3>
  <p>
    Provide customers with a modern tracking experience that includes live delivery
    updates, ETA notifications, delivery history, order status timelines, proof of
    delivery records, and instant visibility into their shipment's progress. Reduce
    uncertainty, improve trust, and minimize support inquiries.
  </p>

  <h3>📊 Operations & Analytics</h3>
  <p>
    Gain valuable insights into delivery performance through operational dashboards,
    driver activity monitoring, delivery success metrics, route efficiency tracking,
    failed delivery reporting, and performance analytics. Identify bottlenecks early
    and make data-driven decisions to improve overall logistics performance.
  </p>

  <h3>🔔 Smart Notifications</h3>
  <p>
    Keep everyone informed with automated delivery notifications, status changes,
    delay alerts, assignment updates, proof of delivery confirmations, and customer
    communication tools. Real-time notifications help reduce manual follow-ups while
    improving transparency across the entire delivery process.
  </p>

  <h3>🛡️ Proof of Delivery</h3>
  <p>
    Capture signatures, photos, timestamps, and GPS locations for every completed
    delivery. Maintain a verifiable record of each shipment to reduce disputes,
    improve accountability, and provide confidence for both businesses and customers.
  </p>

  <h3>🚀 Built to Scale</h3>
  <p>
    Whether you're operating a local courier service, managing an e-commerce delivery
    network, or coordinating large-scale logistics operations, TraceMyPack provides
    the tools needed to streamline workflows, improve visibility, enhance customer
    satisfaction, and scale delivery operations with confidence.
  </p>

                  <div className="quick-link-stack">
                    {quickLinks.map((article) => (
                      <a href={`/blog/${article.slug}`} key={article.slug}>
                        <span>{article.title}</span>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                    ))}
                  </div>
                </section>

                <section className="blog-article-section" id="categories">
                  <h2>Categories</h2>
                  <div className="blog-category-grid">
                    {categories.map((category) => (
                      <article className="blog-category-card" key={category.title}>
                        <span>{category.icon}</span>
                        <h3>{category.title}</h3>
                        <p>{category.copy}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="blog-article-section">
                  <h2>Latest articles</h2>
                  <div className="article-list">
                    {latestArticles.map((article) => (
                      <a href={`/blog/${article.slug}`} key={article.slug}>
                        <FileText size={17} strokeWidth={2.2} />
                        <span>{article.title}</span>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </a>
                    ))}
                  </div>
                </section>
              </>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}

function App() {
  return window.location.pathname.startsWith("/blog") ? <BlogPage /> : <Hero />;
}

createRoot(document.getElementById("root")).render(<App />);
