import Image from 'next/image';
import { Package, AlertTriangle, PiggyBank } from 'lucide-react';

const stats = [
  {
    label: '총 재료',
    value: '124',
    color: 'text-primary',
    bgIcon: 'bg-primary-container/10',
    iconColor: 'text-primary',
    icon: Package,
  },
  {
    label: '곧 만료',
    value: '08',
    color: 'text-tertiary',
    bgIcon: 'bg-tertiary-container/10',
    iconColor: 'text-tertiary',
    icon: AlertTriangle,
  },
  {
    label: '절약 금액',
    value: '₩142,500',
    color: 'text-org',
    bgIcon: 'bg-secondary-fixed/30',
    iconColor: 'text-org',
    icon: PiggyBank,
  },
];

const expiringItems = [
  {
    name: '우유',
    brand: 'Organic Valley · 1L',
    badge: '2일 후 만료',
    freshnessPercent: 15,
    meterColor: 'bg-tertiary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwd3OctrtDJ_DffklmgJkiwnM3RdZzy41pB1zhWygI4i2W8afCr_fGdlnxfp_gRtbuT8ccWvABLHGjQDVSjHMgjkBG6oyf7rt3awOA7Fa-yREQC3rNLmg_CSc6rsPFk1mEJVEV8LXhQeRHBHjqiBCwJy_-y0NJR54G6os86aWIEyzV9yg85MoQCAJujlRUrPYaZrxef0Bq5COBMuNLz8aQsp_42-xBATqVaRFTTkinka1UK08QbnyTTsFH-tDEMhMJcaNFTCcTEpL7',
    cardBg: 'bg-tertiary-container',
  },
  {
    name: '어린잎 시금치',
    brand: 'Fresh Farms · 500g',
    badge: '내일 만료',
    freshnessPercent: 5,
    meterColor: 'bg-error',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRM80TD2wVbiajRESkQgFc_79sY55jHNueqhXvT5eWGVJcKp5A3Ytt8fBBw0_EKjwxi-v-BDTVV2Zbpuqvvejgm09s75vGGl9iUCf3JwRVwL-MWg3eVvf9sE-sExH6SXan9rfL8tBOyskDpAKFSzCMOj6NpYftU0ShaGGVx4AmT3EmpHBS00AkormYcqHsYUg3RxInBntNF3Jy_XjeflKNn0cz8G2hPI7XhjR8xZX4cQP-5mY2w9Tr12Rbj5ADpXSOUq7NGtHYi0he',
    cardBg: 'bg-surface-container-lowest',
  },
];

const ingredients = [
  {
    name: '가염 버터',
    location: '냉장 · 유제품',
    expires: '2023. 10. 24',
    status: 'fresh' as const,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG7MHPjbK24vbP-qeKyOVqpZThtfpLE9w1gppX8vgEhlbKBfVLXo0Cxpw480BntrY4AEyJpPndPR1YM2avBDuzsxUBw3_wy2GbG8t_IWvi9k5Q4ugsQrf_LoGDvEW4cvZiFA1_QECISxnXIGs8x_x1wrgasD6s9-_KWFFcmOSyGy_wZ3Y7TG-nn-OL6SCGBu_wSkr4OvXT_fCYLCt9KM69_wgDA_L6w1j-fle-QAn6i8LnBCCObCxf62yRDTlv4y8xY2mnDBXV9qt3',
  },
  {
    name: '그릭 요거트',
    location: '냉장 · 유제품',
    expires: '2023. 10. 14',
    status: 'expiring' as const,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYWi3Gwkxcknqn4ZnUW3Xj0u8pdbjs5cBzHr9OOOkidGlDW6Qk0mZEfwO6DkqMZJHSPKU9Ma1MiUynnMI8fmGIn8WP3xy6ZKLeE0Wy04ua7O8lHMEu5Ad5Zv4hQ6-OfmsLLSLjc5gef72s6MTPBihKMhaZs1rOkw3AJTVROno7oQkjO2MgmJ9mkC3WHCdQtvLi55nlxNGO-8kSMtYt7Za1guGu7P_IIMItQSljL7TiZP1TSpX0saBB0VSOh-qjnTElktLgPHHDsTtk',
  },
  {
    name: '하스 아보카도',
    location: '실온 · 과채류',
    expires: '2023. 10. 09',
    status: 'expired' as const,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqrQMe7CluTTAEH2jxengzBcbV0kahAVaJ4_D0Fm9qfIc14dv9NRiQYD9Iic0hC5OjUWt27IJUklciNE3Jw4XSrGXt9FY4E_mxITSG3G2ucc3eAOXs6szBt8SklVOFTcfbb_5Fb7Fxk-pIbPqSmqtLikdzJIDIyNpAvOcKmtzoi1QDeiiYgPCM3Yo620TDPLsak0T1LI8Em2IxLdWsM7ZDmUlh5_Fy0mwMYEXOays31lwd0bErOC-SUPNfS-JjdX8xcOpVdbaOBQez',
  },
  {
    name: '방울 토마토',
    location: '냉장 · 과채류',
    expires: '2023. 10. 29',
    status: 'fresh' as const,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh4NzWD0WrSlvBQBLl0O4YAqRX8yUAw1Ia3tqUngMGPy4ukYM7edCn_OsvcaHydWO5H-JxtAANd1lxuh2O7TqPmgPNYCN33CddibihWLNIniJn42yVGvJB-d42t9X_M0i6NXRSRfBsnGk8euqB92Z_0mlk06gxLgqqkF6NCSYv-TU1ZW4vPlfDfbEQqVdqfVnJQtDNOYSnHFRAULqna58Q_XZUjFkSu207te5wxt2CibFcHJ4tabsA_1162Ik3cZ6yBGHXx3dDI1GV',
  },
  {
    name: '디종 머스터드',
    location: '실온 · 소스류',
    expires: '2023. 12. 15',
    status: 'fresh' as const,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHRup5z1Lp5awIF-aGL5usISJN9qRsoHhRWlB7j09u4ygtSRUuTnfA37x1rCvOrCpJ-PwIHZDK7t3qaKYojqF0v70wXnBwYPMd5Og6mQqUJvy7yFMf5BHM1QmIxvfKsTXxO2gB1topTVqtAvyObVQaYDMDUOey4VMbBf7QdHw2W3rmISNxujfijBLu97ePBB63_AtgbkGGYmqOcrPwvLARwgfDeCeZjwdZsthKh2x6Yx8Is3vTL2TK-6jILWdBpeUHkFwsItU5AmsB',
  },
];

