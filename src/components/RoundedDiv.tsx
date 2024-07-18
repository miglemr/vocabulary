function RoundedDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border rounded-full p-2 text-sm shadow-md">
      {children}
    </div>
  )
}

export default RoundedDiv
