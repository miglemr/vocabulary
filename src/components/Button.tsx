function Button(props: any) {
  return (
    <button
      className="rounded-full py-2 px-4 text-xs font-medium transition-all duration-200 bg-black text-white disabled:bg-stone-200 disabled:text-black hover:bg-dark-pink hover:text-black"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
