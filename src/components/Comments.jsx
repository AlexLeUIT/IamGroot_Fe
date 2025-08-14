import Comment from "./Comment"

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className="text-xl  text-green-700">Comments🎋</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea placeholder="Show me your think..." className="w-full p-4 rounded-xl"/>
            <button className="bg-green-800 px-4 py-3 text-white font-medium rounded-xl">Show</button>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default Comments