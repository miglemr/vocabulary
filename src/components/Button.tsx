function Button(props: any) {
  return (
    <button
      className="border rounded-full py-2 px-4 text-xs shadow-md transition-all duration-200 disabled:bg-stone-100 hover:bg-stone-100"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
