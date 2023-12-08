
const HeaderItem = ({name, Icon}) => {
  return (
    <div className="text-white flex items-center text-[20px] gap-3 
    font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
        <Icon/>
        <h2 className="">{name}</h2>
    </div>
  )
}

export default HeaderItem