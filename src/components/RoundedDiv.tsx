function RoundedDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 flex border items-center justify-center rounded-full p-2 text-sm shadow-md transition-all duration-200 hover:bg-stone-200">
      {children}
    </div>
  )
}

export default RoundedDiv
