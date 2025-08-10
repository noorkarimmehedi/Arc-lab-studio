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
      title: "Book a Call",
      value: "Schedule a 30-min chat",
      link: "https://cal.com/noor-foumnf/15min"
    },
    {
      title: "Response Time",
      value: "Within 2 hours"
    }
  ];

  return (
    <section id="contact" className="pt-10 pb-6 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6">
            READY TO <span className="inline-block px-3 py-1 bg-green-500 text-white font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">LAUNCH?</span>
          </h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto uppercase">
            Let's discuss your MVP and get you to market FASTER than you thought possible!
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 mb-16">
            {contactInfo.map((info, index) => {
              const Content = () => (
                <div className="text-center w-full">
                  <h3 className="font-black uppercase mb-1">{info.title}</h3>
                  <p className="font-bold text-sm uppercase">{info.value}</p>
                </div>
              );
              
              return info.link ? (
                <a 
                  key={index} 
                  href={info.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-4 bg-white text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full md:w-auto md:min-w-[260px] lg:min-w-[280px]">
                  <Content />
                </a>
              ) : (
                <div key={index} className="inline-block px-7 py-4 bg-white text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full md:w-auto md:min-w-[260px] lg:min-w-[280px]">
                  <Content />
                </div>
              );
            })}
          </div>
        </div>

        {/* Cal.com integration hidden as requested */}

      </div>
    </section>
  );
}
