type SectionAtmosphereProps = {
  variant: 'projects' | 'services' | 'about' | 'process' | 'contact'
}

const telemetry = {
  projects: ['HGC // PROJECT INDEX', 'render(realWork)'],
  services: ['HGC // SOLUTION MAP', 'scope.before(tool)'],
  about: ['HGC // PROFILE CORE', 'experience + technology'],
  process: ['HGC // DELIVERY FLOW', 'diagnose > build > validate'],
  contact: ['HGC // OPEN CHANNEL', 'message.ready = true'],
}

export function SectionAtmosphere({ variant }: SectionAtmosphereProps) {
  const [label, code] = telemetry[variant]

  return (
    <div className={`section-atmosphere section-atmosphere--${variant}`} aria-hidden="true">
      <span className="section-atmosphere__grid" />
      <span className="section-atmosphere__glow" />
      <span className="section-atmosphere__mark" />
      <span className="section-atmosphere__orbit"><i /><i /><b /></span>
      <span className="section-atmosphere__rail"><i /><i /><i /></span>
      <span className="section-atmosphere__telemetry"><b>{label}</b><code>{code}</code></span>
    </div>
  )
}
