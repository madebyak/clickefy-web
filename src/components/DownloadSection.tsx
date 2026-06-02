import { download } from "@/content";
import { site } from "@/lib/site";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative py-32 border-t border-line bg-bg-2 scroll-mt-28"
    >
      <div className="max-w-[1240px] mx-auto px-8 text-center">
        <span className="inline-block font-mono text-[11.5px] tracking-[0.06em] text-ink-3 mb-6">
          {"// download"}
        </span>
        <h2 className="text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight font-medium text-ink">
          {download.heading}
        </h2>
        <p className="mt-5 text-[18px] text-ink-2 max-w-[48ch] mx-auto">
          {download.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={site.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full text-[15px] font-medium bg-violet text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-violet-soft transition-colors"
          >
            {download.appStoreLabel}
          </a>
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full text-[15px] font-medium border border-line-2 text-ink hover:border-violet hover:text-violet transition-colors"
          >
            {download.playStoreLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
