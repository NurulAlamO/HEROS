import { APP_STORE_URL, PLAY_STORE_URL } from '../configs';
import ellifs from '../assets/Ellipse 24.png'
import ellifs2 from '../assets/Ellipse 26.png'
import ellifs3 from '../assets/Ellipse 28.png'
import ellifs5 from '../assets/Ellipse 25.png'
import ellifs6 from '../assets/Ellipse 27.png'
import ellifs7 from '../assets/Ellipse 29.png'
import plastore from '../assets/fi_16076057.png'
import appsstore from '../assets/fi_5977575.png'

const floatingIcons = [
  {
    className: 'left-[6%] top-[22%] sm:left-[18%] sm:top-[18%]',
    bg: '#5ed4f5',
    icon: (
      <img
        src={ellifs}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
  {
    className: 'left-[4%] top-[30%] sm:left-[10%] sm:top-[32%]',
    bg: '#1e2a5a',
    icon: (
     <img
        src={ellifs2}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
  {
    className: 'left-[8%] top-[68%] sm:left-[5%] sm:top-[48%]',
    bg: '#3dd68c',
    icon: (
       <img
        src={ellifs3}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
  {
    className: 'right-[6%] top-[20%] sm:right-[18%] sm:top-[16%]',
    bg: '#ff5c5c',
    icon: (
      <img
        src={ellifs5}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
  {
    className: 'right-[4%] top-[36%] sm:right-[12%] sm:top-[30%]',
    bg: '#3b6cff',
    icon: (
     <img
        src={ellifs6}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
  {
    className: 'right-[8%] top-[56%] sm:right-[7%] sm:top-[46%]',
    bg: '#6ec8ff',
    icon: (
      <img
        src={ellifs7}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
      />
    ),
  },
];

const stats = [
  {
    label: 'Total Downloads',
    value: '29.6M',
    subtext: '21% More Than Last Month',
  },
  {
    label: 'Total Reviews',
    value: '906K',
    subtext: '46% More Than Last Month',
  },
  {
    label: 'Active Apps',
    value: '132+',
    subtext: '31 More Will Launch',
  },
];

function StoreBadge({ href, children, logo }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2.5 rounded-lg border border-[#e2e5ec] bg-white px-5 py-2.5 text-sm font-semibold text-[#2d2d3a] shadow-sm transition hover:bg-[#fafafa]"
    >
      {logo}
      {children}
    </a>
  );
}

function PhoneMockup() {
  return (
    <div
      className="relative z-10 w-[320px] rounded-[42px] border-[8px] 
      border-black bg-black p-[6px] 
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-[#161616]" />
      <div className="overflow-hidden rounded-[34px] bg-[#111827] text-white">
        <div className="flex items-center justify-between px-3 pt-3 text-[10px]">
          <div className="flex items-center gap-1 font-medium text-white/80">
            <span className="text-white/50">‹</span>
            <span>All Courses</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-[#7c3aed] px-2 py-[2px] text-[8px] font-semibold">
              PRO
            </span>

            <div className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-[2px] text-[8px]">
              <span className="text-yellow-400">🪙</span>
              <span>345</span>
            </div>
            <span className="text-[11px]">🔔</span>
          </div>
        </div>
        <div className="mt-3 flex gap-2 px-3 text-[8px]">
          <button className="rounded-full bg-[#7c3aed] px-3 py-1 font-medium">
            Regular Course
          </button>
          <button className="rounded-full border border-white/15 px-3 py-1 text-white/60">
            Video Course
          </button>
        </div>
        <div className="px-3 pt-3">
          <h2 className="text-[12px] font-semibold">
            chose your Course
          </h2>
        </div>
        <div className="space-y-3 px-3 pb-5 pt-3">
          <div className="relative overflow-hidden rounded-[24px] 
            bg-gradient-to-br from-[#7c3aed] to-[#9333ea] p-4">
            <div className="absolute right-[-20px] top-[-20px] 
            h-24 w-24 rounded-full bg-white/10" />
            <div className="relative z-10">
              <h3 className="max-w-[120px] text-[12px] font-bold leading-4">
                Complete Web Development
              </h3>
              <p className="mt-1 text-[8px] text-white/70">
                200 Lesson
              </p>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-[7px] text-white/70">
                  <span>Progress</span>
                  <span>32%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[32%] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden 
            rounded-[24px] bg-gradient-to-br from-[#fb923c] to-[#f97316] p-4">
            <div className="absolute right-[-10px] bottom-[-10px] h-20 w-20 
              rounded-full bg-white/10" />
            <div className="relative z-10">
              <h3 className="max-w-[140px] text-[12px] font-bold leading-4">
                Python Programming
              </h3>
              <p className="mt-1 text-[8px] text-white/70">
                Beginner to advance
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-2 py-1 text-[7px]">
                  120 Lesson
                </span>
                <span className="text-[16px]">▶</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden 
            rounded-[24px] bg-gradient-to-br from-[#ec4899] to-[#f43f5e] p-4">
            <div className="absolute left-[-10px] top-[-10px] 
              h-20 w-20 rounded-full bg-white/10" />
            <div className="relative z-10">
              <h3 className="max-w-[140px] text-[12px] font-bold leading-4">
                Mobile App Development
              </h3>
              <p className="mt-1 text-[8px] text-white/70">
                Start learning today
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-white/20 px-2 py-1 text-[7px]">
                  120 Lesson
                </span>
                <span className="text-[16px]">📱</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 mb-3 flex items-center justify-around rounded-full bg-[#1f2937] py-3 text-[14px]">
          <span className="text-[#8b5cf6]">🏠</span>
          <span className="text-white/50">📚</span>
          <span className="text-white/50">❤️</span>
          <span className="text-white/50">👤</span>
        </div>
      </div>
    </div>
  );
}


export default function HeroShowcase() {
  return (
    <section className="overflow-hidden">
      <div className="bg-white px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-[#1a1a2e] sm:text-4xl md:text-5xl">
            We Build{' '}
            <br />
            <span className="bg-gradient-to-r from-[#8a4fff] to-[#4f8cff] bg-clip-text text-transparent">
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base md:text-lg">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <StoreBadge
              href={PLAY_STORE_URL}
              logo={
               <img src={plastore}></img>
              }
            >
              Google Play
            </StoreBadge>
            <StoreBadge
              href={APP_STORE_URL}
              logo={
                <img src={appsstore}></img>
              }
            >
              App Store
            </StoreBadge>
          </div>
        </div>

        <div className="relative mx-auto mt-14 flex min-h-[320px] max-w-4xl items-center justify-center sm:min-h-[380px] md:mt-16">
          {floatingIcons.map((item, index) => (
            <span
              key={index}
              className={`absolute flex h-11 w-11 items-center justify-center rounded-full shadow-md sm:h-[52px] sm:w-[52px] ${item.className}`}
              style={{ backgroundColor: item.bg }}
              aria-hidden
            >
              {item.icon}
            </span>
          ))}
          <PhoneMockup />
        </div>
      </div>

      <div className="bg-[#8a4fff] px-4 py-10 text-center 
        text-white md:px-6 md:py-14 relative z-30 -top-80">
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
          Trusted By Millions, Built For You
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-4">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <p className="text-sm text-white/85 sm:text-base">{item.label}</p>
              <p className="text-4xl font-extrabold leading-none sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