const statusConfig = {
  fresh: { label: '신선', className: 'bg-primary-container/10 text-primary' },
  expiring: { label: '만료 임박', className: 'bg-tertiary-container/10 text-tertiary' },
  expired: { label: '만료', className: 'bg-error-container/10 text-error' },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 pt-2">

      {/* Editorial Title */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-primary mb-1">대시보드</p>
        <h1 className="font-display text-4xl font-bold text-on-surface leading-none">냉장고 현황.</h1>
        <p className="mt-2 text-sm text-on-surface-variant">재료를 정확하게 관리하세요.</p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-3xl bg-surface-container-lowest p-6 shadow-ambient flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.05rem] text-on-surface-variant mb-1">
                  {stat.label}
                </p>
                <p className={`font-display text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`${stat.bgIcon} p-4 rounded-full`}>
                <Icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Two-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

        {/* Left: Expiring Soon */}
        <section className="xl:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-on-surface">곧 만료</h2>
            <a href="#" className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity">
              전체 보기
            </a>
          </div>

          {expiringItems.map((item) => (
            <div
              key={item.name}
              className={`${item.cardBg} rounded-3xl overflow-hidden shadow-ambient group relative`}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {item.badge}
                </span>
              </div>
              <div className="h-44 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={600}
                  height={176}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6 bg-surface-container-lowest/80 backdrop-blur-md">
                <h3 className="font-display text-lg font-semibold text-on-surface mb-0.5">{item.name}</h3>
                <p className="text-sm text-on-surface-variant mb-4">{item.brand}</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-[0.05rem] text-on-surface-variant">
                    <span>신선도</span>
                    <span>{item.freshnessPercent}% 남음</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.meterColor} rounded-full`}
                      style={{ width: `${item.freshnessPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Right: All Ingredients */}
        <section className="xl:col-span-7">
          <div className="rounded-3xl bg-surface-container-low p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="font-display text-xl font-bold text-on-surface">전체 재료</h2>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-wide">
                  전체
                </button>
                {['냉장', '냉동', '실온'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold uppercase tracking-wide hover:opacity-80 transition-opacity"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {ingredients.map((item) => {
                const status = statusConfig[item.status];
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl bg-surface-container-lowest px-5 py-4 flex items-center gap-4 hover:shadow-ambient transition cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container shrink-0">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-semibold text-on-surface truncate">{item.name}</h4>
                      <p className="text-xs text-on-surface-variant">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="hidden sm:block text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.05rem] text-on-surface-variant mb-0.5">
                          만료일
                        </p>
                        <p className="text-xs font-semibold text-on-surface">{item.expires}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${status.className}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                더 보기
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
