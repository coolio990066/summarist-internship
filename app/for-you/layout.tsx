export default function ForYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="for-you-layout">
      {/* Add navbar, sidebar, etc. here */}
      {children}
    </div>
  )
}
