import { useState, useEffect } from "react";
import { Send } from "lucide-react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function Contact() {
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);

  useEffect(() => {
    // Add Cal initialization function to window
    (function (C: typeof window, A: string, L: string) {
      let p = function (a: { q: any[] }, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal as { loaded?: boolean; ns?: any; q?: any[] };
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api as any, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal as any, ["initNamespace", namespace]);
            } else p(cal as any, ar);
            return;
          }
          p(cal as any, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal
    window.Cal?.("init", "chat-with-noor-from-arc-lab", { origin: "https://app.cal.com" });

    // Check periodically for Cal.ns to be available
    const initInterval = setInterval(() => {
      if (window.Cal?.ns && window.Cal.ns["chat-with-noor-from-arc-lab"]) {
        window.Cal.ns["chat-with-noor-from-arc-lab"]("inline", {
          elementOrSelector: "#my-cal-inline-chat-with-noor-from-arc-lab",
          config: { layout: "month_view" },
          calLink: "noor-foumnf/chat-with-noor-from-arc-lab",
        });

        window.Cal.ns["chat-with-noor-from-arc-lab"]("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });

        // Set loading to false after a short delay to ensure calendar is rendered
        setTimeout(() => setIsCalendarLoading(false), 500);
        clearInterval(initInterval);
      }
    }, 100);

    return () => {
      clearInterval(initInterval);
    };
  }, []);

  const contactInfo = [
    {
      title: "Email",
      value: "hello@arc-lab.studio"
    },
    {
      title: "Response Time",
      value: "Within 2 hours"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 transform -rotate-1">
            READY TO <span className="text-neubrutalism-accent transform rotate-3 inline-block">LAUNCH</span>?
          </h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto uppercase">
            Let's discuss your MVP and get you to market FASTER than you thought possible!
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 mb-16">
            {contactInfo.map((info, index) => {
              return (
                <button key={index} className="uiverse-btn px-0 w-full md:w-auto max-w-[280px]">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front flex flex-col items-center gap-2 py-4 px-16 md:px-6 w-full">
                    <div className="text-center w-full">
                      <h3 className="font-black uppercase mb-1">{info.title}</h3>
                      <p className="font-bold text-sm uppercase">{info.value}</p>
                    </div>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-3 px-12 bg-white border-4 border-black" style={{ boxShadow: '8px 8px 0px #000000' }}>
          {isCalendarLoading && (
            <div className="flex items-center justify-center min-h-[600px]">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-black font-bold">Loading Calendar...</p>
              </div>
            </div>
          )}
          <div 
            id="my-cal-inline-chat-with-noor-from-arc-lab" 
            className="transition-opacity duration-500"
            style={{
              width: "100%",
              minHeight: "600px",
              height: "100%",
              overflow: "scroll",
              opacity: isCalendarLoading ? 0 : 1
            }} 
          />
        </div>

      </div>
    </section>
  );
}
