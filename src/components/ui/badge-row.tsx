export function BadgeRow({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 my-4">
      {children}
    </div>
  )
}