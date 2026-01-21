import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <div className = "px-4 py-5">
        <div className = "">
          {/*Side Navbar*/}
          <aside className = "flex flex-row w-[20%]">
            <div className = "top-5 space-y-5">
              <div className = "flex items-center gap-3">
                <div className = "grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <span className = "text-sm font-black tracking-tight">DC</span>
                </div>
                <div>
                    <div className = "text-sm font-extrabold leading-5">Double Cheque</div>
                    <div className = "text-xs text-primary">Explainable Risk</div>
                </div>
              </div>

              <nav className = "space-y-1">
                <NavItem active label = "Dashboard" />
                <NavItem label = "Accounts" />
                <NavItem label = "Cards" />
                <NavItem label = "Transactions" />
                <NavItem label = "Payments" />
                <NavItem label = "Reports" />
              </nav>
              
              <div className = "rounded-2xl bg-white/[0.03] p-3 ring-1 ring-white/10">
                <div className = "mb-2 text-xs font-semibold text-primary">Balances</div>
                <div className = "space-y-2">
                  <BalanceRow color = "bg-sky-400" currency = "CAD" amount = "100,050.67" />
                  <BalanceRow color = "bg-pink-400" currency = "USD" amount = "999,888.04" />
                  <BalanceRow color = "bg-purple-400" currency = "GBP" amount = "100.66" />
                </div>
              </div>

              <div className = "rounded-2xl bg-white/[0.03] p-3 ring-1 ring-white/10">
                <div className = "text-xs font-semibold text-primary">Risk</div>
                <div className = "mt-1 text-sm font-extrabold">Quiet</div>
                <div className = "mt-2 text-xs text-primary">
                  Flagged Transactions Will Show Here with Reason
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </div>
  );
}

//function for nav items
function NavItem({label, active}) {
  return (
    <a
      href = "#/"
      className = {[
        "group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold",
        "ring-1 ring-white/0 over:bg-white/5 hover:ring-white/10",
        active ? "bg-white/5 ring-1 ring-white/10" : "text-secondary",
      ].join("")}
    >
      <span 
        className = {[
          "h-2 w-2 rounded-full",
          active ? "bg-sky-400" : "bg-white/20 group-hover:bg-white/30",
        ].join(" ")}
      />
      {label}
    </a>
  )
}

//function for balance setup
function BalanceRow({ currency, amount, color }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2 ring-1 ring-white/10 overflow-hidden">
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
        <div className="text-xs font-bold text-dark">{currency}</div>
        <div className="text-xs font-extrabold text-secondary">{amount}</div>
      </div>
    </div>
  );
}

/** Simple chart placeholder: looks like a chart but no data yet */
function FakeChart() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <svg viewBox="0 0 600 220" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>

        <path
          d="M0,150 C80,120 120,170 180,130 C240,90 280,160 340,110 C400,60 460,140 520,100 C560,80 590,85 600,70 L600,220 L0,220 Z"
          fill="url(#area)"
        />
        <path
          d="M0,150 C80,120 120,170 180,130 C240,90 280,160 340,110 C400,60 460,140 520,100 C560,80 590,85 600,70"
          fill="none"
          stroke="rgba(56,189,248,0.9)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <circle cx="340" cy="110" r="7" fill="rgba(56,189,248,1)" />
        <circle cx="340" cy="110" r="14" fill="rgba(56,189,248,0.18)" />

        <g transform="translate(360,78)">
          <rect
            x="0"
            y="0"
            width="160"
            height="60"
            rx="14"
            fill="rgba(2,6,23,0.75)"
            stroke="rgba(255,255,255,0.12)"
          />
          <text x="14" y="22" fill="rgba(226,232,240,0.85)" fontSize="12" fontWeight="700">
            9:14 AM
          </text>
          <text x="14" y="45" fill="rgba(226,232,240,0.95)" fontSize="16" fontWeight="900">
            $80,420.50
          </text>
        </g>
      </svg>
    </div>
  );
}
