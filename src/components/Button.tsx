function Button(props: any) {
  return (
    <button
      className="border rounded-full py-2 px-4 text-sm hover:bg-gray-300/50 shadow-md transition-all duration-200 disabled:bg-gray-300/50"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
